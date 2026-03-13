import React from 'react';

const Ticket = ({ticket}) => {
    return (
        <div className='bg-white shadow-xl p-4 w-[390px]'>
            <div className='flex justify-between'>
                <h2 className='text-sm font-bold'>{ticket.title}</h2>
                <button className='text-xs'>{ticket.status}</button>
            </div>
            <p className='text-gray-500 text-xs py-2'>{ticket.description}</p>
            <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <p className='text-gray-500 text-xs'>#{ticket.id}</p>
                    <p className='text-xs'>{ticket.priority}</p>
                </div>
                <div className='flex gap-3'>
                    <p className='text-gray-500 text-xs'>{ticket.customer}</p>
                    <p className='text-gray-500 text-xs'>{ticket.createdAt}</p>
                </div>
            </div>
        </div>
    );
};

export default Ticket;