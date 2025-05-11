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
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('users_id')->constrained('users', 'id')->onDelete('cascade');
            $table->foreignId('books_id')->constrained('books', 'id')->onDelete('cascade');
            $table->integer('rating');
            $table->text('comment');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviews');
        Schema::table('reviews', function (Blueprint $table) {
            $table->dropForeign(['users_id']);
            $table->dropForeign(['books_id']);
        });
    }
};
