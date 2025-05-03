<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BukuController;

// USER page ==================================================================================
Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Peminjam page ==============================================================================
// Peminjam page
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('daftar_buku', [BukuController::class, 'index'], function () {
        return Inertia::render('daftar_buku');
    })->name('daftar_buku');
});

// Admin page ==================================================================================
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('main', function () {
        return Inertia::render('main');
    })->name('main');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
