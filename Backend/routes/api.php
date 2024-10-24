<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CodeotpController;
use App\Http\Controllers\Api\EventController;
use App\Http\Controllers\Api\DocumentController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('documents', DocumentController::class);
Route::apiResource('events', EventController::class);


// -> Reset password

// -> Send email with code

Route::get('/sendotp/{email}',[CodeotpController::class,'sendotp'] )->name('sendotp');

// ->  Verifie email

Route::get('/verifieOtp/{email}',[CodeotpController::class,'verifieotp'] )->name('verifieotp');

// ->reset

Route::post('resetpassword',[UserController::class,'resetpassword'] )->name('resetpassword');
