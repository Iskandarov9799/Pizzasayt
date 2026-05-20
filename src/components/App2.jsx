import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import rasim1Img from './assets/Italian.png'
import rasim2Img from './assets/Venecia.png'
import rasim3Img from './assets/Meat.png'
import rasim4Img from './assets/Cheese.png'
import rasim5Img from './assets/most.png'
import rasim6Img from './assets/Argentina.png'
import rasim7Img from './assets/Gribnaya.png'
import rasim8Img from './assets/Tomatto.png'
import rasim9Img from './assets/Italian x2.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='main'>
       <h1 className='s1_h1'>Menu</h1>
        <section className='section1'>
          <a className='s1_a1' href="#">Show All</a>
          <a className='s1_a2' href="#">Meat</a>
          <a className='s1_a3' href="#">Vegetarian</a>
          <a className='s1_a4' href="#">Sea products</a>
          <a className='s1_a5' href="#">Mushroom</a>
        </section>
        <section className='s2'>
          <div className="s2_div">
            <img className='img1' src={rasim1Img} alt="Rasm" />
            <h1 className='s2_h1'>Italian</h1>
            <p className='s2_p'>Filling: onion, potato, tomato, <br /> mushrooms, cheese, olives, meat...</p>
          </div>
          <div className="s2_div2">
            <a className='s2_a' href="">22</a>
            <a className='s2_a2' href="">28</a>
            <a className='s2_a3' href="">33</a>
          </div>
          <a className='s2_a4' href="">+ Ingridients</a>
           <div className="s2_div3">
            <h2 className='h2'>8,35</h2>
            <p className='p2'>+</p>
            <h3 className='h3'>1</h3>
            <p className='p3'>-</p>
          </div>
          <div className="s2_div4">
            <a className='or' href="">Order Now</a>
          </div>
        </section>
        <section className='s3'>
          <div className="s2_div">
            <img className='img1' src={rasim2Img} alt="Rasm" />
            <h1 className='s2_h1'>Venecia</h1>
            <p className='s2_p'>Filling: onion, potato, tomato, <br /> mushrooms, cheese, olives, meat...</p>
          </div>
          <div className="s2_div3">
            <a className='s2_a' href="">22</a>
            <a className='s2_a2' href="">28</a>
            <a className='s2_a3' href="">33</a>
          </div>
          <a className='s2_a4' href="">+ Ingridients</a>
           <div className="s2_div3">
            <h2 className='h2'>8,35</h2>
            <p className='p2'>+</p>
            <h3 className='h3'>1</h3>
            <p className='p3'>-</p>
          </div>
          <div className="s2_div4">
            <a className='or' href="">Order Now</a>
          </div>
        </section>
         <section className='s4'>
          <div className="s2_div">
            <img className='img1' src={rasim3Img} alt="Rasm" />
            <h1 className='s2_h1'>Venecia</h1>
            <p className='s2_p'>Filling: onion, potato, tomato, <br /> mushrooms, cheese, olives, meat...</p>
          </div>
          <div className="s2_div2">
            <a className='s2_a' href="">22</a>
            <a className='s2_a2' href="">28</a>
            <a className='s2_a3' href="">33</a>
          </div>
          <a className='s2_a4' href="">+ Ingridients</a>
           <div className="s2_div3">
            <h2 className='h2'>8,35</h2>
            <p className='p2'>+</p>
            <h3 className='h3'>1</h3>
            <p className='p3'>-</p>
          </div>
          <div className="s2_div4">
            <a className='or' href="">Order Now</a>
          </div> 
        </section>
         <section className='s5'>
          <div className="s2_div">
            <img className='img1' src={rasim4Img} alt="Rasm" />
            <h1 className='s2_h1'>Venecia</h1>
            <p className='s2_p'>Filling: onion, potato, tomato, <br /> mushrooms, cheese, olives, meat...</p>
          </div>
          <div className="s2_div2">
            <a className='s2_a' href="">22</a>
            <a className='s2_a2' href="">28</a>
            <a className='s2_a3' href="">33</a>
          </div>
          <a className='s2_a4' href="">+ Ingridients</a>
           <div className="s2_div3">
            <h2 className='h2'>8,35</h2>
            <p className='p2'>+</p>
            <h3 className='h3'>1</h3>
            <p className='p3'>-</p>
          </div>
          <div className="s2_div4">
            <a className='or' href="">Order Now</a>
          </div>
        </section>
        <section className='c6'>
          <img className='img2' src={rasim5Img} alt="Rasm" />
        </section>
        <section className='s4'>
          <div className="s2_div">
            <img className='img1' src={rasim6Img} alt="Rasm" />
            <h1 className='s2_h1'>Argentina</h1>
            <p className='s2_p'>Filling: onion, potato, tomato, <br /> mushrooms, cheese, olives, meat...</p>
          </div>
          <div className="s2_div2">
            <a className='s2_a' href="">22</a>
            <a className='s2_a2' href="">28</a>
            <a className='s2_a3' href="">33</a>
          </div>
          <a className='s2_a4' href="">+ Ingridients</a>
           <div className="s2_div3">
            <h2 className='h2'>8,35</h2>
            <p className='p2'>+</p>
            <h3 className='h3'>1</h3>
            <p className='p3'>-</p>
          </div>
          <div className="s2_div4">
            <a className='or' href="">Order Now</a>
          </div> 
        </section>
         <section className='s5'>
          <div className="s2_div">
            <img className='img1' src={rasim7Img} alt="Rasm" />
            <h1 className='s2_h1'>Gribnaya</h1>
            <p className='s2_p'>Filling: onion, potato, tomato, <br /> mushrooms, cheese, olives, meat...</p>
          </div>
          <div className="s2_div2">
            <a className='s2_a' href="">22</a>
            <a className='s2_a2' href="">28</a>
            <a className='s2_a3' href="">33</a>
          </div>
          <a className='s2_a4' href="">+ Ingridients</a>
           <div className="s2_div3">
            <h2 className='h2'>8,35</h2>
            <p className='p2'>+</p>
            <h3 className='h3'>1</h3>
            <p className='p3'>-</p>
          </div>
          <div className="s2_div4">
            <a className='or' href="">Order Now</a>
          </div>
        </section>
        <section className='s4'>
          <div className="s2_div">
            <img className='img1' src={rasim8Img} alt="Rasm" />
            <h1 className='s2_h1'>Tomatto</h1>
            <p className='s2_p'>Filling: onion, potato, tomato, <br /> mushrooms, cheese, olives, meat...</p>
          </div>
          <div className="s2_div2">
            <a className='s2_a' href="">22</a>
            <a className='s2_a2' href="">28</a>
            <a className='s2_a3' href="">33</a>
          </div>
          <a className='s2_a4' href="">+ Ingridients</a>
           <div className="s2_div3">
            <h2 className='h2'>8,35</h2>
            <p className='p2'>+</p>
            <h3 className='h3'>1</h3>
            <p className='p3'>-</p>
          </div>
          <div className="s2_div4">
            <a className='or' href="">Order Now</a>
          </div> 
        </section>
         <section className='s5'>
          <div className="s2_div">
            <img className='img1' src={rasim9Img} alt="Rasm" />
            <h1 className='s2_h1'>Italian x2</h1>
            <p className='s2_p'>Filling: onion, potato, tomato, <br /> mushrooms, cheese, olives, meat...</p>
          </div>
          <div className="s2_div2">
            <a className='s2_a' href="">22</a>
            <a className='s2_a2' href="">28</a>
            <a className='s2_a3' href="">33</a>
          </div>
          <a className='s2_a4' href="">+ Ingridients</a>
           <div className="s2_div3">
            <h2 className='h2'>8,35</h2>
            <p className='p2'>+</p>
            <h3 className='h3'>1</h3>
            <p className='p3'>-</p>
          </div>
          <div className="s2_div4">
            <a className='or' href="">Order Now</a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
