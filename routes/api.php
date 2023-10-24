<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Event_User_Controller;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserController;

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

Route::post('/register',[UserController::class,'register']);
Route::post('/login',[UserController::class,'login']);
Route::middleware('auth:api')->group(function (){
    Route::get('/getUser/{id}',[UserController::class,'getUser']);
});

Route::resource('event_user_control', Event_User_Controller::class);
Route::resource('eventControl', EventController::class);
Route::resource('reviewControl', ReviewController::class);