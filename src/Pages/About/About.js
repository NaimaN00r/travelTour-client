import React from 'react';
import image from '../../Assets/Banner/about.webp'
import {motion} from 'framer-motion'

const About = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse ml-20 mr-20">
          <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{height:500,width:600}} src={image} alt='' className='pl-5' />
          <div className='pr-5'>
            <h1 className="text-5xl font-bold text-success">What Do You Know <p>About Us</p></h1>
            <p className="py-6"> Travel & Tour  is best for tours in any country or for spending your vacation in beautiful places like Thailand, Malaysia, Singapore, China, etc. countries. We have a lot of tour packages for travelers. Customer Satisfaction is our main priority.We will do anything to give the best of best to any customer.</p>
           
          </div>
        </div>
      </div>
    );
};

export default About;
