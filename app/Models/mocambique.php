<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mocambique extends Model
{
    protected $fillable = ['name', 'email'];
    use HasFactory;
}
