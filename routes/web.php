<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BookController;
use App\Http\Controllers\BorrowingController;
use App\Http\Controllers\UserController;

Route::get("koleksi_buku/{id}", [BookController::class, 'download'])->name("book.download");

// *USER* =====================================================================================
Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Pustakawan ----------------------------------------------------------------------------------
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('work', function () {
        return Inertia::render('librarian/work');
    })->name('work');

    Route::get('laporan', function () {
        return Inertia::render('librarian/laporan');
    })->name('laporan');

    Route::get('pendataan', function () {
        return Inertia::render('librarian/pendataan');
    })->name('pendataan');
});

// Peminjam ------------------------------------------------------------------------------------
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('koleksi_buku', [BorrowingController::class, 'collection'])->name('borrow.index');

    // POST route for borrowing a book
    Route::controller(BorrowingController::class)->group(function () {
        Route::post('pinjam_buku', 'store')->name('borrow.store');
        Route::post('detail_buku', 'store')->name('borrow.store');
    });

    // This GET route uses a different URI, so no conflict:
    Route::get('daftar_buku', [BookController::class, 'index'])->name('book.index');

    Route::get('daftar_buku/pinjam_buku/{id}', [BookController::class, 'show'])->name('book.show');

    Route::get('/detail_buku/{id}', [BookController::class, 'detail'])->name('book.detail');
    Route::get('/detail_buku2/{id}', [BookController::class, 'detail2'])->name('book.detail2');
    Route::get('/detail_buku3/{id}', [BookController::class, 'detail3'])->name('book.detail3');

    
});
// *USER* ===================================================================================

// *Admin* ==================================================================================
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('main', [BookController::class, 'chart'])->name('main');

    Route::get('crud_buku', [BookController::class, 'crud_index'])->name('crud_book');
    Route::get('crud_buku/{id}', [BookController::class, 'crud_remove'])->name('book.remove');

    Route::get('crud_peminjaman', [BorrowingController::class, 'crud_index'])->name('crud_borrowing');
    Route::get('crud_peminjaman/{id}', [BorrowingController::class, 'crud_remove'])->name('borrowing.remove');

    Route::get('crud_pustakawan', function () {
        return Inertia::render('admin/crud_PUSTAKAWAN');
    })->name('crud_librarian');

    Route::get('crud_peminjam', [UserController::class, 'crud_index'])->name('crud_borrower');
    Route::get('crud_peminjam/{id}', [UserController::class, 'crud_remove'])->name('borrower.remove');
});
// *Admin* ==================================================================================

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
