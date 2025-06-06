<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Category;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('query');

        if (! $query) {
            $books = Book::latest()->take(10)->get(); // default fallback
            $categories = Category::latest()->take(10)->get(); // default fallback
        } else {
            $books = Book::search($query)->get();
            $categories = Category::all();
        }

        return response()->json([
            'books' => $books,
            'categories' => $categories,
        ]);
    }
}
