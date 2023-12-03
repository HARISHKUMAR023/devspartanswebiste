import React , {useRef,useEffect} from 'react'
import Navbar from './componets/Navbar'
import BackgroundVideo from './assets/video/v.mp4'
import Teams from './componets/Teams'
import Services from './componets/Services'
import Footer from './componets/Footer'
import bag from '../src/assets/bgimg.png'
const App = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          videoRef.current.load();
          observer.disconnect();
        }
      });
    });
    observer.observe(videoRef.current);
  }, []);

  return (
    <div>
      <main>
      <Navbar />
      <div className='relative'>
        <video ref={videoRef} autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0" poster={bag}>
          <source src={BackgroundVideo} type="video/mp4" /> 
        </video>
      <div className="relative z-20">
       
      </div>
      <h1 className=" font-bold pt-28 px-1 text-center text-white text-2xl sm:text-7xl relative z-20  drop-shadow-2xl sm:pt-52">Welcome to <span>Dev</span><span>Spartans</span>- Forging Digital Excellence!</h1> 
      <h1 className=' text-center sm:py-16  py-16 pb-28 sm:pb-56 '><a href="tel:9943233987" className=" p-2 sm:p-4 rounded  font-semibold bg-green-500 shadow-2xl shadow-green-500/50  text-white text-xl relative z-20  drop-shadow-2xl " >Get Started</a></h1>
      
    </div>
    </main>
    
    <Services/>
    <Teams/>
    <Footer/>
    </div>
  )
}

export default App