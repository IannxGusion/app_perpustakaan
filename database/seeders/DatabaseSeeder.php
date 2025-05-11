<?php

namespace Database\Seeders;

//use App\Models\User;
use App\Models\Book;
use App\Models\Category;
use App\Models\Book_category;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        /*User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);*/

        // Seed Category using factory
        Category::factory(10)->create();

        // Seed Book using factory
        Book::factory(5)->create();
    }
}
