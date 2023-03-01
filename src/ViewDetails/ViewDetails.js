import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

import Review from '../Review/Review';

// import Review from '../Review/Review';

const ViewDetails = () => {
const {user,loading}=useContext(AuthContext);
const [refresh, setRefresh] = useState(false);




const {title,facility,_id} = useLoaderData();
    // const id=_id;
    const {img,overview,places}=facility[0];
    // const {name2,details2}=facility[1];
    // const {Workshop,details3}=details2[0];
    // const {Workshop2,details4}=details2[1];


const handlePlaceOrder = event => {
    event.preventDefault();
    console.log(user)
    const time=new Date().getTime();
    const form = event.target;
    const review = form.review.value;

    const reviews = {
        service: _id,
        serviceName:title,
        email:user.email,
        name:user.displayName,
        img:user.photoURL,
        time,
        review
    }

    fetch('https://photo-mania-server.vercel.app/reviews', {
        method: 'POST',
        // headers: {
        //     'content-type': 'application/json',
        //     authorization: `Bearer ${localStorage.getItem('genius-token')}`
        // },
        body: JSON.stringify(reviews)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                setRefresh(!refresh);
                alert('Review added successfully')
                form.reset();
                
            }
        })
        .catch(er => console.error(er));


}


const menuItems=<>
    {
        user?.email ?
            <>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl m-5"> Add review to : {title}</h2>
                <textarea name="review" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
                <input className='btn' type="submit" value="Add" />
            </form>
                
                
            </>
            :
            <p>Please {<Link to='/login'>Login</Link>} to add a review</p>
    }
</>

const [feedbacks, setfeedback] = useState([]);
    
    useEffect( () =>{
        fetch(`https://photo-mania-server.vercel.app/reviews?service=${_id}`)
        .then(res =>res.json())
        .then(data => setfeedback(data))
    },
     [refresh]);

    

    return (
        <div className='m-8'>
            <div>
            <h2 className='text-center p-5 font-black'>{title}</h2>
            <div className='border-2 border-black bg-red-50 pt-10 pb-10 pr-5 pl-5 mb-5 flex flex-col items-center '>
                {/* <h3 className='text-center font-medium-500'>{name}</h3> */}
                 <img style={{height:400}} src={img} alt=""></img>
                 <p className='text-black'>{overview}</p>
            </div>
            <p className='text-center text-white text-2xl'>Top Places</p>
            <p className='text-center text-white mb-8'>You Will Visit These Places in {title} Toure</p>

            <div className='grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ml-32'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={places[0].img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {places[0].name}

                            </h2>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={places[1].img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {places[1].name}

                            </h2>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={places[2].img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {places[2].name}

                            </h2>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={places[3].img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {places[3].name}

                            </h2>

                        </div>
                    </div>
            </div>
            
        </div>
       <div>
       <h2 className="text-5xl font-semibold p-5 text-center">Review Section</h2>
       <div className='grid grid-cols-4 gap-4 mb-5'>
       {
        
        feedbacks.map(feedback=><Review key={feedback._id} feedback={feedback}></Review>)
      }
       </div>
      

     
        
       </div>
       {menuItems}
        </div>

    );
};

export default ViewDetails;