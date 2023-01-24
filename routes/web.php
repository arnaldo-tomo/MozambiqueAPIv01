<?php

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;

route::get('/', [Controller::class, 'PaginaInicial']);