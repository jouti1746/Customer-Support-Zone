import React, { use, useState } from 'react';
import States from './States';
import Ticket from './Ticket';
import TicketCards from './TicketCards';

const TicketContainer = ({ ticketPromise }) => {
    const tickets = use(ticketPromise)

    const [ticketItems, setTicketItems] = useState ([]);

    const handleTicket =(ticket)=>{

        console.log(ticket);

      const isExist = ticketItems.find((item)=> item.id == ticket.id);
      if(isExist){
        alert("Already In-Progress!!");
        return;
      }
      

        const newticketItems = [...ticketItems, ticket];
        setTicketItems(newticketItems);
    }
    return (
        <div>
           <States ticketTotal={ticketItems.length} ticket={tickets}></States> 

           <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5'>
             <div className='lg:col-span-7'>
                <h2 className='font-medium text-2xl py-3'>Customer Tickets</h2>
                <div className='space-y-5 grid grid-cols-1 justify-center items-center lg:grid-cols-2'>
                    {
                       tickets.map(ticket=> <Ticket handleTicket={handleTicket} key={ticket.id} ticket={ticket}></Ticket>) 
                    }

                </div>
             </div>
             <div className='lg:col-span-5 space-y-5 '>
                <h2 className='font-medium text-2xl py-3'>Task Status</h2>
                <div className='shadow p-10 space-y-5 rounded-lg'>
                    {
                        ticketItems.map(ticket=> <TicketCards key={ticket.id} ticket={ticket}></TicketCards>)
                    }

                </div>
                <h2 className='font-medium text-2xl py-3'>Resolved Task</h2>
                <div className='shadow p-10 rounded-lg'></div>
             </div>
           </section>

        </div>

        
    );
};

export default TicketContainer;