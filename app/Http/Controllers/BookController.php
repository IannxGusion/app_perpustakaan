<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Category;
use Illuminate\Http\Request;

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
    public function chart()
    {
        $books = Book::with('category')->get();
        $categories = Category::all();

        return Inertia('admin/main', compact('books', 'categories'));
    }

    public function crud_book_index()
    {
        $books = Book::with('category')->get();
        $categories = Category::all();

        return Inertia('admin/buku/crud_buku', compact('books', 'categories'));
    }

    public function edit($id)
    {
        $book = Book::with('category')->findOrFail($id);
        $categories = Category::all();

        return Inertia('admin/buku/edit-book', [
            'book' => $book,
            'categories' => $categories,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'book_id' => 'required|exists:books,id',
            'category_id' => 'required|exists:categories,id',
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'author' => 'required|string|max:255',
            'publisher' => 'required|string|max:255',
            'publication_date' => 'required|date',

            'category_id' => 'nullable|exists:categories,id',
            'status' => 'required|in:Available,Not Available',
            'cover' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $book = $request->book_id;
        $book->title = $request->title;
        $book->content = $request->content;
        $book->author = $request->author;
        $book->publisher = $request->publisher;
        $book->publication_date = $request->publication_date;

        $book->category_id = $request->category_id;
        $book->status = $request->status;

        if ($request->hasFile('cover')) {
            $imagePath = $request->file('image')->store('images', 'public');
            $book->cover = $imagePath;
        }

        $book->save();

        return redirect()->route('crud_book.index');
    }

    public function crud_remove($id)
    {
        $book = Book::findOrFail($id);
        $book->delete();

        return redirect()->back();
    }

    // librarian --------------------------------------------------------------------------------
    public function librarian_book_index()
    {
        $books = Book::with('category')->get();
        $categories = Category::all();

        return Inertia('librarian/pendataan', compact('books', 'categories'));
    }
    // librarian --------------------------------------------------------------------------------
    // CRUD =====================================================================================

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
