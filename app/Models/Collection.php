<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use App\Models\User;
use App\Models\Borrowing;
use Illuminate\Database\Eloquent\SoftDeletes;

class Collection extends Model
{
    use SoftDeletes;

    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function borrowing()
    {
        return $this->hasMany(Borrowing::class);
    }


    protected $fillable = [
        'user_id',
        'borrowing_id',
        'name',
    ];
}
