<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Books_category;

class Books_categoryFactory extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Books_category::factory(10)->create();
    }
}
