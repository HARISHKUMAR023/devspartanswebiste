import React, { useState } from 'react';
import menu from '../assets/icons/menu.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='fixed  top-0 w-full z-50 bg-black  '>
      <div className='sm:flex sm:justify-between p-6 '>
        <div className='flex justify-between items-center '>
          <h1 className='font-bold text-2xl text-white'>Dev <span className='text-emerald-300'>Spartans</span></h1>
          <div className='sm:hidden'>
            <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none'>
              {/* Add your hamburger icon here */}
             
              <img src={menu} alt="" className='h-10 w-10' />
            </button>
          </div>
        </div>
        <nav className={`sm:flex ${isOpen ? 'block' : 'hidden'}`}>
          <ol className='flex flex-col sm:flex-row sm:items-center'>
            <li className='sm:mx-5 rounded p-1 sm:p-3 font-semibold hover:bg-green-500 text-white'><a href="#">Home</a></li>
            <li className='sm:mx-5 rounded p-1 sm:p-3 font-semibold hover:bg-green-500 text-white'><a href="#team">Our team</a></li>
            <li className='sm:mx-5 rounded p-1 sm:p-3 font-semibold hover:bg-green-500 text-white'><a href="#service">Services</a></li>
            <li className='sm:mx-5 rounded p-1 sm:p-3 font-semibold hover:bg-green-500 text-white'><a href="tel:9943233987">Learn</a></li>
            <li className='sm:mx-5 rounded bg-green-500 shadow-lg shadow-green-500/50 sm:px-8 sm:p-3 font-semibold hover:bg-green-700 hover:text-white p-2'><a href="tel:9943233987">Contact</a></li>
          </ol>
        </nav>
      </div>
    </header>
  )
}

export default Navbar