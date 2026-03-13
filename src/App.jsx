
import { Suspense } from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import TicketContainer from './components/TicketContainer'

const loadTickets = fetch("/tickets.json")
.then(res => res.json())

function App() {
  
  const ticketPromise = loadTickets
  
  

  return (
    <>
    <header className='shadow'>
      <Navbar></Navbar>
    </header>

    <section className='bg-gray-100'>
     <Suspense fallback={"loading...."}>
       <TicketContainer ticketPromise={ticketPromise}></TicketContainer>
     </Suspense>
    </section>

    <section className='bg-black'>
      <Footer></Footer>
    </section>
    </>
  )
}

export default App
