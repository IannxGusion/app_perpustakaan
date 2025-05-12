<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Category;


class BookController extends Controller
{
    public function index()
    {
        $books = Book::with('category')->get();
        $categories = Category::all();
        return Inertia('daftar_buku', compact('books', 'categories'));
    }

    public function show($id)
    {
        $book = Book::with('category')->findOrFail($id);
        return Inertia('pinjam_buku', [
            'book' => $book,
        ]);
    }

    public function detail($id)
    {
        $book = Book::with('category')->findOrFail($id);
        return Inertia('detail_buku', [
            'book' => $book,
        ]);
    }
}
