import React from 'react';
import card1 from '../../Assets/Banner/card1.jpeg'
import card2 from '../../Assets/Banner/card2.jpeg'
import card3 from '../../Assets/Banner/card3.jpeg'
import card4 from '../../Assets/Banner/card4.jpeg'

const Discounts = () => {
    return (
        <div className='flex'>
            <div className='ml-20'>
            <div className="carousel carousel-center max-w-2xl p-4 space-x-4 bg-neutral rounded-box">
  <div className="carousel-item">
  <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={card1} alt="Shoes" /></figure>
  <div className="card-body">
  <h2 className="card-title">Paris</h2>
    <div className='flex'>
    <p>26 Feb</p>
    <p>4 Days</p>
    </div>
    <div className='flex'>
    <p className='text-2xl'>620$</p>
    <p className='line-through'>640$</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-warning">Book Now</button>
    </div>
  </div>
</div>
  </div> 
  <div className="carousel-item">
  <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={card2} alt="Shoes" /></figure>
  <div className="card-body">
  <h2 className="card-title">Moscow</h2>
    <div className='flex'>
    <p>26 Feb</p>
    <p>4 Days</p>
    </div>
    <div className='flex'>
    <p className='text-2xl'>620$</p>
    <p className='line-through'>640$</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-warning">Book Now</button>
    </div>
  </div>
</div>
  </div> 
  <div className="carousel-item">
  <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={card3} alt="Shoes" /></figure>
  <div className="card-body">
  <h2 className="card-title">Maldeep</h2>
    <div className='flex'>
    <p>26 Feb</p>
    <p>4 Days</p>
    </div>
    <div className='flex'>
    <p className='text-2xl'>620$</p>
    <p className='line-through'>640$</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-warning">Book Now</button>
    </div>
  </div>
</div>
  </div> 
  <div className="carousel-item">
  <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={card4} alt="Shoes" /></figure>
  <div className="card-body">
  <h2 className="card-title">China</h2>
    <div className='flex'>
    <p>26 Feb</p>
    <p>4 Days</p>
    </div>
    <div className='flex'>
    <p className='text-2xl'>620$</p>
    <p className='line-through'>640$</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-warning">Book Now</button>
    </div>
  </div>
</div>
  </div> 
</div>
        </div>
        <div className='pl-5 pt-32'>
            <h1 className="text-5xl font-bold text-info">Special Offers & Discount</h1>
            <p className="py-6">Explore your favourite place  at reasonable price.We give offers ocasionally and discount based on some criteria.Look & find which discount do you want. </p>
           
          </div>
        </div>
    );
};

export default Discounts;