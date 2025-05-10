<?php

namespace App\Http\Controllers;

use App\Models\Book;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::latest()->get();
        //$categories = Books_category::all();
        return Inertia('daftar_buku', [
            'books' => $books,
            //'categories' => $categories,
        ]);
    }

    public function show($id)
    {
        $book = Book::findOrFail($id);
        return Inertia('pinjam_buku', [
            'book' => $book,
        ]);
    }

    public function detail($id)
    {
        $book = Book::findOrFail($id);
        return Inertia('detail_buku', [
            'book' => $book,
        ]);
    }
}
