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
        Schema::create('category_book', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained('categories', 'id')->onDelete('cascade');
            $table->foreignId('book_id')->constrained('books', 'id')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('category_book', function (Blueprint $table) {
            $table->dropForeign(['categories_id']);
            $table->dropForeign(['books_id']);
        });
        Schema::dropIfExists('category_book');
    }
};
