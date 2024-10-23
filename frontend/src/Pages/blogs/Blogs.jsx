import {Outlet} from "react-router-dom"

import Hero from '../../components/Hero'
import Sidebar from "../../components/Sidebar"


function Blogs() {
  return (
    <div className='container mx-auto relative min-h-screen mb-14'>
      <Hero />
      {/* MAIN */}
      <div className='relative min-h-screen w-full xl:flex gap-10'>
        {/* CONTENT */}
        <Outlet />

        {/* SIDEBAR */}
        <Sidebar />
      </div>
    </div>
  )
}

export default Blogs