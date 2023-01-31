<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class recursos extends Model
{
    use HasFactory;

    public function mocambique()
    {
        return $this->belongsTo(mocambique::class);
    }
}