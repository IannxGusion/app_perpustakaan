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
        Schema::create('borrowings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('users_id')->constrained('users', 'id')->onDelete('cascade');
            $table->foreignId('books_id')->constrained('books', 'id')->onDelete('cascade');
            $table->date('BorrowDate');
            $table->date('ReturnDate')->nullable();
            $table->enum('Status', ['Borrows', 'Returned/Available'])->default('Borrows');
            $table->integer('BookQuantity')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('peminjaman');
        Schema::table('buku', function (Blueprint $table) {
            $table->dropForeign(['users_id']);
            $table->dropForeign(['books_id']);
        });
    }
};
