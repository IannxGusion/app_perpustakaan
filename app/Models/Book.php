<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use App\Models\Category;
use App\Models\Borrowing;
use Illuminate\Database\Eloquent\SoftDeletes;

class Book extends Model
{
    use SoftDeletes;

    use HasFactory;

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function borrowings()
    {
        return $this->hasMany(Borrowing::class);
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
    ];
}
