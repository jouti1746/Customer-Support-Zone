
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import States from './components/States'

function App() {
  

  return (
    <>
    <header className='shadow'>
      <Navbar></Navbar>
    </header>

    <section>
      <States></States>
    </section>

    <section className='bg-black'>
      <Footer></Footer>
    </section>
    </>
  )
}

export default App
