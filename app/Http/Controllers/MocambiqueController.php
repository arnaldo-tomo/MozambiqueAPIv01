<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\mocambique as ModelsMocambique;
use App\Models\liguas;


class MocambiqueController extends Controller
{
    public function get(){
        $apiGet = ModelsMocambique::all();
        return response()->json($apiGet);

}
}
