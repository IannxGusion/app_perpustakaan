<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Book;
use App\Models\Category;
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


        Category::factory(3)->create()->each(function ($category) {
            Book::factory(5)->create([
                'category_id' => $category->id,
            ]);
        });
    }
}
