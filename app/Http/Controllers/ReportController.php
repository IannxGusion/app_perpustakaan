<?php

namespace App\Http\Controllers;

use App\Models\Borrowing;

class ReportController extends Controller
{
    public function librarianReport()
    {
        /*$from = request('from');
        $to = request('to');

        $query = \App\Models\Borrowing::with(['book']);

        if ($from && $to) {
            $query->whereDate('created_at', '>=', $from)
                ->whereDate('created_at', '<=', $to);
        }
*/
        $books = \App\Models\Book::with('categories')->latest()->get();
        $borrowings = /*$query->latest()->get();*/ Borrowing::all();

        return view('report', [
            'books' => $books,
            'borrowings' => $borrowings,
            //'from' => $from,
            //'to' => $to,
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
