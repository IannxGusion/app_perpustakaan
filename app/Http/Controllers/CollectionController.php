<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Collection;

class BorrowingController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'borrowings_id' => 'required|exists:borrowings,id',
        ]);

        Collection::create([
            'user_id' => Auth::id(),
            'borrowing_id' => $request->borrowing_id,
        ]);

        return redirect()->route('collection');
    }

    public function collection()
    {
        $collections = Collection::with(['collection.borrowing'])->get();

        return inertia('koleksi', compact('collection'));
    }
}
