<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;

Route::get('v01/docs/mocambique', [MocambiqueController::class, 'get']);
Route::get('v01/docs/provincias', [Controller::class, 'get']);
Route::get('v01/docs/provincia/{id}', [Controller::class, 'getters']);