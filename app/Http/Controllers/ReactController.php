<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;

class ReactController extends Controller
{
    public function shop()
    {
        return View::make('react/shop');
    }
    
    public function admin()
    {
        return View::make('react/admin');
    }
}
