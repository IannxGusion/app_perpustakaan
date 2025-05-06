<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Book;
use App\Models\Books_category;
//use App\Models\Categories_relation;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::get();
        //$categories = Books_category::all();
        return Inertia('daftar_buku', [
            'books' => $books,
            //'categories' => $categories,
        ]);
    }
}
