import React from 'react'
// rafce
import ui from '../assets/icons/ui.png'
import web from '../assets/icons/web.png'
import poster from '../assets/icons/poster.png'
import office from '../assets/icons/office.png'
const Services = () => {
  return (
    <div className='bg-slate-950 w-auto h-auto py-8' id='service'>
        <h1 className='text-center font-bold sm:text-3xl p-4 text-white pt-2'>🌐 Why Choose DevSpartans </h1>
<div className='flex justify-center  flex-wrap '>
<div className='transition h-auto
ease-in-out delay-150
w-56  drop-shadow-2xl rounded-lg m-6  bg-white shadow-lg 
hover:-translate-y-1 hover:scale-110 hover:duration-300
'>

<img src={ui} className='w-28 h-28 p-2' alt=""  />
<h1 className='font-bold px-4'>Ui Development</h1>
<p className='font-blod px-4 pb-5'>Bringing designs to life with appealing aesthetics.
Ensuring a consistent and memorable brand presence.</p>

</div>


<div className='transition 
ease-in-out delay-150
w-56 h-auto drop-shadow-2xl rounded-lg m-6  bg-white shadow-lg 
hover:-translate-y-1 hover:scale-110 hover:duration-300
'>

<img src={web} className='w-28 h-28 p-2' alt=""  />
<h1 className='font-bold px-4'>web app Development</h1>
<p className='font-blod px-4 pb-5'>Understanding your goals and project requirements.
Defining a roadmap for success.</p>

</div>

<div className='transition 
ease-in-out delay-150
w-56 h-auto drop-shadow-2xl rounded-lg m-6  bg-white shadow-lg 
hover:-translate-y-1 hover:scale-110 hover:duration-300
'>

<img src={poster} className='w-28 h-28 p-2' alt=""  />
<h1 className='font-bold px-4'>Poster Development</h1>
<p className='font-blod px-4 pb-5'>Collaborative brainstorming to conceptualize ideas.
Aligning designs with your brand identity.</p>

</div>

<div className='transition 
ease-in-out delay-150
w-56 h-auto drop-shadow-2xl rounded-lg m-6  bg-white shadow-lg 
hover:-translate-y-1 hover:scale-110 hover:duration-300
'>

<img src={office} className='w-28 h-28 p-2' alt=""  />
<h1 className='font-bold px-4'>MS office works</h1>
<p className='font-blod px-4 pb-5'>MS Excel : Unlock the full potential of your data with custom Excel solutions and automation.
</p>

</div>




</div>



    </div>
  )
}

export default Services