import React from 'react'
import {Link} from "react-router-dom"
import user from "../assets/user.jpg"

import img_1 from '../assets/images/blog_1.jpg'
import img_2 from '../assets/images/blog_2.jpg'
import img_3 from '../assets/images/blog_3.jpg'
import img_4 from '../assets/images/blog_4.jpg'
import img_5 from '../assets/images/blog_5.jpg'

const images = ["",img_1,img_2,img_3,img_4,img_5]

function BlogItem({blog}) {
  return (
    <div className='relative md:flex w-full rounded-[20px] border border-gray-200 p-4 mb-4'>
      <div className='relative h-56 md:h-60 mb-4 md:mb-0 md:mr-4'>
        <Link to="/blogs">
          <img src={images[blog.id]} alt="" className='w-full md:w-80 h-full rounded-md object-cover' />
        </Link>
      </div>
      <div className='py-3 my-auto w-full md:w-10/12'>
        <div className='text-xs font-medium mb-8'>
          {
            blog.tags.map((tag, i) => (
              <span key={i} className='px-3 py-1.5 bg-gray-100 ml-1.5 rounded-xl'>{tag}</span>
            ))
          }
        </div>
        <Link to="/blogs">
          <h2 className='text-2xl font-semibold mb-6 text-gray-600 hover:underline'>
            {blog.title}
          </h2>
        </Link>
        <p className='mb-6'>{blog.content.length <= 160 ? blog.content : blog.content.substring(0, 160) + " ..."}</p>
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center gap-3 text-sm font-medium'>
            <div className='flex items-center gap-2'>
              <div className='size-8'>
                <img src={user} alt="" className='w-full h-full rounded-full' />
              </div>
              <p>Lamine Fall</p>  
            </div> | 
            <div>
            <div className='flex items-center gap-2'>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.11122 0.777557C3.63869 0.777557 0 4.41625 0 8.88878C0 13.3613 3.63869 17 8.11122 17C12.5837 17 16.2224 13.3613 16.2224 8.88878C16.2224 4.41625 12.5837 0.777557 8.11122 0.777557ZM8.11122 15.3778C4.53336 15.3778 1.62224 12.4666 1.62224 8.88878C1.62224 5.31092 4.53336 2.3998 8.11122 2.3998C11.6891 2.3998 14.6002 5.31092 14.6002 8.88878C14.6002 12.4666 11.6891 15.3778 8.11122 15.3778Z" fill="#6B7280"/>
                <path d="M8.92278 4.83316H7.30054V9.22458L9.97156 11.8956L11.1185 10.7487L8.92278 8.55297V4.83316Z" fill="#6B7280"/>
              </svg>
              <span>3 Min</span>
            </div>
            </div>
          </div>
          <div className='text-sm font-medium flex items-center gap-3'>
            <div className='flex gap-2 items-center'> 
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_163_812)"> <path d="M19.7297 4.81147C16.964 3.16655 14.5502 3.82943 13.1002 4.88533C12.5055 5.31828 12.2083 5.53475 12.0334 5.53475C11.8585 5.53475 11.5612 5.31828 10.9666 4.88533C9.51657 3.82943 7.10274 3.16655 4.33712 4.81147C0.707534 6.97026 -0.113753 14.0922 8.25827 20.1007C9.85288 21.2451 10.6502 21.8173 12.0334 21.8173C13.4166 21.8173 14.2139 21.2451 15.8085 20.1007C24.1805 14.0922 23.3592 6.97026 19.7297 4.81147Z" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round"/> </g>
                <defs> <clipPath id="clip0_163_812"><rect width="24" height="24" fill="white" transform="translate(0.0334473 0.817322)"/> </clipPath> </defs>
              </svg>
              <p>1,028</p>
            </div>
            <div className='flex gap-2 items-center'>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.78289 19.8173C5.48278 19.6894 4.50883 19.2989 3.85565 18.6457C2.68408 17.4742 2.68408 15.5885 2.68408 11.8173V11.3173C2.68408 7.54608 2.68408 5.66047 3.85565 4.48889C5.02723 3.31732 6.91284 3.31732 10.6841 3.31732H14.6841C18.4553 3.31732 20.341 3.31732 21.5125 4.48889C22.6841 5.66047 22.6841 7.54608 22.6841 11.3173V11.8173C22.6841 15.5885 22.6841 17.4742 21.5125 18.6457C20.341 19.8173 18.4553 19.8173 14.6841 19.8173C14.1236 19.8298 13.6772 19.8724 13.2387 19.9723C12.0403 20.2482 10.9306 20.8614 9.83395 21.3962C8.27137 22.1581 7.49008 22.5391 6.99977 22.1824C6.06177 21.4838 6.97862 19.3192 7.18408 18.3173" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <p>28</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogItem