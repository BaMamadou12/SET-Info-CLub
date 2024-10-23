<?php

use App\Http\Controllers\CodeotpController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('send/{email}',   [CodeotpController::class,'sendotp'])->name('send');
