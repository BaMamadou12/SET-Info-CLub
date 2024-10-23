import React from 'react'
import {Link} from "react-router-dom"
import Tags from "./Tags"

import img_2 from '../assets/images/blog_2.jpg'


const tags = ["Frontend", "Backend", "PHP", "Langage C", "Javascript", "Laravel", 
    "JAVA", "Pointeur en C", "Développement Web", "Réseaux", "Système d’exploitation"]

function Sidebar() {
  return (
    <>
    <div className='hidden relative xl:block xl:w-[340px] xl:shrink-0 '>
        <div className='border rounded-[20px] p-4 mb-6'>
            <div>
                <h1 className='text-xl font-semibold text-gray-700 mb-4'>Populaire</h1>
            </div>

            <div>
                {/* items */}
                <div className='flex gap-4 mb-4'>
                <div className='w-20 h-[60px] relative bg-gray-100'>
                    <img src={img_2} alt="" className='object-cover w-full h-full rounded-md'/>
                </div>
                <div className=''>
                    <div className='flex items-center gap-4 mb-1'>
                    <h3 className='text-[small] font-semibold hover:underline'>
                        <Link to="blog">Premier mois d'apprentissage de react jS</Link>
                    </h3>
                    <div className='w-12 h-10 flex items-center justify-center hover:bg-gray-100 rounded-md'>
                        <Link to="blog">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 10H16M16 10L11.3333 5M16 10L11.3333 15" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </Link>
                    </div>
                    </div>
                    <p className='text-xs font-medium text-gray-400'>Par Mouhamadou Ngom</p>
                </div>
                </div>
                <div className='flex gap-4 mb-4'>
                <div className='w-20 h-[60px] relative bg-gray-100'>
                    <img src={img_2} alt="" className='object-cover w-full h-full rounded-md'/>
                </div>
                <div className=''>
                    <div className='flex items-center gap-4 mb-1'>
                    <h3 className='text-[small] font-semibold hover:underline'>
                        <Link to="/blog">Premier mois d'apprentissage de react jS</Link>
                    </h3>
                    <div className='w-12 h-10 flex items-center justify-center hover:bg-gray-100 rounded-md'>
                        <Link to="/blog">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 10H16M16 10L11.3333 5M16 10L11.3333 15" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </Link>
                    </div>
                    </div>
                    <p className='text-xs font-medium text-gray-400'>Par Mouhamadou Ngom</p>
                </div>
                </div>
                <div className='flex gap-4 mb-4'>
                <div className='w-20 h-[60px] relative bg-gray-100'>
                    <img src={img_2} alt="" className='object-cover w-full h-full rounded-md'/>
                </div>
                <div className=''>
                    <div className='flex items-center gap-4 mb-1'>
                    <h3 className='text-[small] font-semibold hover:underline'>
                        <Link to="blog">Premier mois d'apprentissage de react jS</Link>
                    </h3>
                    <div className='w-12 h-10 flex items-center justify-center hover:bg-gray-100 rounded-md'>
                        <Link to="blog">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 10H16M16 10L11.3333 5M16 10L11.3333 15" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </Link>
                    </div>
                    </div>
                    <p className='text-xs font-medium text-gray-400'>Par Mouhamadou Ngom</p>
                </div>
                </div>
                <div className='flex gap-4 mb-4'>
                <div className='w-20 h-[60px] relative bg-gray-100'>
                    <img src={img_2} alt="" className='object-cover w-full h-full rounded-md'/>
                </div>
                <div className=''>
                    <div className='flex items-center gap-4 mb-1'>
                    <h3 className='text-[small] font-semibold hover:underline cursor-pointer'>
                        <Link to="blog">Premier mois d'apprentissage de react jS</Link>
                    </h3>
                    <div className='w-12 h-10 flex items-center justify-center hover:bg-gray-100 rounded-md'>
                        <Link to="blog">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 10H16M16 10L11.3333 5M16 10L11.3333 15" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </Link>
                    </div>
                    </div>
                    <p className='text-xs font-medium text-gray-400'>Par Mouhamadou Ngom</p>
                </div>
                </div>
                <div className='flex gap-4 mb-4'>
                <div className='w-20 h-[60px] relative bg-gray-100'>
                    <img src={img_2} alt="" className='object-cover w-full h-full rounded-md'/>
                </div>
                <div className=''>
                    <div className='flex items-center gap-4 mb-1'>
                    <h3 className='text-[small] font-semibold hover:underline'>
                        <Link to="blog">Premier mois d'apprentissage de react jS</Link>
                    </h3>
                    <div className='w-12 h-10 flex items-center justify-center hover:bg-gray-100 rounded-md'>
                        <Link to="blog">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 10H16M16 10L11.3333 5M16 10L11.3333 15" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </Link>
                    </div>
                    </div>
                    <p className='text-xs font-medium text-gray-400'>Par Mouhamadou Ngom</p>
                </div>
                </div>
            </div>
        </div>
        {/* _------------------__ */}
        <div className='border rounded-[20px] p-4 mb-6'>
            <div>
                <h1 className='text-xl font-semibold text-gray-700 mb-4'>Tags</h1>
            </div>
            <Tags tags={tags}/>
        </div>
    </div>
    </>
  )
}

export default Sidebar