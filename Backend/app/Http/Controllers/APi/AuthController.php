<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Register a new user.
     *
     * @param  \Illuminate\Http\Request  
     * 
     * @return \Illuminate\Http\JsonResponse  
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
        $role= Role::where('name', 'user')->first();
        $roleId = $role->id;
        $user = User::create([
            'nom'=> $request->nom ,
            'prenom' => $request->prenom ,
            'sexe' => $request->sexe,
            'filliere' => $request->filliere,
            'niveau' => $request->niveau,
            'email' =>$request->email,
            'password' => bcrypt($request->password),
            'role_id' => $roleId,
        ]);
        $data['token'] = $user->createToken($request->email)->plainTextToken;
        $data['user'] = $user;
        $response = [
            'status' => 'success',
            'message' => 'utilisateur crée avec success',
            'data' => $data
        ];
        return response()->json($response, 201);
    }
    /**
     * Handle user login and generate an authentication token.
    
     * @param  \Illuminate\Http\Request  
     * 
     * @return \Illuminate\Http\JsonResponse  
     */
    public function login(Request $request){
        $request->validate([
            'email' =>'required|string|email:rfc,dns',
            'password' => 'required|string',
        ]);
       
        if(Auth::attempt($request->only('email','password'))){
            $user = Auth::user();
            $data['token'] = $user->createToken($request->email)->plainTextToken;
            $data['user'] = $user;
            $response = [
               'status' =>'success',
               'message' => 'Authentification réussie',
                'data' => $data
            ];
            return response()->json($response, 200);

        }
        $response = [
            'status' => 'failed',
           'message' => 'Authentification échouée',
        ];
        return response()->json($response, 401);

    }  
    /**
     * Log out the authenticated user and revoke the current access token.
     * @param  \Illuminate\Http\Request  
     * 
     * @return \Illuminate\Http\JsonResponse 
     */
    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        $response = [
           'status' =>'success',
           'message' => 'Déconnexion réussie',
        ];
        return response()->json($response, 200);
    }

}
