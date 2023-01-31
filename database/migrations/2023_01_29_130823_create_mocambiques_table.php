<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mocambiques', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('Presidente');
            $table->string('Primeiro_Ministro');
            $table->string('Sistema_Politico');
            $table->string('Data_da_Independencia');
            $table->string('Capital');
            $table->string('Moeda');
            $table->string('GDP');
            $table->string('Outras_Linguas_Nacionais');
            $table->string('Codigo_Internet');
            $table->string('Codigo_Telefonico');
            $table->string('Fuso_hororio');
            $table->string('Lado_de_conducao');
            $table->string('Recursos_Naturais');
            $table->string('Densidade');
            $table->string('Populacao');
            $table->string('Principais_Exportacoes');
            $table->string('Outras_Provincias');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mocambiques');
    }
};