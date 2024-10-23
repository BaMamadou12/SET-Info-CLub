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


// Reset password

// -> Code de verification

// --> Envoye un code
    Route::post('getcode/{email}',[CodeotpController::class,'sendotp'])->name('verifiecode');

// --> verifier le code
    Route::post('verifiecode/{email}',[CodeotpController::class,'verifiecode'])->name('verifiecode');

// -> Save  password

     Route::post('reset-password/{email}',[UserController::class,'resetpassword']);
