<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Borrowing;
use App\Models\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BorrowingController extends Controller
{
    /**
     * Display a listing of the borrowings.
     */
    public function index()
    {
        $userId = Auth::id();
        $borrowings = Borrowing::with(['book.categories'])
            ->where('user_id', $userId)
            ->latest()
            ->get();

        $collections = Collection::where('user_id', $userId)->latest()->get();

        return inertia('borrowings', compact('borrowings', 'collections'));
    }

    /**
     * Store a new borrowing record.
     */
    public function store(Request $request)
    {
        $request->validate([
            'book_id' => 'required|exists:books,id',
            'return_date' => [
                'required',
                'date',
                'after_or_equal:today',
                function ($attribute, $value, $fail) {
                    $maxDate = now()->addMonths(3)->endOfDay();
                    if (strtotime($value) > $maxDate->timestamp) {
                        $fail('The return date may not be more than 3 months from today.');
                    }
                },
            ],
        ]);

        Borrowing::create([
            'user_id' => Auth::id(),
            'book_id' => $request->book_id,
            'borrow_date' => now(),
            'return_date' => $request->return_date,
            'status' => 'Borrows',
        ]);

        $book = Book::findOrFail($request->book_id);
        $book->status = 'Not Available';
        $book->save();

        return redirect()->route('borrowings.index');
    }

    /**
     * Delete a borrowing record (return).
     */
    public function return(Request $request)
    {
        $request->validate([
            'borrowing_id' => 'required|exists:borrowings,id',
            'book_id' => 'required|exists:books,id',
        ]);

        $borrowing = Borrowing::findOrFail($request->borrowing_id);
        $borrowing->status = 'Returned';
        $borrowing->delete(); // will be disabled for READ

        $book = Book::findOrFail($request->book_id);
        $book->status = 'Available';
        $book->save();

        return redirect()->route('dashboard');
    }

    /**
     * Admin: List all borrowings.
     */
    public function adminIndex()
    {
        $borrowings = Borrowing::with(['book.categories', 'user'])->get();

        return inertia('admin/borrowings/crud_peminjaman', compact('borrowings'));
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
        $borrowings = Borrowing::with(['book.categories', 'user'])->get();

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
