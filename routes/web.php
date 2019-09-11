<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/admin/{path?}', [ 'uses' => 'ReactController@admin', 'as' => 'react.admin', 'where' => ['path' => '.*'] ]);

Route::get('/{path?}', [ 'uses' => 'ReactController@shop', 'as' => 'react.shop', 'where' => ['path' => '.*'] ]);
