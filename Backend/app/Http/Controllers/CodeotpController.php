<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Codeotp;
use Nette\Utils\Random;
use App\Mail\VerifieEmail;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Mail;

class CodeotpController extends Controller
{
    //
    // Generer une code alphanumerique


    private function generateOTP($length = 10)
    {
        // Définir les caractères possibles
        $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        $otp = '';
        // Générer un code OTP aléatoire
        for ($i = 0; $i < $length; $i++) {
            $otp .= $characters[rand(0, strlen($characters) - 1)];
        }
        return $otp;
    }



    public function sendotp($email)
    {
        $users = User::where('email', '=', $email)->get();

        $otp = $this->generateOTP();

        $test =  Mail::to($email)->send(new VerifieEmail($otp));

        $otpE = new Codeotp(['otp' => $otp]);

        $users->otp()->save($otpE);

        // dd($test);

        return response()->json(['state'=>true,'msg'=>'Email Envoyer']);
    }

    public function verifieOtp($email,Request $Request){

        $otp = Request('code');

        $user = User::where('email',$email)->get();

        $codeExist = $user->otp()->get();

        if($codeExist){
            if(($otp->created_at + 300) <= time()){
                return response()->json(['code'=>true,'msg'=> 'Email verifier']);
            }else{
                return response()->json(['code'=>false,'msg'=> 'Code Expirer']);
            }

        }else{

            return response()->json(['code'=>false,'msg'=> 'Code non valide ']);
        }

    }
}
