<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use App\Models\Book;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use SoftDeletes;

    use HasFactory;

    public function books()
    {
        return $this->hasMany(Book::class,);
    }

    protected $fillable = [
        'name',
        'description'
    ];
}
