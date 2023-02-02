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
            ['nome'=>'Absa Bank Moçambique','codigoBanco'=>1,'Telemóvel'=>'1223','Telefone'=>'+258 21 344 400','email'=>'linhacliente@absa.africa','website'=>'https://www.absa.co.mz'],

            ['nome'=>'BancABC Moçambique ','codigoBanco'=>2,'Telemóvel'=>'92264','Telefone'=>'+258 21 48 199','email'=>'mz_callcenter@bancabc.com','website'=>'https://www.bancabc.co.mz/'],

            ['nome'=>'Access Bank Mozambique SA','codigoBanco'=>3,'Telemóvel'=>'0','Telefone'=>'0','email'=>'contactcenter.moz@accessbankplc.com','website'=>'mozambique.accessbankplc.com'],

            ['nome'=>'BCI','codigoBanco'=>1,'Telemóvel'=>' +258 21353700','Telefone'=>'0','email'=>'bci@bci.co.mz','website'=>'www.bci.co.mz'],

            ['nome'=>'First Capital Bank SA ','codigoBanco'=>4,'Telemóvel'=>'258 84 3117 680','Telefone'=>'+ 258 21 320 760','email'=>'suporte.ao.cliente@firstcapitalbank.co.mz','website'=>'www.firstcapitalbank.co.mz'],

            ['nome'=>'FNB','codigoBanco'=>5,'Telemóvel'=>'0','Telefone'=>'+258 21 355 999','email'=>'call.center@fnb.co.mz','website'=>'https://www.fnb.co.mz/'],

            ['nome'=>'Letshego','codigoBanco'=>6,'Telemóvel'=>'0','Telefone'=>'+267 3643300','email'=>'info@letshego.com','website'=>' https://www.letshego.com/mozambique'],

            ['nome'=>'Banco Mais','codigoBanco'=>7,'Telemóvel'=>'82 30 58 130','Telefone'=>'0','email'=>'info@bancomais.co.mz','website'=>'www.bancomais.co.mz'],

            ['nome'=>'Millennium bim','codigoBanco'=>8,'Telemóvel'=>'82 20 20, 84 20 20','Telefone'=>' 258 21 342 000','email'=>'https://millenniumbim.co.mz','website'=>'www.millenniumbim.co.mz'],

            ['nome'=>'Mozabanco','codigoBanco'=>9,'Telemóvel'=>'+258 843987695 / +258 823058710','Telefone'=>'+258 21 499 543','email'=>'0','website'=>'www.mozabanco.co.mz'],

            ['nome'=>'Socremo','codigoBanco'=>10,'Telemóvel'=>'+258 843987695 / +258 823058710','Telefone'=>'+258 21 499 543','email'=>'secretariado@socremo.com','website'=>'http://www.socremo.com/'],

            ['nome'=>'Societe Generale','codigoBanco'=>11,'Telemóvel'=>'+25821313222 ou +25882 22 40 224/82 024','Telefone'=>'+25821 481 900','email'=>'https://societegenerale.co.mz','website'=>'https://societegenerale.co.mz'],

            ['nome'=>'Standard Bank','codigoBanco'=>12,'Telemóvel'=>'800 412 412','Telefone'=>'+258 21 329777','email'=>'linhadocliente@standardbank.co.mz','website'=>'https://www.standardbank.co.mz'],

            ['nome'=>'UBA','codigoBanco'=>13,'Telemóvel'=>'+258 800 300 555','Telefone'=>'0','email'=>'cfcmozambique@ubagroup.com','website'=>'www.ubamozambique.com'],

            ['nome'=>'Banco Único','codigoBanco'=>14,'Telemóvel'=>'0','Telefone'=>'0','email'=>'comunicacao@bancounico.co.mz','website'=>'http://www.bancounico.co.mz/'],
        ]);
    }
}
