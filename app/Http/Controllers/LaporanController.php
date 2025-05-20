<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Category;

class LaporanController extends Controller
{
   
    public function report_index()
    {
        $books = Book::with('category')->get();
        $categories = Category::all();
        return View('report', [
            'books' => $books,
        ]);
    }
}
