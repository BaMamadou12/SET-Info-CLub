<?php

use App\Http\Controllers\Api\DocumentController;
use App\Http\Controllers\Api\EventController;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\PermissionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//Route pour la gestion des utilisateurs cad leur permissions :
//Route pour les roles 
Route::get('/roles',[RoleController::class,'index']);
Route::post('/roles',[RoleController::class,'store']);
Route::get('/roles/{id}',[RoleController::class,'show']);
Route::put('/roles/{id}',[RoleController::class,'update']);
Route::delete('/roles/{id}',[RoleController::class,'destroy']);

// Route pour les apis de permissions
Route::get('/permissions', [PermissionController::class, 'index']);
Route::post('/permissions', [PermissionController::class, 'store']);
Route::post('/permissions/assign-to-role/{roleId}', [PermissionController::class, 'assignPermissionToRole']);
Route::post('/permissions/assign-to-user/{userId}', [PermissionController::class, 'assignPermissionToUser']);











Route::apiResource('documents', DocumentController::class);
Route::apiResource('events', EventController::class);
