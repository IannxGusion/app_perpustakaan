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

    public function download($id)
    {
        $book = Book::with('category')->findOrFail($id);
        return View('pdf', [
            'book' => $book,
        ]);
    }

    // CRUD ===================================================================================
    public function crud_index()
    {
        $books = Book::with('category')->get();
        $categories = Category::all();
        return Inertia('admin/buku/crud_buku', compact('books', 'categories'));
    }

    public function crud_remove($id)
    {
        $book = Book::findOrFail($id);
        $book->delete();

        return redirect()->back();
    }

    // CRUD -----------------------------------------------------------------------------
    public function chart()
    {
        $books = Book::with('category')->get();
        $categories = Category::all();
        return Inertia('admin/main', compact('books', 'categories'));
    }
    // CRUD =============================================================================

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

    public function detail2($id)
    {
        $book = Book::with('category')->findOrFail($id);
        return Inertia('detail_buku2', [
            'book' => $book,
        ]);
    }

    public function detail3($id)
    {
        $book = Book::with('category')->findOrFail($id);
        return Inertia('detail_buku3', [
            'book' => $book,
        ]);
    }
}
