<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Category;
//use Barryvdh\DomPDF\Facade\Pdf;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::with('category')->get();
        $categories = Category::all();
        return Inertia('daftar_buku', compact('books', 'categories'));
    }

    public function crud_index()
    {
        $books = Book::with('category')->get();
        $categories = Category::all();
        return Inertia('admin/buku/crud_buku', compact('books', 'categories'));
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

    public function download($id)
    {
        $book = Book::with('category')->findOrFail($id);
        //$pdf = Pdf::loadView('pdf', $data);
        //return $pdf->download('book.pdf');

        return View('pdf', [
            'book' => $book,
        ]);
    }
}
