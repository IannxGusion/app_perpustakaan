<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Borrowing extends Model
{
    use HasFactory;
    use SoftDeletes;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function book()
    {
        return $this->belongsTo(Book::class);
    }

    public function collection()
    {
        return $this->belongsTo(Collection::class);
    }

    protected $fillable = [
        'user_id',
        'book_id',
        'borrow_date',
        'return_date',
        'status',
    ];
}
