<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    public function library()
    {
        return $this->belongsTo(Library::class, 'library_id', 'library_id');
    }

   /* public function category()
    {
        return $this->belongsTo(Category::class);
    }*/
}
