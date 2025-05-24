<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\BorrowingController;
use App\Http\Middleware\AminMiddleware;
use App\Http\Middleware\LibrarianMiddleware;
// Controllers
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('books/download/{id}', [BookController::class, 'download'])->name('books.download');

// *USER* =====================================================================================
Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('books', [BookController::class, 'index'])->name('books.index');
    Route::get('books/borrow/{id}', [BookController::class, 'show'])->name('books.show');
    Route::get('books/{id}/detail', [BookController::class, 'details'])->name('books.detail');
    
    Route::get('dashboard/details1/{id}', [BookController::class, 'details1'])->name('books.details1');
    Route::get('dashboard/details2/{id}', [BookController::class, 'details2'])->name('books.details2');
    Route::get('dashboard/details3/{id}', [BookController::class, 'details3'])->name('books.details3');

    Route::controller(BorrowingController::class)->group(function () {
        Route::post('books/{id}/borrow', 'store')->name('borrowings.store');
    });
    Route::get('borrowings', [BorrowingController::class, 'index'])->name('borrowings.index');
});

// Pustakawan> ----------------------------------------------------------------------------------
Route::middleware(['auth', 'verified', LibrarianMiddleware::class])->group(function () {
    Route::get('librarian/borrowings', [BorrowingController::class, 'librarian_index'])->name('librarian.borrowings.index');
    Route::get('librarian/books', [BookController::class, 'librarian_book_index'])->name('librarian.books.index');
    Route::get('librarian/books/{id}/edit', [BookController::class, 'librarian_edit'])->name('librarian.books.edit');
    Route::put('librarian/books/{id}', [BookController::class, 'librarian_update'])->name('librarian.books.update');
});

// *Admin* ==================================================================================
Route::middleware(['auth', 'verified', AminMiddleware::class])->group(function () {
    Route::get('admin/dashboard', [BookController::class, 'chart'])->name('admin.dashboard');
    Route::get('admin/books', [BookController::class, 'adminIndex'])->name('admin.books.index');
    Route::post('admin/books/import', [BookController::class, 'import'])->name('admin.books.import');
    
    Route::delete('admin/books/{id}', [BookController::class, 'adminDestroy'])->name('admin.books.destroy');
    Route::get('admin/books/{id}/edit', [BookController::class, 'adminEdit'])->name('admin.books.edit');
    Route::put('admin/books/{id}', [BookController::class, 'adminUpdate'])->name('admin.books.update');
    
    Route::get('admin/borrowings', [BorrowingController::class, 'crud_index'])->name('admin.borrowings.index');
    Route::delete('admin/borrowings/{id}', [BorrowingController::class, 'destroy'])->name('admin.borrowings.destroy');
    // ...other admin routes remain unchanged...
});
// *Admin* ==================================================================================

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
