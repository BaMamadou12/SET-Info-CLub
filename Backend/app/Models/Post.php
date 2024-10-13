<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\Tags;
use App\Models\User;
class Post extends Model
{
    use HasFactory;
    // Relation entre le Post et l'auteur (User)
    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    // Relation entre le Post et la catégorie
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    // Relation entre le Post et les tags (Many-to-Many)
    public function tags()
    {
        return $this->belongsToMany(Tags::class, 'post_tag', 'post_id', 'tag_id');
    }
}
