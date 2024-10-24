<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $permissions = Permission::all();
            return response()->json(['permissions' => $permissions], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Problème inconnu'], 500);
        }

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate(
            [
                'name'=>'required|string|unique:permissions,name|max:255'
            ]
            );
        $permission=Permission::create(['name'=>$validated['name']]);
        return response()->json(['message'=>'Permission ajouté avec succès','permission'=>$permission],201);    
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $permission=Permission::findOrFail($id);

        return response()->json(['message'=>'La permission est trouvée','permission'=>$permission],200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated=$request->validate([
        'name'=>'required|string|unique:permissions,name|max:255'
        ]);
        $permission=Permission::findOrFail($id);
        $permission->update(['name'=>$validated['name']]);
        return response()->json(['message'=>'La permission est mise à jour','permission'=>$permission],200);
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $permission=Permission::findOrFail($id);
        $permission->roles()->detach();
        $permission->delete();
        return response()->json(['message'=>'La permission a été supprimée avec succès !'],200);
    }
   public function  assignPermissionToRole(Request $request, $id){
      
    $validated = $request->validate([
        'name' => 'required|string|exists:permissions,name',
    ]);

    
    $role = Role::findOrFail($id);

    // Récupérer la permission par son nom
    $permission = Permission::where('name', $validated['name'])->first();

    // affecter une permission sur un role
    $role->givePermissionTo($permission);

    return response()->json([
        'message' => 'Permission assignée avec succès au rôle',
        'role' => $role->name,
        'permission' => $permission->name
    ], 200);


    }
   
}
