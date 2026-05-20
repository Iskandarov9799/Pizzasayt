import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import pizza from '/public/pizzashop.png'
import katta from '/public/katta.png'
import proc from '/public/proc.png'
import t from '/public/t.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <nav className='van'>
      <img className='piza' src={pizza} alt="" />
      <p className='p1'>Home</p>
      <p className='p1'>Menu</p>
      <p className='p1'>Events</p>
      <p className='p1'>About Us</p>
      <button className='btn'>log in</button>
    </nav>
    </header>
    <main>
      <section className='section'>
        <div>
           <p className='p3'>The Fastest<br/>Pizza Delivery</p>
             <p className='p4'>We will deliver juicy pizza for your family in 30 <br /> minutes, if the courier is late - pizza is free!</p>
             <p className='p4'>Cooking process:</p>
             <img className='p4' src={proc} alt="" />
             <img className='img6' src={t} alt="" />
        </div>
        <img className='katta' src={katta} alt="" />
      </section>
    </main>



    </>
  )
}

export default App
