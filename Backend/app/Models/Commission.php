<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Commission extends Model
{
    use HasFactory;

    protected $fillable = [
        'commission_type',
    ];

    // public function member():BelongsTo
    // {
    //     return $this->belongsTo(Member::class);
    // }

    // public function transaction():BelongsTo
    // {
    //     return $this->belongsTo(Transaction::class);
    // }

    // public function schedule():BelongsTo
    // {
    //     return $this->belongsTo(Schedule::class);
    // }

    

}
