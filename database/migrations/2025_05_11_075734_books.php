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
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('title');
            $table->text('content');
            $table->string('cover')->nullable();
            $table->string('author');
            $table->string('publisher');
            $table->date('publication_date');

            $table->enum('status', ['Available', 'Not Available'])->default('Available');
            $table->enum('collected', ['Yes', 'No'])->default('No');
            $table->string('source')->nullable();

            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('books', function (Blueprint $table) {
            // $table->dropForeign(['category_id']);
        });
        Schema::dropIfExists('books');
    }
};
