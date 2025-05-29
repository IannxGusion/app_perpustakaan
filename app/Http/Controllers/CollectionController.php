<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Borrowing;
use App\Models\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CollectionController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'collection_name' => 'required|max:50',
        ]);

        Collection::create([
            'user_id' => Auth::id(),
            'name' => $request->collection_name,
        ]);

        return redirect()->back();
    }

    public function index(Request $request)
    {
        $userId = Auth::id();
        $collections = Collection::with(['borrowings.book.categories'])
            ->where('user_id', $userId)
            ->latest()
            ->get();

        $selectedCollectionId = $request->query('selected_collection_id');
        if (! $selectedCollectionId && $collections->count() > 0) {
            $selectedCollectionId = $collections->first()->id;
        }

        $selectedCollection = null;
        $books = [];
        if ($selectedCollectionId) {
            $selectedCollection = $collections->where('id', $selectedCollectionId)->first();
            if ($selectedCollection) {
                $books = $selectedCollection->borrowings->map(function ($borrowing) {
                    return $borrowing->book;
                })->filter()->values();
            }
        }

        return inertia('collections', [
            'collections' => $collections,
            'selectedCollection' => $selectedCollection,
            'books' => $books,
            'selectedCollectionId' => $selectedCollectionId,
        ]);
    }

    public function add(Request $request, $id)
    {
        $request->validate([
            'collection_id' => 'required|exists:collections,id',
        ]);

        $borrowing = Borrowing::findOrFail($id);
        $borrowing->collection()->attach($request->collection_id);
        $borrowing->save();

        $book = Book::findOrFail($borrowing->book_id);
        $book->collected = 'Yes';
        $book->save();

        return redirect()->back();
    }
}
