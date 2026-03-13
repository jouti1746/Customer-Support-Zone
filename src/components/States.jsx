import React from 'react';

const States = ({ticket, ticketTotal}) => {
    return (
        <div className='w-11/12 mx-auto py-8 grid grid-cols-1 lg:grid-cols-2  gap-5'>
           <div className= 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center p-12 rounded-2xl'>
              <h2 className='font-bold text-white text-xl'>In-Progress</h2>
              <p className='font-bold text-4xl text-white'>{ticketTotal}</p>
           </div>
           <div className= 'bg-gradient-to-r from-[#02a53b] to-[#0b5e06] text-center p-12 rounded-2xl'>
              <h2 className='font-bold text-white text-xl '>Resolved</h2>
              <p className='font-bold text-2xl text-white text-4xl'>{ticket.status}</p>
           </div>
        </div>
    );
};

export default States;