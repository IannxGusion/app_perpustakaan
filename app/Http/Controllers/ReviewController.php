<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
    public function index()
    {
        $reviews = Review::with(['book.category', 'user'])->latest()->get();

        return inertia('pinjam_buku', compact('reviews'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'book_id' => 'required|exists:books,id',
            'star' => 'required|integer',
            'comment' => 'nullable|string',
        ]);

        Review::create([
            'user_id' => Auth::id(),
            'book_id' => $request->book_id,
            'star' => $request->star,
            'comment' => $request->comment,
            'created_at' => now(),
        ]);

        return redirect()->back();
    }
}
