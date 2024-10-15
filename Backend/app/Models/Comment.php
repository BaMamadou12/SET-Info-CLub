<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
    use HasFactory;

    //realtion entre le user et son commentaire
    public function author():BelongsTo{
        return $this->BelongTo(User::class,'author_id');
    }
    
 
     // Relation entre un commentaire et son post
     public function post()
     {
         return $this->belongsTo(Post::class, 'post_id');
     }
}
