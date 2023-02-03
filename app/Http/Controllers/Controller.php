<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\cidades;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public function PaginaInicial()
    {
        return view('docs.v01Api');
    }


    public function get()
    {
        $apiGet = cidades::all();
        if ($apiGet) {
            return response()->json([
                'Dados' => [
                    'tipo' => 'GET',
                    'messagens' => 'Successos, 200 OK',
                    'valores' => $apiGet
                ]
            ], 200);
        } else {
            return response()->json([
                'type' => 'activities',
                'message' => 'Not Found'
            ], 404);
        }
    }

    public function getters($id)
    {

        $apiGet = cidades::where('CodigoCidade', $id)->get();


        if ($apiGet) {
            return response()->json([
                'Dados' => [
                    'tipo' => 'GET',
                    'messagens' => 'Successos, 200 OK',
                    'valores' => $apiGet
                ]
            ], 200);
        } else {
            return response()->json([
                'type' => 'activities',
                'message' => 'Not Found'
            ], 404);
        }
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