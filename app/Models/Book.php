<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
//use App\Models\Books_category;

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
    ];

    public function categories()
    {
        //
    }
}
