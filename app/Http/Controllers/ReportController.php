<?php

namespace App\Http\Controllers;

use App\Models\Borrowing;
use App\Models\Book;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function librarianReport()
    {
        $books = Book::with('categories')->latest()->get();
        $borrowings = Borrowing::all();

        return view('report', [
            'books' => $books,
            'borrowings' => $borrowings,
        ]);
    }

    public function librarianChart(Request $request)
    {
        $borrowings = Borrowing::with('book')->latest()->get();

        $from_date = $request->input('from_date');
        $to_date = $request->input('to_date');

        $report = Borrowing::with('book') // assuming relations exist
            ->whereBetween('updated_at', [$from_date, $to_date])
            ->orderByDesc('id')
            ->get();

        return Inertia('librarian/report', [
            'borrowings' => $borrowings,
            'report' => $report,
        ]);
    }
}
