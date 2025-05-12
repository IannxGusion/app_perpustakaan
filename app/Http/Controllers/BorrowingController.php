<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Borrowing;

class BorrowingController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'book_id' => 'required|exists:books,id'
        ]);

        $borrow = new Borrowing();
        $borrow->borrow_date = now();
        $borrow->return_date = now()->addDays(30);
        $borrow->user_id = Auth::user()->id;
        $borrow->book_id = $request->book_id;

        $borrow->save();

        return redirect()->route('koleksi_buku')->with('success', 'Borrows successfully.');
    }
}
