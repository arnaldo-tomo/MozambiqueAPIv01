<?php

use App\Http\Controllers\MocambiqueController;
use App\Http\Controllers\Controller;
use App\Http\Livewire\Login;
use App\Http\Livewire\ManagerApi;
use Illuminate\Support\Facades\Route;

route::get('/', [Controller::class, 'PaginaInicial']);
route::get('cpainel', Login::class);
route::get('managerapi', ManagerApi::class)->name('manegerapi');

route::get('v01/docs/mocambique',[MocambiqueController::class,'get']);
