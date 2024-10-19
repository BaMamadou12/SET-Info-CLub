<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use PharIo\Manifest\Author;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens,HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nom',
        'prenom',
        'sexe',
        'filliere',
        'niveau',
        'photo',
        'email',
        'password',
        'role_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }


    public function events()
    {
        return $this->hasMany(Event::class, 'created_by');
    }

    public function documents()
    {
        return $this->hasMany(Document::class, 'created_by');
    }


    // Relation entre l'utilisateur et ses posts
    public function posts()
    {
        return $this->hasMany(Post::class, 'author_id');
    }
    //relation entre le user et ses commentaires
    public function comments():HasMany{
        return $this->hasMany(Comment::class,'author_id');
        
    }
     // Un utilisateur peut faire plusieurs likes
     public function likes(): HasMany
     {
         return $this->hasMany(LikePost::class, 'user_id');
     }

    public function role():BelongsTo
    {
        return $this->belongsTo(Role::class);
    }
    // public function posts():HasMany{
    //     return $this->hasMany(Post::class);
    // }

    // public function events():HasMany
    // {
    //     return $this->hasMany(Event::class);
    // }
     
    // public function likeForums():HasMany
    // {
    //     return $this->hasMany(LikeForum::class);
    // }


}

