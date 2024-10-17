import React, { useState } from 'react'
import logo from "../../assets/images/logo.jpg";
import register_illustration from "../../assets/images/signup_illustration.jpg";
import TextField from '../../components/form/TextField';
import TextFieldPassword from '../../components/form/TextFieldPassword';
import TextPoppins from '../../assets/polices/TextPoppins';
import { Link } from 'react-router-dom';
import { DropdownField } from '../../components/form/DropdownField';

function Register() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [confirmationMotDePasse, setConfirmationMotDePasse] = useState('');

  const [niveau, setNiveau] = useState('');
  const [filiere, setFiliere] = useState('');


  const niveauOptions = ['Licence 1', 'Licence 2', 'Licence 3', 'Master 1', 'Master 2'];
  const filiereOptions = ['IA et Smart Tech', 'Réseaux et télécom', 'Génie logiciel'];

  const arrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  return (
    <div className='w-full md:py-8 py-4 md:px-20 px-3 h-fit   flex flex-col'>
      <div className="w-full   flex items-center justify-between">
        <div className='w-full'>
          <div className='w-fit flex gap-x-2 px-3 py-2 transition cursor-pointer delay-100 rounded-sm hover:bg-[#F8F8F8]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#808080" fill="none">
              <path d="M3.99982 11.9998L19.9998 11.9998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <TextPoppins color="text-[#808080]" fontSize="text-md" fontWeight="font-normal">
              Page d’accueil
            </TextPoppins>
          </div>
        </div>
        <div className=' lg:hidden flex '>
          <img src={logo} alt="Set Info Club" className='w-[300px]' />
        </div>
      </div>

      <div className='grid relative my-3 w-full gap-5 grid-cols-1 md:grid-cols-2'>
        <div className='w-full hidden md:flex  '>
          <img src={register_illustration} className='w-full object-contain h-full' alt="register illustration" />
        </div>
        <div className='w-full justify-between  flex flex-col'>
          <div className=' hidden lg:flex w-full items-start justify-end'>
            <img src={logo} alt="Set Info Club" className='w-[300px]' />
          </div>
          <div className='w-full gap-5 lg:mt-0 md:mt-8 mt-0 justify-between  flex flex-col'>
            <div className='w-full justify-start'>
              <TextPoppins color="text-[#313131]" fontSize="text-3xl" fontWeight="font-bold">
                S'inscrire
              </TextPoppins>
            </div>
            <div className='w-full justify-start'>
              <TextPoppins color="text-[#313131]" fontSize="text-md" fontWeight="font-normal">
                Laissez-nous vous aider à accéder à votre compte personnel.
              </TextPoppins>
            </div>

            <div className='w-full flex gap-5 flex-col'>
              <div className='w-full gap-5 grid grid-cols-1 md:grid-cols-2'>
                <TextField
                  id="prenom"
                  label="Prénom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  required
                />
                <TextField
                  id="nom"
                  label="Nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                />
              </div>
              <div className='w-full gap-5 grid grid-cols-1 md:grid-cols-2'>
                <TextField
                  id="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <TextField
                  id="telephone"
                  label="Téléphone"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  required
                />
              </div>
              <div className='w-full gap-5 grid grid-cols-1 md:grid-cols-2'>
                <DropdownField
                  label="Niveau"
                  value={niveau}
                  onChange={(e) => setNiveau(e.target.value)}
                  options={niveauOptions}
                  id="niveau"
                  svgIcon={arrowIcon}
                />
                <DropdownField
                  label="Filière"
                  value={filiere}
                  onChange={(e) => setFiliere(e.target.value)}
                  options={filiereOptions}
                  id="filiere"
                  svgIcon={arrowIcon}
                />
              </div>
              <div>
                <TextFieldPassword
                  id="motDePasse"
                  label="Mot de passe"
                  value={motDePasse}
                  onChange={(e) => setMotDePasse(e.target.value)}
                  required
                />
              </div>
              <div>
                <TextFieldPassword
                  id="ConfirmationMotDePasse"
                  label="Confirmation de mot de passe"
                  value={confirmationMotDePasse}
                  onChange={(e) => setConfirmationMotDePasse(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex pb-5 pt-2 items-center">
              <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600   rounded focus:ring-blue-500   focus:ring-2  " />
              <label for="link-checkbox" className="ms-2 font-montserrat text-sm font-medium text-[#1C1B1F]  ">J'accepte toutes les <Link to="#" class="text-[#FF8682]  hover:underline"> conditions</Link> et <Link to="#" class="text-[#FF8682] hover:underline">politiques </Link>de confidentialité.</label>
            </div>

            <div>
              <button className='w-full text-center px-2.5 flex items-center justify-center py-2 text-white  bg-[#4175DF]'>Créer un compte</button>
            </div>


            <h1 for="link-checkbox" className="ms-2 w-full text-center font-montserrat  text-sm font-medium text-[#1C1B1F]">Avez vous déjà un compte? <Link to="#" class="text-[#FF8682] font-semibold"> Se connecter</Link></h1>

          </div>

        </div>
      </div>
    </div >
  )
}

export default Register
