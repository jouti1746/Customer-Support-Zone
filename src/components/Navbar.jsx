import { Plus } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col justify-center items-center gap-5 lg:flex-row lg:justify-between py-4'>

            <div className='left-div font-bold text-xl'>CS — Ticket System</div>
            <div className='right-div'>
                <ul className='text-gray-500 text-xs flex flex-col lg:flex-row lg:justify-between gap-5 items-center'>
                    <li>
                        <a href="" className='hover:font-bold'>Home</a>   
                    </li>
                    <li>
                        <a href="" className='hover:font-bold'>FAQ</a>
                    </li>
                    <li>
                        <a href="" className='hover:font-bold'>Changelog</a>
                    </li>
                    <li>
                        <a href="" className='hover:font-bold'>Blog</a>
                    </li>
                    <li>
                        <a href="" className='hover:font-bold'>Download</a>
                    </li>
                    <li>
                        <a href="" className='hover:font-bold'>Contact</a>
                    </li>
                    <button className='flex justify-between items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded hover:font-bold'><Plus size={12}/>New Ticket</button>
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;