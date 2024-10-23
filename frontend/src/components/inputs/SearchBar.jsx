import React from 'react'
import filter from "./../../assets/filter.svg"
import search from "./../../assets/search.svg"

function SearchBar({value, onSerachChange, placeholder}) {
  return (
    <div className='bg-gray-100 flex text-sm overflow-hidden rounded-md border border-gray-200 has-[:focus]:border-gray-400 transition-all'>
      {/* Search */}
      <div className='w-12  flex items-center justify-center'>
        <img src={search} alt="" />
      </div>
      <input 
        className='w-56 py-2 bg-transparent outline-none border-none flex items-center'
        type = 'text'
        value = {value}
        onChange = {(e) => onSerachChange(e.target.value)}
        placeholder = {placeholder}
      />

      {/* Filter */}
      <div className='w-12 flex items-center justify-center cursor-pointer'>
        <img src={filter} alt="" />
      </div>
    </div>
  )
}

export default SearchBar