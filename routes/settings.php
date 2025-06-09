<?php

use App\Http\Controllers\Settings\AdminController;
use App\Http\Controllers\Settings\LibrarianController;
use App\Http\Controllers\Settings\PasswordController;
use App\Http\Controllers\Settings\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {
    Route::redirect('settings', 'settings/profile');

    Route::put('settings/profile/avatar', [ProfileController::class, 'updateAvatar'])->name('avatar.update');
    Route::get('settings/profile/avatar/delete', [ProfileController::class, 'deleteAvatar'])->name('avatar.delete');

    Route::get('settings/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('settings/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('settings/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('settings/password', [PasswordController::class, 'edit'])->name('password.edit');
    Route::put('settings/password', [PasswordController::class, 'update'])->name('password.update');

    Route::get('settings/admin_mode', [AdminController::class, 'index'])->name('admin.edit');
    Route::get('settings/librarian_mode', [LibrarianController::class, 'index'])->name('ibrarian.edit');

    Route::get('settings/appearance', function () {
        return Inertia::render('settings/appearance');
    })->name('appearance');

    Route::get('role', function () {
        return Inertia::render('role');
    })->name('role');
});
