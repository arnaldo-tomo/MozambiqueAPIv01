<?php

namespace App\Models;

use App\Models\liguas;
use App\Models\feriados;
use App\Models\inflaxao;
use App\Models\recursos;
use App\Models\provincias;
use App\Models\exportacoes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class mocambique extends Model
{
    protected $fillable = ['name', 'email'];
    use HasFactory;

    public function Provincias()
    {
        return $this->BMany(provincias::class);
    }


    
    public function Linguas()
    {
            return $this->hasMany(liguas::class);
    }


    public function Recursos()
    {
        return $this->BMany(recursos::class);
    }

    public function Feriados()
    {
        return $this->BMany(feriados::class);
    }

    public function Inflaxao()
    {
        return $this->BhMany(inflaxao::class);
    }

    public function exportacoes()
    {
        return $this->BMany(exportacoes::class);
    }
}