<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    // reset password

    public function resetpassword(Request $request, $email)
    {


        $user = User::where("email", $email)->first();

        if ($user) {

            $user->password = Hash::make($request->password);

            $user->save();

            return response()->json(['status'=>true,'msg'=>'Mot de passe modifier']);
        }
    }
}
