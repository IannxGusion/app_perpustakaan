<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserController extends Controller
{
    public function adminBorrowerIndex()
    {
        $users = User::get();

        return Inertia('admin/borrower/crud_PEMINJAM', compact('users'));
    }
    // PEMIJAM< -----------------------------------------------------------------------------

    // PUSTAKAWAN> -----------------------------------------------------------------------------
    public function adminLibrarianIndex()
    {
        $users = User::get();

        return Inertia('admin/librarian/crud_PUSTAKAWAN', compact('users'));
    }
}
