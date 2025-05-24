<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\BorrowingController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

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
    Route::get('books/borrow/detail/{id}', [BookController::class, 'detail'])->name('books.detail');

    Route::get('dashboard/details1/{id}', [BookController::class, 'details1'])->name('books.details1');
    Route::get('dashboard/details2/{id}', [BookController::class, 'details2'])->name('books.details2');
    Route::get('dashboard/details3/{id}', [BookController::class, 'details3'])->name('books.details3');

    Route::controller(BorrowingController::class)->group(function () {
        Route::post('books/borrow/borrows/{id}', 'store')->name('borrowings.store');
    });
    Route::get('borrowings', [BorrowingController::class, 'index'])->name('borrowings.index');
});

// Pustakawan> ----------------------------------------------------------------------------------
Route::middleware(['auth', 'verified', LibrarianMiddleware::class])->group(function () {
    Route::get('work', [BorrowingController::class, 'librarianIndex'])->name('librarian.borrowings.index');
    Route::delete('work/borrowings/{id}', [BorrowingController::class, 'librarianDelete'])->name('librarian.borrowings.delete');

    Route::get('report', function () {
        return Inertia::render('librarian/report');
    })->name('report');
    Route::get('report/download', [ReportController::class, 'librarianReport'])->name('librarian.report.download');

    Route::get('management', [BookController::class, 'librarianIndex'])->name('librarian.books.index');
    Route::post('management/books/import', [BookController::class, 'import'])->name('librarian.books.import');

    Route::get('management/books/{id}', [BookController::class, 'librarianDelete'])->name('librarian.books.delete');

    Route::get('management/{id}/edit', [BookController::class, 'librarianEdit'])->name('librarian.books.edit');
    Route::put('management/{id}', [BookController::class, 'librarianUpdate'])->name('librarian.books.update');
});
// *USER* =====================================================================================

// *Admin* ====================================================================================
Route::middleware(['auth', 'verified', AminMiddleware::class])->group(function () {
    Route::get('main', [BookController::class, 'adminMain'])->name('admin.main');

    Route::get('main/books', [BookController::class, 'adminIndex'])->name('admin.books.index');
    Route::post('main/books/import', [BookController::class, 'import'])->name('admin.books.import');

    Route::get('main/books/{id}', [BookController::class, 'adminDelete'])->name('admin.books.delete');

    Route::get('main/books/{id}/edit', [BookController::class, 'adminEdit'])->name('admin.books.edit');
    Route::put('main/books/{id}', [BookController::class, 'adminUpdate'])->name('admin.books.update');

    Route::get('main/borrowings', [BorrowingController::class, 'adminIndex'])->name('admin.borrowings.index');
    Route::delete('main/borrowings/{id}', [BorrowingController::class, 'adminDelete'])->name('admin.borrowings.delete');

    Route::get('main/borrowers', [UserController::class, 'adminBorrowerIndex'])->name('admin.borrowers.index');
    Route::get('main/borrowers/{id}', [AuthenticatedSessionController::class, 'destroy'])->name('admin.borrowers.delete');

    Route::get('main/librarians', [UserController::class, 'adminLibrarianIndex'])->name('admin.librarian.index');
    Route::get('main/librarians/{id}', [AuthenticatedSessionController::class, 'destroy'])->name('admin.librarian.delete');
});
// *Admin* ==================================================================================

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
