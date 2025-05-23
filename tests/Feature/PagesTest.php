<?php

use App\Models\User;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);

test('guests are redirected to the login page', function () {
    $this->get('/dashboard')->assertRedirect('/login');
});

test('authenticated users can visit the dashboard', function () {
    $this->actingAs($user = User::factory()->create());

    $this->get('/dashboard')->assertOk();
});

test('authenticated users can visit the daftar_buku', function () {
    $this->actingAs($user = User::factory()->create());

    $this->get('/daftar_buku')->assertOk();
});

/*test('authenticated users can visit the pinjam_buku', function () {
    $this->actingAs($user = User::factory()->create());

    $this->get('/pinjam_buku/1')->assertOk();
});*/
