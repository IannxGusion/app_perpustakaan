<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BookController;

// USER page ==================================================================================
Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// User page ==============================================================================
// Peminjam page
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('daftar_buku', [BookController::class, 'index'], function () {
        return Inertia::render('daftar_buku');
    })->name('daftar_buku');

    Route::get('pinjam_buku', [BookController::class, 'borrow'], function () {
        return Inertia::render('pinjam_buku');
    })->name('pinjam_buku');

});

// Admin page ==================================================================================
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('main', function () {
        return Inertia::render('main');
    })->name('main');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
