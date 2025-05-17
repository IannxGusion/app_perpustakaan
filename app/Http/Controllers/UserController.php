<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserController extends Controller
{
    // CRUD ===================================================================================
    public function crud_index()
    {
        $users = User::get();
        return Inertia('admin/peminjam/crud_PEMINJAM', compact('users'));
    }

    public function crud_remove($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return redirect()->back();
    }
    // PEMIJAM< -----------------------------------------------------------------------------

    // PUSTAKAWA> -----------------------------------------------------------------------------
    // CRUD ===================================================================================
}
