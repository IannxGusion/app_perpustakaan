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
        Schema::create('koleksi_pribadi', function (Blueprint $table) {
            $table->id();
            $table->foreignId('UserID')->constrained('users', 'id')->onDelete('cascade');
            $table->foreignId('BukuID')->constrained('buku', 'id')->onDelete('cascade');
            $table->string('namaKoleksi')->default('Koleksi Baru');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('koleksi_pribadi');
        Schema::table('koleksi_pribadi', function (Blueprint $table) {
            $table->dropForeign(['UserID']);
            $table->dropForeign(['BukuID']);
        });
    }
};
