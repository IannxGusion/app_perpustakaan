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
        $books = Book::with('category')->get();
        $categories = Category::all();

        return Inertia('books', compact('books', 'categories'));
    }

    /**
     * Show a single book for borrowing.
     */
    public function show($id)
    {
        $book = Book::with('category')->findOrFail($id);

        return Inertia('borrows_book', ['book' => $book]);
    }

    /**
     * Show book details.
     */
    public function detail($id)
    {
        $book = Book::with('category')->findOrFail($id);

        return Inertia('book_detail', ['book' => $book]);
    }

    /**
     * Import books from a JSON file.
     */
    public function import(Request $request)
    {
        $request->validate([
            'json' => 'required|file|mimes:json,txt',
        ]);

        $jsonFile = $request->file('json');
        $jsonData = json_decode(file_get_contents($jsonFile->getRealPath()), true);

        if (! is_array($jsonData)) {
            return back()->withErrors(['json' => 'Invalid JSON file.']);
        }

        foreach ($jsonData as $item) {
            Book::create([
                'title' => $item['title'] ?? '',
                'content' => $item['content'] ?? '',
                'author' => $item['author'] ?? '',
                'publisher' => $item['publisher'] ?? '',
                'publication_date' => $item['publication_date'] ?? now(),
                'category_id' => $item['category_id'] ?? 1,
                'status' => $item['status'] ?? 'Available',
                'cover' => $item['cover'] ?? null,
            ]);
        }

        return redirect()->back();
    }

    /**
     * Download book as PDF.
     */
    public function download($id)
    {
        $book = Book::with('category')->findOrFail($id);

        return view('pdf', ['book' => $book]);
    }

    // ============================================================================================
    /**
     * Admin main.
     */
    public function adminMain()
    {
        $books = Book::with('category')->get();
        $categories = Category::all();

        return Inertia('admin/main', compact('books', 'categories'));
    }

    /**
     * Admin: List all books.
     */
    public function adminIndex()
    {
        $books = Book::with('category')->get();
        $categories = Category::all();

        return Inertia('admin/buku/crud_buku', compact('books', 'categories'));
    }

    /**
     * Admin: Edit a book.
     */
    public function adminEdit($id)
    {
        $book = Book::with('category')->findOrFail($id);
        $categories = Category::all();

        return Inertia('admin/buku/edit-book', [
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
            'category_id' => 'nullable|exists:categories,id',
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
        $book->category_id = $request->category_id;
        $book->status = $request->status;

        if ($request->hasFile('cover')) {
            $imagePath = $request->file('cover')->store('covers', 'public');
            $book->cover = $imagePath;
        }

        $book->save();

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
        $books = Book::with('category')->get();
        $categories = Category::all();

        return Inertia('librarian/book/pendataan', compact('books', 'categories'));
    }

    /**
     * Librarian: Edit a book.
     */
    public function librarianEdit($id)
    {
        $book = Book::with('category')->findOrFail($id);
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
            'category_id' => 'nullable|exists:categories,id',
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
        $book->category_id = $request->category_id;
        $book->status = $request->status;

        if ($request->hasFile('cover')) {
            $imagePath = $request->file('cover')->store('covers', 'public');
            $book->cover = $imagePath;
        }

        $book->save();

        return redirect()->route('librarian.books.index');
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
        $book = Book::with('category')->findOrFail($id);

        return Inertia('detail_buku1', ['book' => $book]);
    }

    /**
     * Show book details (variant 2).
     */
    public function details2($id)
    {
        $book = Book::with('category')->findOrFail($id);

        return Inertia('detail_buku2', ['book' => $book]);
    }

    /**
     * Show book details (variant 3).
     */
    public function details3($id)
    {
        $book = Book::with('category')->findOrFail($id);

        return Inertia('detail_buku3', ['book' => $book]);
    }
    // ============================================================================================
}
