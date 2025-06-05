<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('query');

        // Perform search using Meilisearch
        $books = Book::search($query)->get();

        return inertia('dashboard', compact('books'));
    }
}