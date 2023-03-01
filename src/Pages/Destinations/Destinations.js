import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';


// import {destinations.json} from '../../../public/destination.json'


const Destinations = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://photo-mania-server.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <section className='bg-gray-200'>
            <div className=' mb-4'>
               
                <h2 className="text-5xl font-semibold pt-12 pb-5 text-center">Most Popular Tours</h2>
                <p className=' ml-52 mr-48 text-base pb-6'>This are the tours that our agency are providing.Find Your desired one and explore the world with us.We make sure customer Satisfaction</p>
                
            </div>
            <div className='pl-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Card
                        key={service._id}
                        service={service}
                    ></Card>)
                }
            </div>
            <div className='items-center'>
            <Link to="/servicessall">
                <div className='ml-96 pb-8'>
                <button className="btn btn-outline btn-warning mt-5 ">See All</button>

                </div>
                
                </Link>
            </div>

        </section>
    );
};


export default Destinations;
