<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\Book;

class Borrowing extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function book()
    {
        return $this->belongsTo(Book::class);
    }

    protected $fillable = [
        'BorrowDate',
        'ReturnDate',
        'Status',
        'BookQuantity'
  ];
}
