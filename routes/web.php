<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BookController;
use App\Http\Controllers\BorrowingController;

// USER ==================================================================================
Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// User ==================================================================================
// Peminjam
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('koleksi_buku', function () {
        return Inertia::render('koleksi_buku');
    })->name('koleksi_buku');

    Route::get('daftar_buku', [BookController::class, 'index'])->name('book.index');

    Route::get('/daftar_buku/pinjam_buku/{id}', [BookController::class, 'show'])->name('book.show');

    Route::get('/pinjam_buku', [BorrowingController::class, 'store'])->name('borrow.store');
    
    Route::get('/detail_buku/{id}', [BookController::class, 'detail'])->name('book.detail');
});

// Admin ==================================================================================
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('main', function () {
        return Inertia::render('admin/main');
    })->name('main');

    Route::get('crud_buku', function () {
        return Inertia::render('admin/crud_buku');
    })->name('crud_book');

    Route::get('crud_peminjaman', function () {
        return Inertia::render('admin/crud_peminjaman');
    })->name('crud_borrowing');

    Route::get('crud_pustakawan', function () {
        return Inertia::render('admin/crud_PUSTAKAWAN');
    })->name('crud_librarian');

    Route::get('crud_peminjam', function () {
        return Inertia::render('admin/crud_PEMINJAM');
    })->name('crud_borrower');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
