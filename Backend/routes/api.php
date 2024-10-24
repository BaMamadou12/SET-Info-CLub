<?php



use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\RoleController;

use App\Http\Controllers\Api\DocumentController;
use App\Http\Controllers\Api\EventController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['namespace' => 'App\Http\Controllers\Api'],function(){  
    Route::controller(RoleController::class)->group(function(){
        Route::post('/role/store','store');
    });
    Route::controller(AuthController::class)->group(function(){
        Route::post('/login','login');
        Route::post('/register','register');
        Route::post('/logout','logout')->middleware('auth:sanctum');
    });
});

Route::apiResource('documents', DocumentController::class);
Route::apiResource('events', EventController::class);

