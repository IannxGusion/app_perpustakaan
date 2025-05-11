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

        Book::factory(10)->create()->each(function ($book) {
            Category::factory(3)->create()->each(function ($category) use ($book) {
                Book_category::factory(5)->create([
                    'books_id' => $book->id,
                    'categories_id' => $category->id,
                ]);
            });
        });
    }
}
