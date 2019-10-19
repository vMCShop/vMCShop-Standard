<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    public $timestamps = false;
    
    protected $hidden = [
        'password'
    ];
    
    protected $dates = [
        'last_login_attempt_at'
    ];
    
    protected $casts = [
        'last_login_attempt_successful' => 'boolean'
    ];
    
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    
    public function getJWTCustomClaims()
    {
        return [];
    }
    public function setPassword($password)
    {
        if (!empty($password)) {
            $this->attributes['password'] = bcrypt($password);
        }
    }
}
