import React from 'react'
// rafce
import ui from '../assets/icons/ui.png'
import web from '../assets/icons/web.png'
import poster from '../assets/icons/poster.png'
import office from '../assets/icons/office.png'
const Services = () => {
  return (
 <div id='service' className='sm:grid sm:grid-cols-3 sm:gap-3 sm:p-24 pt-6 p-4'>
  <div className='flex p-2'>
    <div >
      <a className='pr-2 text-2xl' href="#"><i class="fa-sharp fa-solid fa-trophy text-green-500"></i></a>
    </div>
    <div>
      <h1 className='font-bold font-sans'>INNOVATIVE PRODUCTS</h1>
      <p className='font-normal pt-0.5 text-sm text-gray-500 font-sans'>Developing future tech products that innovates the future with quality and having user-friendly products is our <span className='text-green-500'>CDN's </span> Mission.</p>
    </div>
  </div>

  <div className='flex p-2'>
    <div >
      <a className='pr-2 text-2xl' href="#"><i class=" fa-solid fa-code text-green-500"></i></a>
    </div>
    <div>
      <h1 className='font-bold font-sans'>DESIGN AND DEVELOPMENT</h1>
      <p className='font-normal pt-0.5 text-sm text-gray-500 font-sans'>We love designing creative stuffs and we have expertise in developing Light weight <span className='text-green-500'>Web.</span> </p>
    </div>
  </div>

  <div className='flex p-2' >
    <div >
      <a className='pr-2 text-2xl' href="#"><i class=" fa-solid fa-mobile text-green-500"></i></a>
    </div>
    <div>
      <h1 className='font-bold font-sans'>MOBILE APP DEVELOPMENT</h1>
      <p className='font-normal pt-0.5 text-sm text-gray-500 font-sans'><span className='text-green-500'>Mobile App</span>  which is the glue for all other digital industries to use when approaching convergence.</p>
    </div>
  </div>

  <div className='flex p-2 sm:pt-16'>
    <div >
      <a className='pr-2 text-2xl' href="#"><i class="fa-solid fa-gear text-green-500"></i></a>
    </div>
    <div>
      <h1 className='font-bold font-sans'>INTERNET OF THINGS (IOT)</h1>
      <p className='font-normal pt-0.5 text-sm text-gray-500 font-sans'>Devspartans's primary goal is to combine the hardware with the software. Devspartans products is integrated with <span className='text-green-500'>Internet of Things </span> (IoT).</p>
    </div>
  </div>

  <div className='flex p-2 sm:pt-16'>
    <div >
      <a className='pr-2 text-2xl' href="#"><i class="fa-file-word fa-solid  text-green-500"></i></a>
    </div>
    <div>
      <h1 className='font-bold font-sans'>MS OFFICE</h1>
      <p className='font-normal pt-0.5 text-sm text-gray-500 font-sans'><span className='text-green-500'>Ms Excel  </span> Unlock the full potential of your data with custom Excel solutions and automation.</p>
    </div>
  </div>
  <div className='flex p-2 sm:pt-16'>
    <div >
      <a className='pr-2 text-2xl' href="#"><i class=" fa-solid fa-pen-nib text-green-500"></i></a>
    </div>
    <div>
      <h1 className='font-bold font-sans'>POSTER DESIGN</h1>
      <p className='font-normal pt-0.5 text-sm text-gray-500 font-sans'>Collaborative brainstorming to conceptualize ideas.
Aligning <span className='text-green-500'>designs</span>  with your brand identity.</p>
    </div>
  </div>
 </div>
  )
}

export default Services


// <div className='bg-slate-950 w-auto h-auto py-8' id='service'>
// <h1 className='text-center font-bold sm:text-3xl p-4 text-white pt-2'>🌐 Why Choose DevSpartans </h1>
// <div className='flex justify-center  flex-wrap '>
// <div className='transition h-auto
// ease-in-out delay-150
// w-56  drop-shadow-2xl rounded-lg m-6  bg-white shadow-lg 
// hover:-translate-y-1 hover:scale-110 hover:duration-300
// '>

// <img src={ui} className='w-28 h-28 p-2' alt=""  />
// <h1 className='font-bold px-4'>Ui Development</h1>
// <p className='font-blod px-4 pb-5'>Bringing designs to life with appealing aesthetics.
// Ensuring a consistent and memorable brand presence.</p>

// </div>


// <div className='transition 
// ease-in-out delay-150
// w-56 h-auto drop-shadow-2xl rounded-lg m-6  bg-white shadow-lg 
// hover:-translate-y-1 hover:scale-110 hover:duration-300
// '>

// <img src={web} className='w-28 h-28 p-2' alt=""  />
// <h1 className='font-bold px-4'>web app Development</h1>
// <p className='font-blod px-4 pb-5'>Understanding your goals and project requirements.
// Defining a roadmap for success.</p>

// </div>

// <div className='transition 
// ease-in-out delay-150
// w-56 h-auto drop-shadow-2xl rounded-lg m-6  bg-white shadow-lg 
// hover:-translate-y-1 hover:scale-110 hover:duration-300
// '>

// <img src={poster} className='w-28 h-28 p-2' alt=""  />
// <h1 className='font-bold px-4'>Poster Development</h1>
// <p className='font-blod px-4 pb-5'>Collaborative brainstorming to conceptualize ideas.
// Aligning designs with your brand identity.</p>

// </div>

// <div className='transition 
// ease-in-out delay-150
// w-56 h-auto drop-shadow-2xl rounded-lg m-6  bg-white shadow-lg 
// hover:-translate-y-1 hover:scale-110 hover:duration-300
// '>

// <img src={office} className='w-28 h-28 p-2' alt=""  />
// <h1 className='font-bold px-4'>MS office works</h1>
// <p className='font-blod px-4 pb-5'>MS Excel : Unlock the full potential of your data with custom Excel solutions and automation.
// </p>

// </div>

// </div>
// </div>