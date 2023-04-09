<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Rido Ananda',
            'email' => 'ridoananda123@gmail.com',
            'status' => 'Web Developer, Writer',
            'email_verified_at' => now(),
            'password' => Hash::make('RidoGans#223303040324'),
            'remember_token' => Str::random(10),
        ]);
    }
}
