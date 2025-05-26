<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Books_category>
 */
class CategoryFactory extends Factory
{
    protected $model = Category::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word(),
            'colour' => fake()->safeHexColor(),
            'icon' => fake()->randomElement([
                'home',
                'search',
                'user',
                'settings',
                'bell',
                'camera',
                'heart',
                'menu',
                'check',
                'x'
            ]),
            'description' => fake()->sentence(),
        ];
    }
}
