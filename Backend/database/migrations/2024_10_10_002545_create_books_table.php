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
            $table->id('book_id');
            $table->string('title');
            $table->string('author');
            $table->text('description');
            $table->year('year_edit');
            $table->unsignedBigInteger('category_id');
            $table->string('edition')->default('inconnue');
            $table->unsignedInteger('pages');
            $table->timestamps();
            $table->unsignedBigInteger('library_id');

            $table->foreign('library_id')->references('library_id')->on('libraries')->onDelete('cascade');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
