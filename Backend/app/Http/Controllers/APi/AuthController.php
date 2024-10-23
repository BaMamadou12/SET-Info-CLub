<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function register(Request $request)
    {
        //
        $validated = Validator::make($request->all(),[
            'nom'=> 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'sexe' => 'required|string|max:255',
            'filliere' => 'required|string|max:255',
            'niveau' => 'required|string|max:255',
            'email' => 'required|string|email:rfc,dns|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
        if($validated->fails()){
            return response()->json([
                'statust' => "failed",
                'message' => 'erreur de validation ',
                'data' => $validated->errors()
            ],403);
        }
        $user = User::create([
            'nom'=> $request->nom ,
            'prenom' => $request->prenom ,
            'sexe' => $request->sexe,
            'filliere' => $request->filliere,
            'niveau' => $request->niveau,
            'email' =>$request->email,
            'password' => $request->password,

        ]);
        return response()->json([
           'status' => "success",
            'message' => 'Utilisateur créé avec succès',
            'data' => $user
        ],201);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
