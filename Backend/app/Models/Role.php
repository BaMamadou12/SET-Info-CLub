<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Permission\Traits\HasRoles;

class Role extends Model
{
    use HasFactory, HasRoles;
    protected $guard_name = 'web';
    protected $fillable = [
        'name','guard_name'
    ];

    public function users():HasMany
    {
        return $this->hasMany(User::class);
    }
    
}
