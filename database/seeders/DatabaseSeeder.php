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
            'Primeiro_Ministro' =>  'Adriano Afonso Maleiane',
            'Sistema_Politico' =>  'Democracia Multipartidária',
            'Data_da_Independencia' =>  '25 de Junho de 1975',
            'Capital' =>  'Cidade de Maputo',
            'Outras_Linguas_Nacionais' =>  'Cicopi, cinyanja, cinyungwe, cisenga, cishona, ciyao, echuwabo, ekoti, elomwe, gitonga, maconde (ou shimakonde), kimwani, macua (ou emakhuwa), memane, suaíli (ou kiswahili), suazi (ou swazi), xichanga, xironga, xitswa e zulu.',
            'Moeda' =>  'Metical Moçambicano',
            'GDP' =>  '13.8%',
            'Codigo_Internet' =>  '.mz',
            'Codigo_Telefonico' =>  '+258',
            'Fuso_hororio' => 'UTC+2 (CAT)',
            'Lado_de_conducao' => 'Esquerda',
            'Densidade' => '28,7/km2 (74,3/sq mi)',
            'Populacao' => '31.693.239',
            'Recursos_Naturais' => 'Energia Hidroeléctrica, gás natural, carvão, minerais (    titânio, grafite, ...) , madeiras e produtos piscatórios',
            'Principais_Exportacoes' => 'Camarões; algodão; caju; açúcar e chá',
            'Outras_Provincias' => '(Norte) (Centro) (Sul',
        ]);

        DB::table('liguas')->insert([
            ['outrasLinguas'=>'cena','mocambique_id'=>1],
            ['outrasLinguas'=>'Ndao','mocambique_id'=>1],
            ['outrasLinguas'=>'Macute','mocambique_id'=>1],
            ['outrasLinguas'=>'ceChihhhna','mocambique_id'=>1],
            ['outrasLinguas'=>'cehhhjjjna','mocambique_id'=>1],
            ['outrasLinguas'=>'cehhjhjna','mocambique_id'=>1],
            ['outrasLinguas'=>'cejjnjknkna','mocambique_id'=>1],
        ]);
    }
}
