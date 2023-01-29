<?php

namespace App\Http\Controllers;

use App\Models\mocambique as ModelsMocambique;
use Illuminate\Http\Request;

class mocambique extends Controller
{
    public function get()
    {
        $apiGet = ModelsMocambique::all();

        if ($apiGet) {
            return response()->json([
                'data' => [
                    'type' => 'activities',
                    'message' => 'Success',
                    'attributes' => $apiGet
                ]
            ], 200);
        } else {
            return response()->json([
                'type' => 'activities',
                'message' => 'Not Found'
            ], 404);
        }
    }
}
