import React, { useState } from 'react'
import {Link} from "react-router-dom"
import SearchBar from './inputs/SearchBar'

import Pagination from './Pagination'
import Category from './Category'
import BlogItem from './BlogItem'

const categories = ["Communiqué","Recrutements","Annonces","Cybersécurité", "Développement Web", "Matériel et Logiciels", "Réseaux", "Développement Personnel"]
const blogs = [
  {
    id: 1,
    title: "Design is the Mix of emotions",
    content: "Did you come here for something in particular or just general Riker-bashing? And blowing into. Did you come here for something in particular or just general...",
    img_url: "../assets/images/blog_1.jpg",
    tags: ["Figma","Design"]
  },
  {
    id: 2,
    title: "Premier mois d'apprentissage de react jS",
    content: "Did you come here for something in particular or just general Riker-bashing? And blowing into. Did you come here for something in particular or just general...",
    img_url: "../assets/images/blog_2.jpg",
    tags: ["framework","js","React"]
  },
  {
    id: 3,
    title: "Comment utiliser flexbox en css ?",
    content: "Did you come here for something in particular or just general Riker-bashing? And blowing into. Did you come here for something in particular or just general...",
    img_url: "../assets/images/blog_3.jpg",
    tags: ["HTML","CSS"]
  },
  {
    id: 4,
    title: "Créer un éditeur Markdown avec React JS",
    content: "Did you come here for something in particular or just general Riker-bashing? And blowing into. Did you come here for something in particular or just general...",
    img_url: "../assets/images/blog_4.jpg",
    tags: ["React","Markdown"]
  },
  {
    id: 5,
    title: "Design is the Mix of emotions",
    content: "Did you come here for something in particular or just general Riker-bashing? And blowing into. Did you come here for something in particular or just general...",
    img_url: "../assets/images/blog_5.png",
    tags: ["Figma","Design"]
  },
]


function BlogList() {
    const [search, setSearch] = useState('')
    return (
      <div className='xl:w-8/12 xl:grow'>
        {/* Title */}
        <div className='mb-4'>
            <h2 className='text-2xl font-semibold text-gray-700 mb-8'>Récent Post</h2>
        </div>
        {/* Search Bar */}
        <div className='flex justify-between mb-8'>
          <SearchBar value={search} onSerachChange={setSearch} placeholder="Rechercher ..."/>
          <button className='h-11 px-4 bg-blue-500 text-gray-100 rounded-md'>
            <Link to="/" className='flex items-center gap-2'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H10.9375V16.875C10.9375 17.1236 10.8387 17.3621 10.6629 17.5379C10.4871 17.7137 10.2486 17.8125 10 17.8125C9.75136 17.8125 9.5129 17.7137 9.33709 17.5379C9.16127 17.3621 9.0625 17.1236 9.0625 16.875V10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H9.0625V3.125C9.0625 2.87636 9.16127 2.6379 9.33709 2.46209C9.5129 2.28627 9.75136 2.1875 10 2.1875C10.2486 2.1875 10.4871 2.28627 10.6629 2.46209C10.8387 2.6379 10.9375 2.87636 10.9375 3.125V9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z" fill="white"/>
              </svg>
              <p className='text-sm '>Nouveau article</p>
            </Link>
          </button>
        </div>

        {/* Categories */}
        <Category categories={categories}/>
          
        {/* Blogs */}
        <div className='relative mb-8'>
          {/* items */}
          {
            blogs.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))
          }
        </div>

        {/* pagination */}
        <Pagination/>
      </div>
  )
}

export default BlogList