import React, { use } from 'react';
import States from './States';
import Ticket from './Ticket';

const TicketContainer = ({ ticketPromise }) => {
    const tickets = use(ticketPromise)
    
    return (
        <div>
           <States></States> 

           <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5'>
             <div className='lg:col-span-7'>
                <h2 className='font-medium text-2xl py-3'>Customer Tickets</h2>
                <div className='space-y-5 grid grid-cols-1 justify-center items-center lg:grid-cols-2'>
                    {
                       tickets.map(ticket=> <Ticket key={ticket.id} ticket={ticket}></Ticket>) 
                    }

                </div>
             </div>
             <div className='lg:col-span-5'>Task Status + Resolved Task</div>
           </section>

        </div>

        
    );
};

export default TicketContainer;