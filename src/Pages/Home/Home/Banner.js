import React from 'react';
import img1 from '../../../Assets/Banner/img1.jpeg'
import img2 from '../../../Assets/Banner/img2.jpeg'
import img3 from '../../../Assets/Banner/img3.webp'
import { motion } from "framer-motion"


const Banner = () => {
    return (
//         <div className="carousel w-full">
//   <div id="slide1" className="carousel-item relative w-full">
//     <img src={img1} className="w-full h-1/2" alt=''/>
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
//       <a href="#slide4" className="btn btn-circle">❮</a> 
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide2" className="carousel-item relative w-full">
//     <img src={img2} className="w-full h-1/2" alt=''/>
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
//       <a href="#slide1" className="btn btn-circle">❮</a> 
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide3" className="carousel-item relative w-full">
//     <img src={img3} className="w-full h-1/2" alt=''/>
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
//       <a href="#slide2" className="btn btn-circle">❮</a> 
//       <a href="#slide4" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
// </div>
<motion.div initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          duration: 0.5,
          ease: [0, 0.6, 0.2, 0.7]
        },
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
       className="hero min-h-screen " style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCeju03n7p4g8UVAECZhx2zY6ukEnHAhMOBA&usqp=CAU")` }}>
{/* <div className="hero-overlay "></div> */}
<div className="hero-content text-center text-white">
  <div className="max-w-xl">
    {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
    <h1 className="mb-5 text-4xl">Explore,Enjoy,Engage yourself in this dreamy Maldives with a friendly budget</h1>
    <button className="btn btn-warning">Book Now</button>
  </div>
</div>
</motion.div>
);
};

export default Banner;
