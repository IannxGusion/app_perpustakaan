<?php

namespace Database\Factories;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class BookFactory extends Factory
{
    protected $model = Book::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'content' => fake()->paragraph(),
            'author' => fake()->name(),
            'cover' => fake()->imageUrl(640, 480, 'animals', true),
            'publisher' => fake()->company(),
            'publication_date' => fake()->date(),
            'status' => fake()->randomElement(['Available', 'Not Available']),
        ];
    }
}
