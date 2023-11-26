import React from 'react'
import security from '../assets/security.png'
import harish from '../assets/harish.jpg'
import sivadharshan from '../assets/sivadharshan.jpg'
import ganesh from '../assets/ganesh.jpg'
import kumar from '../assets/kumar.jpg'
import barathi from '../assets/barathi.jpg'
const Teams = () => {
  return (
    <div className='sm:p-6  sm:text-center p-3 sm:flex  bg-slate-900 text-white normal-case'id='team'>
    <div className='sm:w-1/2'>
<h1 className='font-semibold text-center sm:text-left sm:text-2xl text-green-500 p-3 sm:p-4'> About us</h1>
<p className=' sm:p-4 text-justify  normal-case sm:pt-10 sm:text-xl p-3 '>Welcome to <span className='font-semibold'>Dev</span><span className='font-semibold text-green-500 '>Spartans</span> , where digital innovation meets unwavering dedication. We are a dynamic team of tech enthusiasts, designers, and data experts on a mission to redefine the digital landscape. At DevSpartans, we don't just build solutions; we craft experiences that leave a lasting impact.
<br />
<p className='sm:py-4 normal-case'><span className='text-green-500 font-semibold sm:text-2xl '>Our Mission 🚀 :</span><br /> 

At the core of DevSpartans is a simple yet powerful mission - to empower businesses and individuals through cutting-edge technology, captivating design, and efficient data management. We believe in the transformative power of digital solutions and strive to be your trusted partner in this ever-evolving digital era.</p>
</p>
    </div>
    <div className='text-white font-semibold sm:w-1/2' >
      <h2 className='font-semibold sm:text-2xl text-center text-green-500'>Our Team</h2>
      <div className='grid grid-cols-2 gap-4 pt-6  justify-items-center animate-shakeY '>
      <img src={harish} alt="" className='rounded-full border-4 border-white w-auto h-32  ' />
      <img src={sivadharshan} alt="" className='rounded-full border-4 border-white w-auto h-32' />
      <img src={kumar} alt="" className='rounded-full border-4 border-white w-auto h-32 ' />
      <img src={barathi} alt="" className='rounded-full border-4 border-white w-auto h-32 ' />
      <img src={ganesh} alt="" className='rounded-full border-4 border-white w-auto h-32 ' />
      </div>
     
    </div>
    </div>
  )
}

export default Teams


{/* <h1 className='font-bold text-3xl mb-4'>Our Team</h1>
<p className='mb-4 font-semibold sm:text-2xl normal-case text-sm px-4 text-justify'>Meet the DevSpartans, a passionate and dedicated team of professionals committed to bringing your digital ideas to life. With a diverse set of skills and a shared enthusiasm for innovation, we work collaboratively to deliver exceptional results.</p>
<div className='flex flex-wrap justify-center items-center'>
  <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-white text-black rounded-lg'>
    <img src={harish} alt="Team member" className='mx-auto rounded-full h-24 w-24 md:h-32 md:w-32' />
    <h2 className='font-bold mt-4 text-center normal-case'>Harishkumar N - <span className='text-orange-500'>Software</span> <span className='text-pink-600'>Developer</span></h2>
    <p className=' text-left normal-case'>Spearheading our development efforts with a wealth of experience in <span className='text-purple-700 font-bold capitalize'> mern , version control , api , programming, django , React native </span>. Passionate about leveraging technology to solve complex challenges.</p>
  </div>




</div>
<p className='mt-4'>At DevSpartans, we believe in the power of teamwork, and each member of our team brings a unique set of skills and perspectives to the table. Together, we're dedicated to exceeding your expectations and propelling your digital endeavors to new heights.</p> */}
