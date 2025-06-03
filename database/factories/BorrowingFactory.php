<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Borrowing>
 */
class BorrowingFactory extends Factory
{
    protected $model = \App\Models\Borrowing::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => fake()->randomDigitNotNull(),
            'book_id' => fake()->randomDigitNotNull(),
            'borrow_date' => fake()->date(),
            'return_date' => fake()->date(),
            'status' => fake()->randomElement(['Borrows', 'Returned']),
        ];
    }
}
