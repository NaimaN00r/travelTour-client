import React, {useEffect, useState } from 'react';
import Card from '../Card/Card';
// import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Servicesall = () => {
    const [services, setServices] = useState([]);
    // const {loading} = useContext(AuthContext);
    
    useEffect( () =>{
        fetch('http://localhost:4500/allservices')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

    // if(loading) {
    //     // <Spinner animation="border" variant="success" />
    //     return <button type="button" class="bg-indigo-500 ..." disabled>
    //     <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
    //     </svg>
    //     Processing...
    //   </button>
    // }


    return (
       <div>
            <div className='text-center mb-4'>
               
                <h2 className="text-5xl font-semibold">Service Area</h2>
                
            </div>
            <div className='pl-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Card
                        key={service._id}
                        service={service}
                    ></Card>)
                }
            </div>
            </div>
    );
};

export default Servicesall;