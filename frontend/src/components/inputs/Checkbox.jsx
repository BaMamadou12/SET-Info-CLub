import React from 'react'

function Checkbox({label}) {
    return (
        <div className='flex items-center'>
          <input type="checkbox" id='checkbox' className='size-4' />
          <label htmlFor='checkbox' className='ml-2 font-medium text-sm'>{label}</label>
      </div>
      )
}

export default Checkbox