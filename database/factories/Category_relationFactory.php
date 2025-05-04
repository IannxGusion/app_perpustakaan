<?php

namespace Database\Factories;
use App\Models\Category_relation;
use App\Models\Books_category;
use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category_relation>
 */
class Category_relationFactory extends Factory
{
    protected $model = Category_relation::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'books_id' => Book::factory(),
            'books_categories_id' => Books_category::factory(),
        ];
    }
}
