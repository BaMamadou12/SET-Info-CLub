import React from "react";
import logo from "../../assets/logo.svg";
import login from "../../assets/login.svg";
import google from "../../assets/Google.svg";
import github from "../../assets/Github.svg";
import InputField from "../../components/inputs/InputField";
import Checkbox from "../../components/inputs/Checkbox";
function Login() {
  return (
    <>
      <div className="mb-4 container mx-auto w-full text-sm font-semibold py-4">
          <a href="/" className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#6b7280"} fill={"none"}>
              <path d="M3.99982 11.9998L19.9998 11.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Page d'accueil
          </a>
      </div>
      <div className="container mx-auto min-h-screen flex flex-col items-center justify-center px-4 py-6 text-gray-500">
        <div className="w-full max-w-6xl p-6 flex min-h-96 justify-between gap-6">
          {/* content */}
          <div className="w-1/2 flex flex-col">
            {/* LOGO */}
            <div className="mb-11">
              <img src={logo} alt=""/>
            </div>

            {/* FORM */}
            <div>
              <h1 className="text-3xl text-gray-700 font-semibold mb-2">
                Se connecter
              </h1>
              <p className="mb-8">Connectez-vous pour accéder à votre compte </p>
              <form action="" className="w-full mb-4">
                <InputField type="text" label="Email" />
                <InputField type="password" label="password" />
                <div className="flex items-center justify-between mb-6">
                  <Checkbox label="Souviens-toi de moi" />
                  <a
                    href="login"
                    className="text-sm font-medium text-[#FF8682] hover:underline"
                  >
                    Mot de passe oublié
                  </a>
                </div>
                <button className="px-6 py-2.5 rounded-[4px] bg-blue-500 text-white w-full hover:bg-blue-600">
                  Se connecter
                </button>
              </form>
              <div className="text-center mb-8">
                <p className="text-sm font-medium" >
                  Vous n'avez pas de compte ?{" "}
                  <a href="/login" className="text-sm text-[#FF8682] hover:underline">
                    Inscrivez-vous
                  </a>
                </p>
              </div>
              <div className="relative mb-6">
                <div className="w-full h-[1px] bg-gray-300"></div>
                <p className="text-gray-500 text-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2">
                  Ou se connecter avec
                </p>
              </div>
              <a href="/login" className="px-6 py-2 text-sm rounded-[4px] bg-gray-100 w-full mb-3 flex items-center justify-center gap-2 hover:bg-gray-200">
                <img src={google} alt="" />
                Continuer avec Google
              </a>
              <a href="/login" className="px-6 py-2 text-sm rounded-[4px] bg-gray-100 w-full mb-3 flex items-center justify-center gap-2 hover:bg-gray-200">
                <img src={github} alt="" />
                Continuer avec Github
              </a>
            </div>
          </div>

          {/* illustration */}
          <div className="w-[45%] bg-[#9DCCFF] rounded-3xl min-h-[620px] flex items-center justify-center p-4" >
            <img src={login} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
