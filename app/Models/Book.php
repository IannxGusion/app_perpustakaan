<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;

class Book extends Model
{
    use HasFactory, Searchable, SoftDeletes;

    public function toSearchableArray()
    {
        return [
            'title' => $this->title,
            'author' => $this->author,
        ];
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_book');
    }

    public function borrowings()
    {
        return $this->hasMany(Borrowing::class);
    }

    public function reviews()
    {
        return $this->belongsToMany(Review::class, 'review_book');
    }

    protected $fillable = [
        'title',
        'content',
        'cover',
        'author',
        'publisher',
        'publication_date',
        'status',
        'collected',
    ];
}
