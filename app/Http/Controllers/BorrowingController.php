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
        // Validate input
        $request->validate([
            'book_id' => 'required|exists:books,id',
        ]);

        // Create borrowing record
        Borrowing::create([
            'user_id' => Auth::id(),
            'book_id' => $request->book_id,
            'BorrowDate' => now(),
            'ReturnDate' => now()->addMonth(),
            'Status' => 'Borrows',
        ]);

        // Redirect back with success message
        return redirect()->route('borrow.index');
    }

    public function index()
    {
        $books = Book::with('category')->get();
        $categories = Category::all();
        return Inertia('koleksi_buku', compact('books', 'categories'));
    }

    public function crud_index()
    {
        $borrowings = Borrowing::with('user', 'book')->get();
        $users = User::all();
        $books = Book::all();
        return Inertia('admin/peminjaman/crud_peminjaman', compact('borrowings', 'users', 'books'));
    }
}
