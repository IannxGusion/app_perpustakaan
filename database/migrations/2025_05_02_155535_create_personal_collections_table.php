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
        Schema::create('personal_collections', function (Blueprint $table) {
            $table->id();
            $table->foreignId('users_id')->constrained('users', 'id')->onDelete('cascade');
            $table->foreignId('books_id')->constrained('books', 'id')->onDelete('cascade');
            $table->string('collection_name')->default('New Collection');
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
