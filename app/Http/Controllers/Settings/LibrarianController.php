<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class LibrarianController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('settings/librarian_mode');
    }
}
