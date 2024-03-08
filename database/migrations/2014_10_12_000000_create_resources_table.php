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
        Schema::create('resources', function (Blueprint $table) {
            $table->id();
            $table->timestamp('date');
            $table->string('subscription_name');
            $table->string('resource_group')->nullable();
            $table->string('meter_category');
            $table->string('meter_subcategory');
            $table->string('resource_location');
            $table->decimal('unit_price',25,17);
            $table->decimal('cost',25,17);
            $table->json('additional_info')->nullable();
            $table->integer('vpcus')->nullable();


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resources');
    }
};
