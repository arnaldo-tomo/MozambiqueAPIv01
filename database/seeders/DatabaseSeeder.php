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

        DB::table('mocambiques')->insert([
            'nome' => 'República de Moçambique',
            'Presidente' =>  'Filipe Jacinto Nyusi',
            'Primeiro-Ministro' =>  'Adriano Afonso Maleiane',
            'Sistema-Politico' =>  'Democracia Multipartidária',
            'Data-da-Independencia' =>  '25 de Junho de 1975',
            'Capital' =>  'Cidade de Maputo',
            'Outras-Linguas-Nacionais' =>  'Cicopi, cinyanja, cinyungwe, cisenga, cishona, ciyao, echuwabo, ekoti, elomwe, gitonga, maconde (ou shimakonde), kimwani, macua (ou emakhuwa), memane, suaíli (ou kiswahili), suazi (ou swazi), xichanga, xironga, xitswa e zulu.',
            'Moeda' =>  'Metical Moçambicano',
            'GDP' =>  '13.8%',
            'Codigo-Internet' =>  '.mz',
            'Codigo-Telefonico' =>  '+258',
            'Fuso-hororio' => 'UTC+2 (CAT)',
            'Lado-de-conducao' => 'Esquerda',
            'Recursos-Naturais' => '',
            'Principais-Exportacoes' => '',
            'Densidade' => '28,7/km2 (74,3/sq mi)',
            'Populacao' => '31.693.239',
            'Recursos-Naturais' => 'Energia Hidroeléctrica, gás natural, carvão, minerais ( titânio, grafite, ...) , madeiras e produtos piscatórios',
            'Principais-Exportacoes' => 'Camarões; algodão; caju; açúcar e chá',
            'Outras-Provincias' => '(Norte) (Centro) (Sul',
        ]);
    }
}
