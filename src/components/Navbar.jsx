import { Plus } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between py-4'>

            <div className='left-div font-bold text-xl'>CS — Ticket System</div>
            <div className='right-div'>
                <ul className='text-gray-500 text-xs flex justify-between space-x-5 items-center'>
                    <li>Home</li>
                    <li>FAQ</li>
                    <li>Changelog</li>
                    <li>Blog</li>
                    <li>Download</li>
                    <li>Contact</li>
                    <button className='flex justify-between items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded'><Plus size={12}/>New Ticket</button>
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;