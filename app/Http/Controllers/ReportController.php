<?php

namespace App\Http\Controllers;

use App\Models\Borrowing;

class ReportController extends Controller
{
    public function librarianReport()
    {
        $books = \App\Models\Book::with('categories')->latest()->get();
        $borrowings = Borrowing::all();

        return view('report', [
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
