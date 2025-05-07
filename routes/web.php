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

    // page
    Route::get('daftar_buku/', [BookController::class, 'index'])->name('book.index');
    Route::get('daftar_buku/pinjam_buku/{id}', [BookController::class, 'show'])->name('book.show');
});

// Admin ==================================================================================
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('main', function () {
        return Inertia::render('main');
    })->name('main');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
