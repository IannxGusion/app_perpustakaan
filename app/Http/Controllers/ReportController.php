<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Borrowing;

class ReportController extends Controller
{
    public function librarianReport()
    {
        $books = Book::with('categories')->latest()->get();
        $borrowings = Borrowing::with(['book'])->latest()->get();

        return View('report', [
            'books' => $books,
            'borrowings' => $borrowings,
        ]);
    }

    public function librarianChart()
    {
        $borrowings = Borrowing::with(['book'])->latest()->get();

        return inertia('librarian/report', [
            'borrowings' => $borrowings,
        ]);
    }
}
