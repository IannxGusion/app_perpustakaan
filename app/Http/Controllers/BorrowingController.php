<?php

namespace App\Http\Controllers;

use App\Models\Borrowing;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BorrowingController extends Controller
{
    /**
     * Display a listing of the borrowings.
     */
    public function index()
    {
        $borrowings = Borrowing::with(['book.category'])->latest()->get();

        return inertia('borrowings', compact('borrowings'));
    }

    /**
     * Store a new borrowing record.
     */
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
            'status' => 'Borrows',
        ]);

        return redirect()->route('borrowings.index');
    }

    /**
     * Admin: List all borrowings.
     */
    public function adminIndex()
    {
        $borrowings = Borrowing::with(['book.category', 'user'])->get();

        return inertia('admin/borrowings/index', compact('borrowings'));
    }

    /**
     * Remove the specified borrowing.
     */
    public function adminDelete($id)
    {
        $borrowing = Borrowing::findOrFail($id);
        $borrowing->delete();

        return redirect()->back();
    }

    /**
     * Librarian: List all borrowings.
     */
    public function librarianIndex()
    {
        $borrowings = Borrowing::with(['book.category', 'user'])->get();

        return inertia('librarian/work', compact('borrowings'));
    }

    /**
     * Librarian: List all borrowings.
     */
    public function librarianDelete($id)
    {
        $borrowing = Borrowing::findOrFail($id);
        $borrowing->delete();

        return redirect()->back();
    }
}
