<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
    public function store(Request $request, $id)
    {
        $request->validate([
            'book_id' => 'required|exists:books,id',
            'star' => 'required|integer',
            'comment' => 'nullable|string',
        ]);

        Review::create([
            'user_id' => Auth::id(),
            'book_id' => Book::findOrFail($id),
            'star' => $request->star,
            'comment' => $request->comment,
        ]);

        return redirect()->back();
    }
}
