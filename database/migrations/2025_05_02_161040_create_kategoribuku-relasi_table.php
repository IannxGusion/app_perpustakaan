<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('kategoribuku-relasi', function (Blueprint $table) {
            $table->id('KategoriRelasiID')->primary()->autoIncrement();
            $table->foreignId('KategoriID')->constrained('kategoribuku', 'KategoriID')->onDelete('cascade');
            $table->foreignId('BukuID')->constrained('buku', 'BukuID')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kategoribuku-relasi');
        Schema::table('kategoribuku-relasi', function (Blueprint $table) {
            $table->dropForeign(['KategoriID']);
            $table->dropForeign(['BukuID']);
        });
    }
};
