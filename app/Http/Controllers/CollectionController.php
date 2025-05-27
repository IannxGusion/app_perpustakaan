<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CollectionController extends Controller
{
    public function store(Request $request, $id)
    {
        $request->validate([
            'collection_name' => 'required|max:50',
            'book_id' => 'required|exists:books,id',
        ]);

        Collection::create([
            'user_id' => Auth::id(),
            'borrowing_id' => $id,
            'name' => $request->collection_name,
        ]);

        $book = Book::findOrFail($request->book_id);
        $book->collected = 'Yes';
        $book->save();

        return redirect()->route('collections.index');
    }

    public function index()
    {
        $collections = Collection::with(['borrowing.book.category'])->latest()->get();

        return inertia('collections', compact('collections'));
    }
}
