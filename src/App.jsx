
import './App.css'
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
    </>
  )
}

export default App
