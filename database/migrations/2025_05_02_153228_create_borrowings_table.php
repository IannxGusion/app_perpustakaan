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
            $table->foreignId('books_id')->constrained('books', 'id')->onDelete('cascade');
            $table->foreignId('users_id')->constrained('users', 'id')->onDelete('cascade');
            $table->date('BorrowDate');
            $table->date('ReturnDate')->nullable();
            $table->enum('Status', ['Borrowing', 'Returned/Available'])->default('Borrowing');
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
            $table->dropForeign(['BukuID']);
            $table->dropForeign(['UserID']);
        });
    }
};
