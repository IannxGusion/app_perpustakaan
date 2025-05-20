<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\Category;

use Illuminate\Support\Facades\Auth;

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

    // librarian --------------------------------------------------------------------------------
        public function librarian_book_index()
    {
        $books = Book::with('category')->get();
        $categories = Category::all();
        return Inertia('librarian/pendataan', compact('books', 'categories'));
    }
    // librarian --------------------------------------------------------------------------------

    public function edit($id)
    {
        $post = Book::findOrFail($id);
        $categories = Category::all();
        return Inertia('admin/buku/edit', compact('post', 'categories'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'category_id' => 'nullable|exists:categories,id',
            'title' => 'nullable|string|max:255',
            'content' => 'nullable|string',
            'cover' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'author' => 'nullable|string|max:50',
            'publisher' => 'nullable|string|max:50',
            //'publication_date' => ''
            'status' => 'required|enum'
        ]);

        $book = Book::findOrFail($id);
        $book->category_id = $request->category_id;
        $book->title = $request->title;
        $book->content = $request->content;
        $book->author = $request->author;
        $book->publisher = $request->publisher;

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
