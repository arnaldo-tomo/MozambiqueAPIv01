<?php

use App\Http\Controllers\Controller;
use App\Http\Livewire\Login;
use Illuminate\Support\Facades\Route;

route::get('/', [Controller::class, 'PaginaInicial']);
route::get('cpainel', [Login::class, 'render']);
