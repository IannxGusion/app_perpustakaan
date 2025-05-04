<?php

namespace Database\Factories;
use App\Models\Books_category;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Books_category>
 */
class Books_categoryFactory extends Factory
{
    protected $model = Books_category::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'category_name' => fake()->word(),
            'description' => fake()->sentence(),
        ];
    }
}
