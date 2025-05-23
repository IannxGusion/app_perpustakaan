<?php

namespace Database\Factories;

use App\Models\Book;
use App\Models\Book_category;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category_relation>
 */
class Book_categoryFactory extends Factory
{
    protected $model = Book_category::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'books_id' => Book::factory(),
            'categories_id' => category::factory(),
        ];
    }
}
