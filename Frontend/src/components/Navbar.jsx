import React from 'react'
import { LayoutTemplate } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProfileInfoCard } from '../components/Cards.jsx'

const Navbar = () => {
  return (
    <div className='h-25 bg-white/70 backdrop-blur-2xl border-b border-blue-100/50 py-2.5 px-4 md:px-0 sticky top-0 z-50'>
      <div className='max-w-6xl mx-auto flex items-center justify-between gap-5 h-full'>
        <Link to='/' className='flex items-center gap-3'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-sky-300'>
              <LayoutTemplate className='w-5 h-5 text-white' />
            </div>
            <span className='text-xl sm:text-2xl font-black bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent'>
              ResumePro
            </span>
          </div>
        </Link>
       <ProfileInfoCard />

      </div>
    </div>
  )
}

export default Navbar
