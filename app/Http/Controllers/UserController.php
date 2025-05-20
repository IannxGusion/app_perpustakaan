<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserController extends Controller
{
    // CRUD ===================================================================================
    public function crud_peminjam_index()
    {
        $users = User::get();
        return Inertia('admin/peminjam/crud_PEMINJAM', compact('users'));
    }

    /*public function crud_peminjam_remove($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return redirect()->back();
    }*/
    // PEMIJAM< -----------------------------------------------------------------------------

    // PUSTAKAWAN> -----------------------------------------------------------------------------
    public function crud_pustakawan_index()
    {
        $users = User::get();
        return Inertia('admin/pustakawan/crud_PUSTAKAWAN', compact('users'));
    }
    // CRUD ===================================================================================
}
