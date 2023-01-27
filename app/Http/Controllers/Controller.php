<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Hash;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public function PaginaInicial()
    {
        return view('docs.v01Api');
    }

    public function save()
    {
        //para criar admin
        $usuario = new User;
        $usuario->name = "Arnaldo Jose Tomo";
        $usuario->email = "admin@gmail.com";
        $usuario->password = Hash::make('admin');
        $usuario->save();
        return "Craido Com Exito! ";
    }
}