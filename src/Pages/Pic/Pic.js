import React from 'react';

const Pic = () => {
    return (
        <div className="hero min-h-screen h-72" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSluyHZIM971OM4TUm8Rsu0tYZ2EKx0xIIRTJKlVm0cpTjp8-oJBUa_kLjpYg7MCdV41Js&usqp=CAU")`}}>
            <div >
            <div className='flex flex-row gap-40'>
            <div className='flex flex-col'>
                <p className='text-4xl text-white pl-14' >
                    2344

                </p>
                <p className='text-4xl text-white'>Destinations</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-4xl text-white pl-14' >
                    175

                </p>
                <p className='text-4xl text-white'>Cruises</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-4xl text-white pl-14' >
                    1447

                </p>
                <p className='text-4xl text-white'>Tour Packages</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-4xl text-white pl-14'>
                    144

                </p>
                <p className='text-4xl text-white'>Customers</p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Pic;