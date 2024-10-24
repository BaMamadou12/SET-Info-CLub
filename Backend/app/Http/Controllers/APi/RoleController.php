<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;


class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       
            $roles=Role::all();
            return response()->json($roles,200);
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'=>'required|string|unique:roles,name|max:255',
            'guard_name' => 'required|string|max:255',
          

        ],
        [
            'name.required' => 'Le nom du rôle est obligatoire.',
            'name.unique' => 'Ce nom de rôle existe déjà.',
        ]);
        
      
        $role=Role::create(['name'=> $validated['name'],
        'guard_name' => $validated['guard_name'],
    ]);

        
        return response()->json(['message'=>'role créé avec succès','role'=>$role],201);
    
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $role=Role::findOrFail($id);
        return response()->json($role,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $role=Role::findOrFail($id);

        $validated=$request->validate(
            [
                'name'=>'required|string|unique:roles,name|max:255',
                'guard_name' => 'required|string|max:255',
              
    
            ],
            [
                'name.required' => 'Le nom du rôle est obligatoire.',
                'name.unique' => 'Ce nom de rôle existe déjà.',
            ]
            );
            $role->update(['name'=>$validated['name'],'guard_name'=>$validated['guard_name']]);

            return response()->json(['massage'=>'Le role est mise à jour avec succès !','role'=>$role],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $role=Role::findOrFail($id);
        $role->delete();
        return response()->json(['message'=>'Le role a été supprimé avec succès !'],200);
    }


    /**
     * methode qui permet d'assigner un role à un user 
     */
    public function assignRoleToUser(Request $request , $user_id){

        $user = User::findOrFail($user_id);

        // Valider que le rôle existe dans la table roles 
        $validated = $request->validate([
            'name' => 'required|string|exists:roles,name'
        ]);
    
        // Assigner le rôle à l'utilisateur
        $user->assignRole($validated['name']);

        return response()->json(['message'=>'Le role est assigné avec succès !'],200);


    }
}
