<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\mocambique;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
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
        // \App\Models\User::factory(10)->create();
        // php artisan db:seed
        // php artisan db:seed --class=UserSeeder
        // php artisan migrate:fresh --seed
        // php artisan migrate:fresh --seed --seeder=UserSeeder

        DB::table('users')->insert([
            'nome' => 'República de Moçambique',
            'Presidente' =>  '@gmail.com',
            'Primeiro-Ministro' =>  '@gmail.com',
            'Sistema-Politico' =>  '@gmail.com',
            'Data-da-Independencia' =>  '@gmail.com',
            'Lingua-Oficial' =>  '@gmail.com',
            'Capital' =>  '@gmail.com',
            'Moeda' =>  '@gmail.com',
            'Moeda' =>  '@gmail.com',
            'GDP' =>  '@gmail.com',
            'Codigo-Internet' =>  '@gmail.com',
            'Codigo-Telefonico' =>  '@gmail.com',
        ]);
    }
}
