<?php

namespace App\Http\Controllers;

use App\Models\Book;
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

    public function index()
    {
        $collections = Collection::with('borrowings.book.categories')->latest()->get();

        return inertia('collections', compact('collections'));
    }
}
