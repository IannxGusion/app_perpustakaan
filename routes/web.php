<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BookController;

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

    Route::get('detail_buku', function () {
        return Inertia::render('detail_buku');
    })->name('detail_buku');

    Route::get('pesan_buku', function () {
        return Inertia::render('pesan_buku');
    })->name('pesan_buku');


    Route::get('daftar_buku/', [BookController::class, 'index'])->name('book.index');
    Route::get('daftar_buku/pinjam_buku/{id}', [BookController::class, 'show'])->name('book.show');
});

// Admin ==================================================================================
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('main', function () {
        return Inertia::render('admin/main');
    })->name('main');

    Route::get('crud_buku', function () {
        return Inertia::render('admin/crud_buku');
    })->name('crud_book');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
