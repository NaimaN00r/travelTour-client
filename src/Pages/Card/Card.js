import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import styled from "styled-components";

const Card = ({ service }) => {
    const { _id, img, price, title,description } = service;
    
    return (
        <Section className="card card-compact w-96 bg-base-100 shadow-xl rounded-none ">
            <div className='servicee'>
            <PhotoProvider>
      <PhotoView src={img}>
      <img   style={{height:300}} src={img} alt="" />
         </PhotoView>
    </PhotoProvider>
            
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                    {
                        description.length > 250 ?
                            <>{description.slice(0, 100) + '...'} </>
                            :
                            description
                    }
                </p>
                <p className='text-2xl text-orange-600 font-semibold'>Price: {price}</p>
                <div className="card-actions justify-center">
                    <Link to={`/servicedetails/${_id}`}>
                        <button className="btn btn-warning">View Details</button>
                    </Link>
                </div>
            </div>
            </div>
        </Section>
    );
};

export default Card;
const Section=styled.section`
.servicee {
    
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      
    }
  }
`