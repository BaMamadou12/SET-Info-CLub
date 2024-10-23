import React from "react";
import logo from "../../assets/logo.svg";
import login from "../../assets/login.svg";
import google from "../../assets/Google.svg";
import github from "../../assets/Github.svg";
import InputField from "../../components/inputs/InputField";
import Checkbox from "../../components/inputs/Checkbox";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="container mx-auto w-full lg:px-0 px-6">
      <div className="mb-4 text-sm font-semibold flex items-center justify-between p-2">
          <Link to="/" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#6b7280"} fill={"none"}>
              <path d="M3.99982 11.9998L19.9998 11.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Page d'accueil
          </Link>
      </div>
      <div className="max-w-7xl mx-auto lg:flex-row flex flex-col-reverse my-10 min-h-96 justify-between gap-6">
          {/* content */}
          <div className="lg:w-1/2 flex flex-col">
            {/* LOGO */}
            <div className="mb-4  lg:mb-11">
              <img src={logo} alt=""/>
            </div>

            {/* FORM */}
            <div>
              <h1 className="text-3xl text-gray-700 font-semibold mb-2 mx-auto lg:mx-0">
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
                  Vous n'avez pas de compte ?
                  <a href="/login" className="text-sm text-[#FF8682] hover:underline ml-1">
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
          <div className="lg:w-[45%] w-full bg-[#9DCCFF] mb-3 lg:mb-0 rounded-3xl h-96 lg:h-[620px] overflow-hidden flex items-center justify-center p-4" >
            <img src={login} alt="" className="" />
          </div>
        </div>
    </div>
  );
}

export default Login;
