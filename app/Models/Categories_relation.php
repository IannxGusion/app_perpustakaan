<?php

namespace App\Models;
use App\Models\Book;
use App\Models\Books_category;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Categories_relation extends Model
{
    use HasFactory;

    protected $fillable = [
        'books_id',
        'books_categories_id'
    ];
    
    public function books()
    {
        return $this->hasMany(Book::class);
    }

    public function category()
    {
        return $this->hasMany(Books_category::class);
    }
}
