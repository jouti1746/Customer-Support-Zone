import React from 'react';

const ResolvedTicket = ({ticket}) => {
    return (
        <div className='bg-sky-200 shadow-xl p-4 w-[300px] rounded-lg'>
                <h2  className='text-sm font-bold text-center py-3'>{ticket.title}</h2>
                
            </div>
    );
};

export default ResolvedTicket;