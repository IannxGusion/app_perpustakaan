<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use App\Models\Borrowing;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CollectionController extends Controller
{
    public function store(Request $request, $id)
    {
        $request->validate([
            'collection_name' => 'required|max:50',
        ]);

        Collection::create([
            'user_id' => Auth::id(),
            'borrowing_id' => $id,
            'name' => $request->collection_name
        ]);

        return redirect()->route('collections.index');
    }

    public function index()
    {
        $collections = Collection::with(['borrowing'])->get();

        return inertia('collections', compact('collections'));
    }
}