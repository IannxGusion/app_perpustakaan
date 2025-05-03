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
        Schema::create('category_relations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('books_categories_id')->constrained('books_categories', 'id')->onDelete('cascade');
            $table->foreignId('books_id')->constrained('books', 'id')->onDelete('cascade');
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
