<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;

class Category extends Model
{
    use HasFactory, Searchable, SoftDeletes;

    public function toSearchableArray()
    {
        return [
            'name' => $this->name,
            'description' => $this->description,
        ];
    }

    public function books()
    {
        return $this->belongsToMany(Book::class, 'category_book');
    }

    protected $fillable = [
        'name',
        'colour',
        'description',
        'icon',
    ];
}
