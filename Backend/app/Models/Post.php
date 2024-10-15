<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\Tags;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
class Post extends Model
{
    use HasFactory;
    // Relation entre le Post et l'auteur (User)
    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    // Relation entre le Post et la catégorie
   /* public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    } */

 
   // Un post appartient à un seul tag
   public function tag(): BelongsTo
   {
       return $this->belongsTo(Tags::class, 'tags_id');
   }

    public function likes()
    {
        return $this->hasMany(LikePost::class, 'post_id');
    }
    // Relation entre un post et ses commentaires
    public function comments()
    {
        return $this->hasMany(Comment::class, 'post_id');
    }
}
