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
        Schema::create('event', function (Blueprint $table) {
            $table->id('eventID');
            $table->string('eventName');
            $table->string('eventType');
            $table->string('eventLocation');
            $table->date('eventDate');
            $table->time('eventTime');
            $table->string('eventCapacity');
            $table->string('eventAvater');
            $table->string('eventDescription');
            $table->string('eventPrice');
            $table->string('evevntUserType');
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event');
    }
};
