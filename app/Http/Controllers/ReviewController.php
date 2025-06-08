<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
    public function store(Request $request, $id)
    {
        $request->validate([
            'star' => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string|max:1000',
        ]);

        $book = Book::findOrFail($id);

        $review = Review::create([
            'user_id' => Auth::id(),
            'star' => $request->star,
            'comment' => $request->comment ?? '_',
        ]);

        // Attach review to book
        $book->reviews()->attach($review->id);

        return redirect()->back()->with('success', 'Ulasan berhasil dikirim!');
    }

    // public function index -> BookController as "show" method
}
