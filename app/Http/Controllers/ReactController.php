<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;

class ReactController extends Controller
{
    public function app()
    {
        return View::make('index');
    }
}
