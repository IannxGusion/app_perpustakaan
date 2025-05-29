<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use App\Models\Borrowing;
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

    public function index()
    {
        $collections = Collection::with('borrowings.book.categories')->latest()->get();

        return inertia('collections', compact('collections'));
    }

    public function add(Request $request, $id)
    {
        $request->validate([
            //'borrowings_id' => 'required|exists:borrowings,id',
            'collection_id' => 'required|exists:collections,id',
        ]);

        $borrowing = Borrowing::findOrFail($id);
        $borrowing->collection()->attach($request->collection_id);
        $borrowing->save();

        return redirect()->back();
    }
}
