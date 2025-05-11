<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use App\Models\Category;

class Book extends Model
{
    use HasFactory;

    public function categories()
    {
        return $this->belongsTo(Category::class);
    }

    protected $fillable = [
        'title',
        'content',
        'author',
        'publisher',
        'publication_date',
        'status',
        
        'category'
    ];
}
