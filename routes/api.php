<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('cache.headers:public;max_age=2628000')->get('/resources', 'App\Http\Controllers\ResourceController@list');
Route::get('/resources/{id}', 'App\Http\Controllers\ResourceController@show');
Route::delete('/resources/{id}', 'App\Http\Controllers\ResourceController@destroy');
Route::post('/resources', 'App\Http\Controllers\ResourceController@store');
Route::put('/resources/{id}', 'App\Http\Controllers\ResourceController@update');
