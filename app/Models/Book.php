<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use App\Models\Category;
use App\Models\Borrow;

class Book extends Model
{
    use HasFactory;

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function borrowings()
    {
        return $this->hasMany(Borrow::class);
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
