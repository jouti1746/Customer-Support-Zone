import React, { use, useState } from 'react';
import States from './States';
import Ticket from './Ticket';
import TicketCards from './TicketCards';
import ResolvedTicket from './ResolvedTicket';

const TicketContainer = ({ ticketPromise }) => {
    const tickets = use(ticketPromise)
    
    const [reMoved, setReMoved] = useState (tickets);
    const [ticketItems, setTicketItems] = useState ([]);
    const [solvedTicket, setSolvedTicket] = useState ([]);


    const handleTicket =(ticket)=>{

        

      const isExist = ticketItems.find((item)=> item.id == ticket.id);
      if(isExist){
        alert("Already In-Progress!!");
        return;
      }
      

        const newticketItems = [...ticketItems, ticket];
        setTicketItems(newticketItems);
    }

    const handleSolvedTicket =(ticket)=>{

        const newSolvedTicket =[...solvedTicket, ticket];
        setSolvedTicket(newSolvedTicket);

        const remaining =ticketItems.filter(item => item.id !==ticket.id)
        setTicketItems(remaining);

        const remainingTickets = tickets.filter(item => item.id !==ticket.id);
        setReMoved(remainingTickets);
    }
    return (
        <div>
           <States ticketTotal={ticketItems.length} ticket={tickets} resolvedTotal={solvedTicket.length}></States> 

           <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5'>
             <div className='lg:col-span-7'>
                <h2 className='font-medium text-2xl py-3'>Customer Tickets</h2>
                <div className='space-y-5 grid grid-cols-1 justify-center items-center lg:grid-cols-2'>
                    {
                       tickets.map(ticket=> <Ticket  handleTicket={handleTicket} key={ticket.id} ticket={ticket}></Ticket>) 
                    }

                </div>
             </div>
             <div className='lg:col-span-5 space-y-5 '>
                <h2 className='font-medium text-2xl py-3'>Task Status</h2>
                <div className='shadow p-10 space-y-5 rounded-lg'>
                    {
                        ticketItems.map(ticket=> <TicketCards handleSolvedTicket={handleSolvedTicket} key={ticket.id} ticket={ticket}></TicketCards>)
                    }

                </div>
                <h2 className='font-medium text-2xl py-3'>Resolved Task</h2>
                <div className='shadow p-10 rounded-lg space-y-5'>
                    {
                       solvedTicket.map(ticket => <ResolvedTicket key={ticket.id} ticket={ticket}></ResolvedTicket>) 
                    }
                </div>
             </div>
           </section>

        </div>

        
    );
};

export default TicketContainer;