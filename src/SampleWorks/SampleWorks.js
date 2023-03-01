import React from 'react';
import p1 from '../Assets/Countries/egypt.jpeg'
import p2 from '../Assets/Countries/vanice.jpeg'
import p3 from '../Assets/Countries/vietnam.jpeg'
import p4 from '../Assets/Countries/rome.jpeg'
import p5 from '../Assets/Countries/paris.jpeg'
import p6 from '../Assets/Countries/download.jpeg'
import p7 from '../Assets/Countries/cuba.jpeg'
import p8 from '../Assets/Countries/bali.jpeg'
import {motion} from 'framer-motion'

const SampleWorks = () => {
    return (
    <div>
        <h2 className=" text-center text-5xl font-semibold mt-16 ml-12 mr-12 mb-3 pb-1 text-warning ">Choose Your Destinations</h2>
        <p className='text-lg  text-center mb-8 mr-64 ml-64'>Here Are Some Pictures from differents events that were arranged by us </p>
        {/* <div class="flex ...">
  <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src={p1} alt='' className="w-1/2 h-60 pt-2 pb-3 pr-3 pl-3"></motion.img>
  <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src={p2} alt='' class="w-1/2 h-60 p-3 "></motion.img>
</div>
<div class="flex ...">
  <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src={p3} alt='' class="w-2/5 h-60 p-3"></motion.img>
  <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src={p4} alt='' class="w-3/5 h-60 p-3"></motion.img>
</div>
<div class="flex ...">
  <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src={p5} alt='' class="w-1/3 h-60 p-3"></motion.img>
  <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src={p6} alt='' class="w-2/3 h-60 p-3"></motion.img>
</div> */}
<div class="grid grid-cols-4 gap-4">
  
    <img style={{height:200,width:300}} src={p1} alt=''></img>
  <img style={{height:200,width:300}} src={p2} alt=''></img>
  <img style={{height:200,width:300}} src={p3} alt=''></img>
 <img style={{height:200,width:300}} src={p4} alt=''></img>
  <img style={{height:200,width:300}} src={p5} alt=''></img>
  <img style={{height:200,width:300}} src={p6} alt=''></img>
  <img style={{height:200,width:300}} src={p7} alt=''></img>
  <img style={{height:200,width:300}} src={p8} alt=''></img>
</div>
</div>

    );
};

export default SampleWorks;