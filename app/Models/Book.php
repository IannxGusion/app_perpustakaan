<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use App\Models\Category;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'category',
        'author',
        'publisher',
        'publication_date',
        'status',
    ];

    public function categories()
    {
        return $this->belongsTo(Category::class);
    }
}
