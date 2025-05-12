<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Borrowing;
use App\Models\Book;

class BorrowingController extends Controller
{
    public function store(Request $request)
    {
        /*
        $post = new Post();
        $post->title = $request->title;
        $post->body = $request->body;
        $post->category_id = $request->category_id;
        $post->user_id = Auth::user()->id;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
            $post->image = $imagePath;
        }

        $post->save();
        */

        $request->validate([
            'BorrowDate' => 'date',
            'ReturnDate' => 'date',
            'Status' => '',
            'book_id' => ''
        ]);

        $borrow = new Borrowing();
        $borrow->borrow_date = $request->BorrowDate;
        $borrow->return_date = $request->ReturnDate;
        $borrow->status = $request->status;
        $borrow->user_id = Auth::user()->id;
        $borrow->book_id = $request->book_id;


        return redirect()->route('koleksi_buku')->with('success', 'Borrows successfully.');
    }
}
