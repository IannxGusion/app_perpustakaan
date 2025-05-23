<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Borrowing;

class LaporanController extends Controller
{
    public function report_index()
    {
        $books = Book::with('category')->latest()->get();
        $borrowings = Borrowing::with(['book.category'])->latest()->get();

        return View('report', [
            'books' => $books,
            'borrowings' => $borrowings,
        ]);
    }
}
