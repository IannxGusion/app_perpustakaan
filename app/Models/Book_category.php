<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book_category extends Model
{
    use HasFactory;

    protected $fillable = [
        'books_id',
        'categories_id',
    ];

    public function books()
    {
        return $this->hasMany(Book::class);
    }

    public function categories()
    {
        return $this->hasMany(Category::class);
    }
}
