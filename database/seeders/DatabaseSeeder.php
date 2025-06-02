<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Seed users
        $users = \App\Models\User::factory(10)->create();

        // Seed categories
        $categories = \App\Models\Category::factory(5)->create();

        // Seed books
        $books = \App\Models\Book::factory(20)->create();

        // Attach categories to books (many-to-many)
        foreach ($books as $book) {
            $book->categories()->attach(
                $categories->random(rand(1, 3))->pluck('id')->toArray()
            );
        }

        // Seed collections
        $collections = \App\Models\Collection::factory(5)->create([
            'user_id' => $users->random()->id,
        ]);

        // Seed borrowings
        $borrowings = \App\Models\Borrowing::factory(10)->create([
            'user_id' => $users->random()->id,
            'book_id' => $books->random()->id,
        ]);

        // Attach borrowings to collections (many-to-many)
        foreach ($collections as $collection) {
            $collection->borrowings()->attach(
                $borrowings->random(rand(1, 3))->pluck('id')->toArray()
            );
        }

        // Seed reviews
        $reviews = \App\Models\Review::factory(15)->create([
            'user_id' => $users->random()->id,
        ]);

        // Attach reviews to books (many-to-many)
        foreach ($reviews as $review) {
            $review->books()->attach(
                $books->random(rand(1, 2))->pluck('id')->toArray()
            );
        }
    }
}
