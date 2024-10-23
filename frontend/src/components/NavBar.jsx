// import {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from "../assets/logo.svg"

function NavBar() {
  return (
    <div className="mb-6 text-[15px]">
        <div className='container mx-auto h-24 md:p-0 px-4 flex items-center justify-between'>
          <div>
            <Link>
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className='lg:flex items-center gap-10 hidden'>
            <ul className='lg:flex items-center gap-2'>
              <li ><NavLink to="/" className=' relative px-3 py-2.5 hover:text-gray-700 font-medium transition-all'>Accueil</NavLink></li>
              <li ><NavLink to="/blogs" className='relative px-3 py-2.5 hover:text-gray-700 font-medium transition-all'>Blog</NavLink></li>
              <li ><NavLink to="/library" className='relative px-3 py-2.5 hover:text-gray-700 font-medium transition-all'>Bibliothèque</NavLink></li>
              <li ><NavLink to="/events" className='relative px-3 py-2.5 hover:text-gray-700 font-medium transition-all'>Evénements</NavLink></li>
              <li ><NavLink to="/forum" className='relative px-3 py-2.5 hover:text-gray-700 font-medium transition-all'>Forum</NavLink></li>
              <li ><NavLink to="/About" className='relative px-3 py-2.5 hover:text-gray-700 font-medium transition-all'>A propos</NavLink></li> 
            </ul>
            <div>
                <Link to="/login" className='px-4 py-3 bg-blue-300 text-gray-700 font-medium rounded-lg hover:bg-blue-400 transition'>Se connecter</Link>
            </div>
          </div>
          <div className=' lg:hidden'>
            <button className='p-2 rounded-md hover:bg-gray-100'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 24.5H26.5M5.5 16.5H26.5M5.5 8.5H26.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
    </div>
  )
}

export default NavBar