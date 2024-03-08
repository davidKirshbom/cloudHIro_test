<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class ResourceController extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
    public function list()
    {
        try {
            return Resource::all();
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }


    public function store(Request $request)
    {

        $resource = new Resource($request->all());
        try {
            $isSuccess = $resource->save();
            if ($isSuccess)
                return $resource;
            return response()->json(['message' => 'Resource not created'], 500);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function show($id)
    {
        try {
            $resource = Resource::find($id);
            if ($resource)
                return $resource;
            return response()->json(['message' => 'Resource not found'], 404);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }


    public function update(Request $request, $id)
    {
        try {
            $resource = Resource::find($id);
            if ($resource) {

                $resource->update($request->all());
                return $resource;
            } else {
                return response()->json(['message' => 'Resource not found'], 404);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $resource = Resource::find($id);
            if ($resource) {
                $resource->delete();
                return response()->json(['message' => 'Resource deleted successfully'], 200);
            } else {
                return response()->json(['message' => 'Resource not found'], 404);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
