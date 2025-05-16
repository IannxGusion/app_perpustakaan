<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\User;
use App\Models\Book;
use App\Models\Category;
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
            'BorrowDate' => now(),
            'ReturnDate' => now()->addMonth(),
            'Status' => 'Borrows',
        ]);

        return redirect()->route('borrow.index');
    }

    public function index()
    {
        $borrowings = Borrowing::with(['book.category'])->get();
        return inertia('koleksi_buku', compact('borrowings'));
    }

    public function crud_index()
    {
        $borrowings = Borrowing::with('user', 'book')->get();
        $users = User::all();
        $books = Book::all();
        return Inertia('admin/peminjaman/crud_peminjaman', compact('borrowings', 'users', 'books'));
    }

    public function collection()
    {
        $borrowings = Borrowing::with(['book.category'])->get();
        return inertia('koleksi_buku', compact('borrowings'));
    }
}
