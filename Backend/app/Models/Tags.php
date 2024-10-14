<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Tags extends Model
{
    use HasFactory;
      // Un tag peut avoir plusieurs posts
      public function posts(): HasMany
      {
          return $this->hasMany(Post::class,'tags_id');
      }
}
