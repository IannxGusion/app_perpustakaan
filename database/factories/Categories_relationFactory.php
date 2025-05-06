<?php

namespace Database\Factories;
use App\Models\Categories_relation;
use App\Models\Books_category;
use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category_relation>
 */
class Categories_relationFactory extends Factory
{
    protected $model = Categories_relation::class;

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
