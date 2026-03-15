import React from 'react';

const TicketCards = ({ticket, handleSolvedTicket}) => {
    return (
        <div>
            <div className='bg-white shadow-xl p-4 w-[300px] rounded-lg'>
                <h2  className='text-sm font-bold text-center py-3'>{ticket.title}</h2>
                <button onClick={()=>handleSolvedTicket(ticket)} className='bg-green-600 px-20 py-2 rounded-sm ml-8 text-white text-xs hover:font-bold'>Complete</button>
            </div>
        </div>
    );
};

export default TicketCards;