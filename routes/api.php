<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('paquetes','PaquetesController@index');
Route::post('paquetes/create','PaquetesController@create');
Route::delete('paquetes/delete/{id}','PaquetesController@delete');
Route::get('paquetes/{id}','PaquetesController@show');
Route::put('paquetes/editar/{id}','PaquetesController@update');
Route::get('paquetes/editar/{id}','PaquetesController@show');

