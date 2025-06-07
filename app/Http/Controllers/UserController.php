<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserController extends Controller
{
    public function adminBorrowerIndex()
    {
        $users = User::where('role', 'PEMINJAM')->get();

        return Inertia('admin/users/crud_PEMINJAM', compact('users'));
    }
    // PEMIJAM< -----------------------------------------------------------------------------

    // PUSTAKAWAN> -----------------------------------------------------------------------------
    public function adminLibrarianIndex()
    {
        $users = User::where('role', 'PUSTAKAWAN')->get();

        return Inertia('admin/users/crud_PUSTAKAWAN', compact('users'));
    }
}
