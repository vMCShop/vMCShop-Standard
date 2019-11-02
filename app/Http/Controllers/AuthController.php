<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;


class AuthController extends Controller
{
    /**
     * Login user. Return token and user object as JSON
     *
     * @param  Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = [
            'name' => $request->input('login'),
            'password' => $request->input('password')
        ];
        
        if ($token = $this->guard()->attempt($credentials)) {
            $user = User::find(Auth::user()->id);
            
            $user->last_login_attempt_ip = $request->ip();
            $user->last_login_attempt_successful = true;
            $user->last_login_attempt_at = now();
            
            $user->save();
            
            return response()->json(['status' => 'success', 'message' => 'Authorized successfully', 'user' => $user->toArray()], 200)->header('Authorization', $token);
        }
        
        try {
            $user = User::where('name', $credentials['name'])->firstOrFail();
        } catch (ModelNotFoundException $e) {
            return response()->json(['status' => 'failed', 'message' => 'An authorization error has occurred'], 401);
        }
    
        $user->last_login_attempt_ip = $request->ip();
        $user->last_login_attempt_successful = false;
        $user->last_login_attempt_at = now();
        
        $user->save();
    
        return response()->json(['status' => 'failed', 'message' => 'An authorization error has occurred'], 401);
    }
    
    /**
     * Return auth guard
     */
    private function guard()
    {
        return Auth::guard();
    }
}
