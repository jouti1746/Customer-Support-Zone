import { Facebook, Info, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='text-white flex justify-between w-11/12 mx-auto pt-10'>
            <div className='div-1 w-1/5'>
                <h2 className='py-2'>CS — Ticket System</h2>
                <p className='text-xs py-2 text-gray-400'>Customer is unable to log <br /> in  to  their account. They've <br /> tried  resetting their password <br /> multiple times but still.</p>
            </div>
            <div className='div-2 w-1/5'>
                <h2 className='py-3'>Company</h2>
                <ul className='text-xs text-gray-400 space-y-3'>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Our Mission</a></li>
                    <li><a href="">Contact Saled</a></li>
                </ul>
            </div>
            <div className='div-3 w-1/5'>
                <h2 className='py-3'>Services</h2>
                <ul className='text-xs space-y-3 text-gray-400'>

                <li><a href="">Products & Services</a></li>
                    <li><a href="">Customer Stories</a></li>
                    <li><a href="">Download Apps</a></li>
                     </ul>
            </div>
            <div className='div-4 w-1/5'>
                <h2 className='py-3'>Information</h2>

                <ul className='text-xs space-y-3 text-gray-400'>
                <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                    <li><a href="">Join Us</a></li>

                 </ul>   
            </div>
            <div className='div-5 w-1/5'>
                <h2>Social Links</h2>

                <ul className='text-xs text-gray-400'>
                <li><a href=""><Twitter size={12}/> @CS — Ticket System</a></li>
                    <li><a href=""><Linkedin /> @CS — Ticket System</a></li>
                    <li><a href=""><Facebook /> @CS — Ticket System</a></li>
                    <li><a href=""><Info /> support@cst.com</a></li>

                 </ul>   

            </div>

            
        </div>

        <p className='text-xs text-center text-gray-500 py-5'>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>

       
    );
};

export default Footer;