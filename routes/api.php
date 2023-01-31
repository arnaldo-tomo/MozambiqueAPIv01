<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;

Route::get('v01/docs/mocambique', [MocambiqueController::class ,'get'] );

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
