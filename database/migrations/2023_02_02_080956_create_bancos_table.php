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
        Schema::create('bancos', function (Blueprint $table) {
            // $table->id();
            $table->integer('codigoBanco');
            $table->string('nome');
            $table->integer('Nuit')->nullable();
            $table->string('Contacto_Nacional');
            $table->string('Contacto_Internacional');
            $table->string('email');
            $table->string('website');

            // $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bancos');
    }
};
