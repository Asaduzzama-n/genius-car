import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo.svg';

const Footer = () => {
    return (
        <div className='text-white pt-20'>
            <footer className="footer p-10 h-auto lg:h-96 bg-slate-900 text-base-content text-white p-24">
                <div>
                    <img src={logo} alt="" />
                    <p>Edwin Diaz is a software and web <br /> technologies engineer, a life coach  <br /> trainer who is also a serial .</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover" to={'#'}>Branding</Link>
                    <Link className="link link-hover" to={'#'}>Design</Link>
                    <Link className="link link-hover" to={'#'}>Marketing</Link>
                    <Link className="link link-hover" to={'#'}>Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover" to={'#'}>About us</Link>
                    <Link className="link link-hover" to={'#'}>Contact</Link>
                    <Link className="link link-hover" to={'#'}>Jobs</Link>
                    <Link className="link link-hover" to={'#'}>Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover" to={'#'}>Terms of use</Link>
                    <Link className="link link-hover" to={'#'}>Privacy policy</Link>
                    <Link className="link link-hover" to={'#'}>Cookie policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;