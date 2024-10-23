<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
   
     public function store(Request $request)
     {
         //
         $validated = Validator::make($request->all(),[
             'name' => 'required|string|max:255',
         ]);
         if($validated->fails()){
             return response()->json([
                 'status' => 'failed',
                 'message' => 'erreur de validation',
                 'data' => $validated->errors(),
             ],422);
 
         
         }
         $role = Role::create([
             'name'=> $request->name,
          ]);
          return response()->json([
             'status' =>'success',
             'message' => 'rôle créé avec succès',
             'data' => $role,
          ]);
     }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
