<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Book;
use App\Models\Books_category;
use App\Models\Category_relation;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::all();
        $books_category = Books_category::all();
        $categories_relation = Category_relation::all();
        return Inertia::render('daftar_buku', compact('books', 'books_category', 'categories_relation'));
    }

    public function borrow()
    {
        return Inertia::render('pinjam_buku');
    }
}
