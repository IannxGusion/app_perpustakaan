<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\User;
use App\Models\Book;
use App\Models\Borrowing;

class BorrowingController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'book_id' => 'required|exists:books,id',
        ]);

        Borrowing::create([
            'user_id' => Auth::id(),
            'book_id' => $request->book_id,
            'borrow_date' => now(),
            'return_date' => now()->addMonth(),
            'Status' => 'Borrows',
        ]);

        return redirect()->route('borrow.index');
    }

    // CRUD ===================================================================================
    public function crud_index()
    {
        $borrowings = Borrowing::with(['book.category'])->get();

        return inertia('admin/peminjaman/crud_peminjaman', compact('borrowings'));
    }
    // CRUD ===================================================================================

    public function collection()
    {
        $borrowings = Borrowing::with(['book.category'])->get();

        return inertia('koleksi_buku', compact('borrowings'));
    }
}
