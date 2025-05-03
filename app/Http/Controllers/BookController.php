<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        return inertia('daftar_buku');
    }

    public function borrow()
    {
        return inertia('pinjam_buku');
    }
}
