<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'author',
        'publisher',
        'publication_date',
        'status',
        'books_category'
    ];

    public function category()
    {
        return $this->belongsTo(Categories_relation::class, 'categories_id');
    }
}
