import React from 'react';
import Footer from '../../Shared/Footer/Footer/Footer';
import Header from '../../Shared/Header/Header/Header';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;