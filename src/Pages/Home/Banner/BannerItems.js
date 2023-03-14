import React from 'react';
import { Link } from 'react-router-dom';

const BannerItems = ({banner}) => {
    const {image,next,prev,id} = banner;
    return (
        <div id ={`slide${id}`} className="carousel-item relative w-full">
        <div className=' img-gradient'>
             <img src={image} alt="" className="w-full rounded-lg " />
        </div>

        <div className='absolute left-20 top-1/4'>
            <h1 className='text-6xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
        </div>
        
        <div className='absolute left-20 top-2/4'>
            <p className=' text-white'>There are many variations of passages of  available,<br />
             but the majority have suffered alteration in some form</p>
        </div>

        <div className='absolute left-20 top-3/4'>
            <Link className="btn outline outline-orange-600 bg-transparent  hover:bg-orange-600 mr-10 ">Discover More</Link>
            <Link className="btn outline outline-orange-600 bg-transparent  hover:bg-orange-600">Latest Project</Link>
        </div>

        <div className="absolute flex  transform -translate-y-1/2  right-5 bottom-10 mx-5 ">
            <a href={`#slide${prev}`}className="btn btn-circle mr-6 t hover:bg-orange-600 border-none">❮</a>
            <a href={`#slide${next}`} className="btn btn-circle hover:bg-orange-600 border-none">❯</a>
        </div>
    </div>
    );
};

export default BannerItems;