<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use App\Models\Book;

class Category extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'category_name',
        'description'
    ];

    public function books()
    {
        return $this->belongsToMany(Book::class, 'book_categories');
    }
}
