import React from 'react'

import {Link} from "react-router-dom"

function Pagination() {
  return (
    <div className='flex items-center justify-center gap-2 '>
        <button className='h-11 px-4 border rounded-md hover:bg-gray-100'>
        <Link to="/" className='flex items-center gap-2'>
            <p className='text-sm flex items-center'> <span className='text-base mr-2'>{"<"}</span> Précédant</p>
        </Link>
        </button>
        <div className='flex items-center gap-1.5'>
        <Link to="/blogs" className='px-4 h-11 border flex items-center rounded-md hover:bg-gray-100'>1</Link>
        <Link to="/blogs" className='px-4 h-11 border flex items-center rounded-md hover:bg-gray-700 bg-gray-800 text-gray-100'>2</Link>
        <Link to="/blogs" className='px-4 h-11 border flex items-center rounded-md hover:bg-gray-100'>3</Link>
        <Link to="/blogs" className='px-4 h-11 border flex items-center rounded-md hover:bg-gray-100'>4</Link>
        <Link to="/blogs" className='px-4 h-11 border flex items-center rounded-md hover:bg-gray-100'>5</Link>
        ...
        </div>
        <button className='h-11 px-4 border rounded-md hover:bg-gray-100'>
            <Link to="/" className='flex items-center gap-2'>
            <p className='text-sm flex items-center'> Précédant <span className='text-base ml-2'>{">"}</span></p>
            </Link>
        </button>
    </div>
  )
}

export default Pagination