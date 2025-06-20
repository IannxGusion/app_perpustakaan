<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Show the user's profile settings page.
     */
    public function edit(Request $request): Response // thiss...
    {
        return Inertia::render('settings/profile', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => $request->session()->get('status'),
        ]);
    }

    /**
     * Update the user's profile settings.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        // Remove avatar if requested
        if ($request->input('remove_avatar')) {
            $request->user()->avatar = null;
        } elseif ($request->hasFile('avatar')) {
            $imagePath = $request->file('avatar')->store('avatars', 'public');
            $request->user()->avatar = $imagePath;
        }

        $request->user()->save();

        return to_route('profile.edit');
    }

    /**
     * Update the user's Avatar settings.
     */
    public function updateAvatar(Request $request)
    {
        $request->validate([
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $user = Auth::user();

        if ($user instanceof \App\Models\User) {
            if ($request->hasFile('avatar')) {
                $imagePath = $request->file('avatar')->store('avatars', 'public');
                $user->avatar = $imagePath;
            }

            $user->save();
        }

        return redirect()->back();
    }

    /**
     * Delete the user's avatar.
     */
    public function deleteAvatar()
    {
        $user = Auth::user();

        if ($user instanceof \App\Models\User && $user->avatar) {
            // Optionally, delete the file from storage
            \Illuminate\Support\Facades\Storage::disk('public')->delete($user->avatar);
            $user->avatar = null;
            $user->save();
        }

        return redirect()->back();
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
