import React from 'react';
import img1 from '../../../assets/images/about_us/person.jpg';
import img2 from '../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div>
            <div className="hero my-20">
                <div className="hero-content flex-col lg:flex-row p-0">
                    <div className='relative w-1/2'>
                        <img src={img1} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                        <img src={img2} alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-xl font-bold text-orange-600">About Us</h1>
                        <p className="py-6 text-5xl font-bold text-b">We are qualified <br /> & of experience <br /> in this field</p>

                        <p className="py-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className="py-4">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn btn-primary">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;