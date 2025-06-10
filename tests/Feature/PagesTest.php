<?php

use App\Models\User;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);

test('guests are redirected to the login page', function () {
    $this->get('borrowings/')->assertRedirect('/login');
});

test('authenticated users can visit the borrowings page', function () {
    $this->actingAs($user = User::factory()->create());

    $this->get('borrowings/')->assertOk();
});

test('also guests are redirected to the login page', function () {
    $this->get('collections')->assertRedirect('/login');
});

test('authenticated users can visit the collection page', function () {
    $this->actingAs($user = User::factory()->create());

    $this->get('collections')->assertOk();
});
