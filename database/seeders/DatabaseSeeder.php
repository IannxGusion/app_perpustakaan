<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Book;
use App\Models\Books_category;
use App\Models\Category_relation;
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

        Book::factory(10)->create()->each(function ($book) {
            Books_category::factory(3)->create()->each(function ($books_category) use ($book) {
                Category_relation::factory(5)->create([
                    'books_id' => $book->id,
                    'books_categories_id' => $books_category->id,
                ]);
            });
        });
    }
}
