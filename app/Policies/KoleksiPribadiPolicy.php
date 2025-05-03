<?php

namespace App\Policies;

use App\Models\Koleksi_pribadi;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class KoleksiPribadiPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return false;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Koleksi_pribadi $koleksiPribadi): bool
    {
        return false;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return false;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Koleksi_pribadi $koleksiPribadi): bool
    {
        return false;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Koleksi_pribadi $koleksiPribadi): bool
    {
        return false;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Koleksi_pribadi $koleksiPribadi): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Koleksi_pribadi $koleksiPribadi): bool
    {
        return false;
    }
}
