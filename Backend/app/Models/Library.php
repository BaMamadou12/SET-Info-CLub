<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Library extends Model
{
    use HasFactory;
    public function books()
    {
        return $this->hasMany(Book::class, 'library_id', 'library_id');
    }
}
