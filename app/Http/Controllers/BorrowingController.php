<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Borrowing;

class BorrowingController extends Controller
{
    public function store(Request $request)
    {
        // Validate input
        $request->validate([
            'book_id' => 'required|exists:books,id',
        ]);

        // Create borrowing record
        Borrowing::create([
            'user_id' => Auth::id(),
            'book_id' => $request->book_id,
            'BorrowDate' => now(),
            'Status' => 'borrowed',
        ]);

        // Redirect back with success message
        return redirect()->route('koleksi_buku')->with('success', 'Buku berhasil dipinjam!');
    }
}
