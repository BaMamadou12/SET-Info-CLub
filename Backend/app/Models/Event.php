<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'created_by',
        'localisation',
        'date_event',
    ];

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
