<?php

namespace App\Models;

use App\Models\mocambique;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class feriados extends Model
{
    use HasFactory;

    public function mocambique()
    {
        return $this->belongsTo(mocambique::class);
    }
}
