import React from 'react'
import {NavLink} from "react-router-dom"

function Category({categories}) {
  return (
    <div className='flex relative items-center gap-2 overflow-x-scroll no-scrollbar *:shrink-0 mb-8 text-sm'>
        <NavLink to="/" className='px-4 py-2 bg-blue-300 rounded-md font-semibold text-gray-700 hover:bg-blue-400'>Tout</NavLink>
        {   
            categories.map((cat, i) => (
                <NavLink to="/" key={i} className='px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md font-medium '>{cat}</NavLink>
            ))
        }
    </div>
)
}

export default Category