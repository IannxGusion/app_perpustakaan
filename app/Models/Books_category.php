<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Books_category extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'category_name',
        'description'
    ];

    public function books()
    {
        return $this->belongsTo(Category_relation::class, 'books_id');
    }
}
