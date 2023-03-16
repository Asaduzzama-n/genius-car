import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {title,img,price,_id} = service;
    return (
        <div>
            <div className="card w-96 bg-base-100">
                <div className='h-60'>
                <figure><img src={img} alt="Shoes" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-3xl text-orange-600">{title}</h2>
                    
                    <div className="card-actions justify-end py-5">
                    <p className='text-orange-600 text-xl font-semibold'>Price: ${price}</p>
                        <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Select Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;