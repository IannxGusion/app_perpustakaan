<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;

use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('settings/admin_mode');
    }
}
