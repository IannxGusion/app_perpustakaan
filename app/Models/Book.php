<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Book extends Model
{
    use HasFactory;
    use SoftDeletes;

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function borrowings()
    {
        return $this->hasMany(Borrowing::class);
    }

    public function review()
    {
        return $this->hasMany(Review::class);
    }

    protected $fillable = [
        'category_id',
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
