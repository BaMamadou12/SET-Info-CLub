import React, { useState } from 'react';

export default function VerifyCode() {
  const [code, setCode] = useState('');
  const [showCode, setShowCode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Vérification du code:', code);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      {/* Container principal avec deux colonnes */}
      <div className="flex flex-col items-center justify-center w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-md md:flex-row">
        
        {/* Colonne du formulaire */}
        <div className="w-full p-6 md:w-1/2">
          <div className="flex items-center mb-6">
            <button className="flex items-center text-blue-500 hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Se connecter</span>
            </button>
          </div>
          <div className="flex items-center justify-center mb-6">
            <img src="/assets/logo_uidt.jpg" alt="Logo" className="w-auto h-10 mr-2" />
            <span className="text-xl font-bold">Set Info Club</span>
          </div>
          <h2 className="mb-6 text-2xl font-bold text-center">Vérification de code</h2>
          <p className="mb-4 text-sm text-center text-gray-600">
            Un code d'authentification a été envoyé à votre adresse e-mail
          </p>
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type={showCode ? 'text' : 'password'}
                placeholder="Entrez le code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowCode(!showCode)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
              >
                {showCode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Verify
            </button>
          </form>
          <p className="mt-4 text-xs text-center text-gray-500">
            Didn't receive code ? <a href="#" className="text-red-600">Resend</a>
          </p>
        </div>

        {/* Colonne de l'image */}
        <div className="hidden w-1/2 md:block">
          <img src="/assets/code.png" alt="Code illustration" className="object-cover w-full h-full" />
        </div>
        
      </div>
    </div>
  );
}
