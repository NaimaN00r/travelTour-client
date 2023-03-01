import React, { useEffect } from 'react';
import Client from '../../../Client/Client';
import Hero from '../../../Hero/Hero';
import PopularPackage from '../../../PopularPackage/PopularPackage';
import SampleWorks from '../../../SampleWorks/SampleWorks';
import About from '../../About/About';
import Destinations from '../../Destinations/Destinations';
import Discounts from '../../Discounts/Discounts';
import Banner from './Banner';
import scrollreveal from "scrollreveal";
import ScrollBar from '../../../ScrollBar/ScrollBar';
import Pic from '../../Pic/Pic';


const Home = () => {
    useEffect(() => {
        const sr = scrollreveal({
          origin: "top",
          distance: "80px",
          duration: 2000,
          reset: true,
        });
        sr.reveal(
          `
            nav,
            #hero,
            #services,
            #recommend,
            #testimonials,
            footer
            `,
          {
            opacity: 0,
            interval: 300,
          }
        );
      }, []);
    return (
        <div>
            {/* <Banner></Banner> */}
            <ScrollBar/>
            <Hero></Hero>
            <Destinations></Destinations>
            <Pic></Pic>
            <About></About>
            
            <PopularPackage></PopularPackage>
            <Discounts></Discounts>
            <SampleWorks></SampleWorks>
            <Client></Client>
        </div>
    );
};

export default Home;