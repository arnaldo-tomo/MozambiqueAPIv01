<?php

namespace App\Models;

use App\Models\mocambique;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class inflaxao extends Model
{
    use HasFactory;
    public function mmocambique()
    {
        return $this->belongsTo(mocambique::class);
    }
}