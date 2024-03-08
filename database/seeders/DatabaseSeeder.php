<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Resource;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Resource::truncate();
        $csvFile = fopen(base_path("database/data/resource.csv"), "r");
        $firstline = true;
        while (($data = fgetcsv($csvFile, null, ",")) !== FALSE) {
            dump($data);
        if (!$firstline) {
        
        Resource::create([
        "date" => $data['0'],
        "subscription_name" => $data['1'],
        "resource_group" => $data['2'],
        "meter_category" => $data['3'],
        "meter_subcategory" => $data['4'],
        "resource_location" => $data['5'],
        "unit_price" => $data['6'],
        "cost" => $data['7'],
        "additional_info" => $data['8']!=='' ?$data['8'] : null,
        "vpcus" => $data['9']=== '' ? null : intval($data['9']),
        ]);
        }
        $firstline = false;
        }
        fclose($csvFile);
        }
    
}
