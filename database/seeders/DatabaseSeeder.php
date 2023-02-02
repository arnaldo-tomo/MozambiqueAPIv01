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


        DB::table('bancos')->insert([
            ['nome'=>'Absa Bank Moçambique','codigoBanco'=>1,'nuit'=>0,'Contacto_Nacional'=>'1223','Contacto_Internacional'=>'+258 21 344 400','email'=>'linhacliente@absa.africa','website'=>'https://www.absa.co.mz'],

            ['nome'=>'BancABC Moçambique ','codigoBanco'=>2,'nuit'=>0,'Contacto_Nacional'=>'92264','Contacto_Internacional'=>'+258 21 48 199','email'=>'mz_callcenter@bancabc.com','website'=>'https://www.bancabc.co.mz/'],

            ['nome'=>'Access Bank Mozambique SA','codigoBanco'=>3,'nuit'=>0,'Contacto_Nacional'=>'0','Contacto_Internacional'=>'0','email'=>'contactcenter.moz@accessbankplc.com','website'=>'mozambique.accessbankplc.com'],

            ['nome'=>'BCI','codigoBanco'=>1,'nuit'=>0,'nuit'=>0,'Contacto_Nacional'=>' +258 21353700','Contacto_Internacional'=>'0','email'=>'bci@bci.co.mz','website'=>'www.bci.co.mz'],

            ['nome'=>'First Capital Bank SA ','codigoBanco'=>4,'nuit'=>0,'Contacto_Nacional'=>'0','Contacto_Internacional'=>'0','email'=>'0','website'=>'0'],

            ['nome'=>'FNB','codigoBanco'=>5,'nuit'=>0,'nuit'=>0,'Contacto_Nacional'=>'0','Contacto_Internacional'=>'0','email'=>'0','website'=>'0'],

            ['nome'=>'Letshego','codigoBanco'=>6,'nuit'=>0,'nuit'=>0,'Contacto_Nacional'=>'0','Contacto_Internacional'=>'0','email'=>'0','website'=>'0'],

            ['nome'=>'Banco Mais','codigoBanco'=>7,'nuit'=>0,'nuit'=>0,'Contacto_Nacional'=>'0','Contacto_Internacional'=>'0','email'=>'0','website'=>'0'],

            ['nome'=>'Millennium bim','codigoBanco'=>8,'nuit'=>0,'nuit'=>0,'Contacto_Nacional'=>'0','Contacto_Internacional'=>'0','email'=>'0','website'=>'0'],

            ['nome'=>'Mozabanco','codigoBanco'=>9,'nuit'=>0,'nuit'=>0,'Contacto_Nacional'=>'0','Contacto_Internacional'=>'0','email'=>'0','website'=>'0'],

            ['nome'=>'Socremo','codigoBanco'=>10,'nuit'=>0,'nuit'=>0,'Contacto_Nacional'=>'0','Contacto_Internacional'=>'0','email'=>'0','website'=>'0'],

            ['nome'=>'Societe Generale','codigoBanco'=>11,'nuit'=>0,'nuit'=>0,'Contacto_Nacional'=>'0','Contacto_Internacional'=>'0','email'=>'0','website'=>'0'],

            ['nome'=>'Standard Bank','codigoBanco'=>12,'nuit'=>0,'nuit'=>0,'Contacto_Nacional'=>'0','Contacto_Internacional'=>'0','email'=>'0','website'=>'0'],

            ['nome'=>'UBA','codigoBanco'=>13,'nuit'=>0,'nuit'=>0,'Contacto_Nacional'=>'0','Contacto_Internacional'=>'0','email'=>'0','website'=>'0'],

            ['nome'=>'Banco Único','codigoBanco'=>14,'nuit'=>0,'nuit'=>0,'Contacto_Nacional'=>'0','Contacto_Internacional'=>'0','email'=>'0','website'=>'0'],
        ]);
    }
}
