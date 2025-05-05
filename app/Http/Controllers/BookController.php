<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Book;
use App\Models\Category;
use App\Models\Categories_relation;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::with(['category.category'])->get();
        return Inertia::render('daftar_buku', ['books' => $books]);
    }
}
