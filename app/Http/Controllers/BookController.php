<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Category;
use Illuminate\Http\Request;

// use Illuminate\Support\Facades\Storage;

class BookController extends Controller
{
    /**
     * Display a listing of the books.
     */
    public function index()
    {
        $books = Book::with('categories')->inRandomOrder()->get();
        $categories = Category::all();

        return Inertia('books', compact('books', 'categories'));
    }

    /**
     * Display a listing of the books (HIGHLIGHTED).
     */
    public function highlight()
    {
        $books = Book::with('categories')->latest()->take(3)->get();
        $categories = Category::all();

        return Inertia('dashboard', compact('books', 'categories'));
    }

    /**
     * Show a single book for borrowing.
     */
    public function show($id)
    {
        $book = Book::with(['categories', 'reviews.user'])->findOrFail($id);

        return inertia('borrows_book', [
            'book' => $book,
            'reviews' => $book->reviews()->with('user')->get(),
        ]);
    }

    /**
     * Import books from a JSON file. (current manual input)
     */
    public function import()
    {
        $categories = Category::all();

        return view('add', [
            'categories' => $categories,
        ]);
    }

    public function add(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:50',
            'publisher' => 'required|string|max:50',
            'publication_date' => 'required|date',
            'content' => 'required|string',
            'cover' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            // 'category_ids' => 'nullable|array',
            // 'category_ids.*' => 'exists:categories,id',
        ]);

        $book = new Book;
        $book->title = $request->title;
        $book->author = $request->author;
        $book->publisher = $request->publisher;
        $book->publication_date = $request->publication_date;
        $book->content = $request->content;

        $book->status = 'Available';
        $book->collected = 'No';

        if ($request->hasFile('cover')) {
            $imagePath = $request->file('cover')->store('covers', 'public');
            $book->cover = $imagePath;
        }

        $book->save();

        if ($request->has('category_ids')) {
            $book->categories()->sync($request->category_ids);
        }

        return redirect()->back()->with('success', 'Book added successfully.');
    }

    /**
     * Download book as PDF.
     */
    public function download($id)
    {
        $book = Book::with('categories')->findOrFail($id);

        return view('pdf', ['book' => $book]);
    }

    // ============================================================================================
    /**
     * Admin main.
     */
    public function adminMain()
    {
        $books = Book::with('categories')->get();
        $categories = Category::all();

        return Inertia('admin/main', compact('books', 'categories'));
    }

    /**
     * Admin: List all books.
     */
    public function adminIndex()
    {
        $books = Book::with('categories')->get();
        $categories = Category::all();

        return Inertia('admin/books/crud_buku', compact('books', 'categories'));
    }

    /**
     * Admin: Edit a book.
     */
    public function adminEdit($id)
    {
        $book = Book::with('categories')->findOrFail($id);
        $categories = Category::all();

        return Inertia('admin/books/edit-book', [
            'book' => $book,
            'categories' => $categories,
        ]);
    }

    /**
     * Admin: Update a book.
     */
    public function adminUpdate(Request $request, $id)
    {
        $request->validate([
            'category_ids' => 'nullable|array',
            'category_ids.*' => 'exists:categories,id',
            'title' => 'nullable|string|max:255',
            'content' => 'nullable|string',
            'author' => 'nullable|string|max:255',
            'publisher' => 'nullable|string|max:255',
            'publication_date' => 'nullable|date',
            'status' => 'nullable|in:Available,Not Available',
            'cover' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $book = Book::findOrFail($id);
        $book->title = $request->title;
        $book->content = $request->content;
        $book->author = $request->author;
        $book->publisher = $request->publisher;
        $book->publication_date = $request->publication_date;
        $book->status = $request->status;

        if ($request->hasFile('cover')) {
            $imagePath = $request->file('cover')->store('covers', 'public');
            $book->cover = $imagePath;
        }

        $book->save();

        if ($request->has('category_ids')) {
            $book->categories()->sync($request->category_ids);
        }

        return redirect()->route('admin.books.index');
    }

    /**
     * Admin: Delete a book.
     */
    public function adminDelete($id)
    {
        $book = Book::findOrFail($id);
        $book->delete();

        return redirect()->back();
    }
    // ============================================================================================

    // ============================================================================================
    /**
     * Librarian: List all books.
     */
    public function librarianIndex()
    {
        $books = Book::with('categories')->get();
        $categories = Category::all();

        return Inertia('librarian/book/pendataan', compact('books', 'categories'));
    }

    /**
     * Librarian: Edit a book.
     */
    public function librarianEdit($id)
    {
        $book = Book::with('categories')->findOrFail($id);
        $categories = Category::all();

        return Inertia('librarian/book/edit-book', [
            'book' => $book,
            'categories' => $categories,
        ]);
    }

    /**
     * Librarian: Update a book.
     */
    public function librarianUpdate(Request $request, $id)
    {
        $request->validate([
            'category_ids' => 'nullable|array',
            'category_ids.*' => 'exists:categories,id',
            'title' => 'nullable|string|max:255',
            'content' => 'nullable|string',
            'author' => 'nullable|string|max:255',
            'publisher' => 'nullable|string|max:255',
            'publication_date' => 'nullable|date',
            'status' => 'nullable|in:Available,Not Available',
            'cover' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $book = Book::findOrFail($id);
        $book->title = $request->title;
        $book->content = $request->content;
        $book->author = $request->author;
        $book->publisher = $request->publisher;
        $book->publication_date = $request->publication_date;
        $book->status = $request->status;

        if ($request->hasFile('cover')) {
            $imagePath = $request->file('cover')->store('covers', 'public');
            $book->cover = $imagePath;
        }

        $book->save();

        if ($request->has('category_ids')) {
            $book->categories()->sync($request->category_ids);
        }

        return redirect()->route('admin.books.index');
    }

    /**
     * Librarian: Delete a book.
     */
    public function librarianDelete($id)
    {
        $book = Book::findOrFail($id);
        $book->delete();

        return redirect()->back();
    }
    // ============================================================================================

    // ============================================================================================
    /**
     * Show book details (variant 1).
     */
    public function details1($id)
    {
        $book = Book::with('categories')->findOrFail($id);

        return Inertia('detail_buku1', ['book' => $book]);
    }

    /**
     * Show book details (variant 2).
     */
    public function details2($id)
    {
        $book = Book::with('categories')->findOrFail($id);

        return Inertia('detail_buku2', ['book' => $book]);
    }

    /**
     * Show book details (variant 3).
     */
    public function details3($id)
    {
        $book = Book::with('categories')->findOrFail($id);

        return Inertia('detail_buku3', ['book' => $book]);
    }
    // ============================================================================================
}
