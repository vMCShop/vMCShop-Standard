<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->unique();
            $table->string('email')->unique();
            $table->string('password');
            $table->bigInteger('group_id')->unsigned();
            $table->string('avatar_url');
            $table->string('last_login_attempt_ip')->nullable(true);
            $table->boolean('last_login_attempt_successful')->nullable(true);
            $table->timestamp('last_login_attempt_at')->nullable(true);
        });
        
        factory(App\Models\User::class)->make()->save();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
