import './App.css'
import pizza from '/public/pitsa.png'
import pizzaa from '/public/pitza.png'
import pizza3 from '/public/pizzashop.png'
import raqam from '/public/raqam.png'
import insta from '/public/instagram.svg'
import twiter from '/public/twitter-3-logo-svgrepo-com.svg'
import fesbuk from '/public/facebook-3-logo-svgrepo-com.svg'

function App() {
  return (
    <>
      <div className='div1'>
        <div className='div2'>
          <h1 className='h1_1'>About us</h1>
          <p className='p_1'>In just a couple of years, we have opened 6 outlets in different cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future we plan to develop the network in other major cities of Russia.</p>
          <img className='img_1' src={pizza} alt="" />
          <p className='p_2'>The kitchen of each point is at least: 400-500 sq. m. meters, hundreds of employees, smoothly performing work in order to receive / prepare / form / deliver customer orders on time.</p>
        </div>
        <img className='img3456' src={pizzaa} alt="" />
      </div>
      <footer className='footer'>
        <div className='footer_div'>
          <div>
            <img className='img4' src={pizza3} alt="" />
          </div>
          <div className='divfooter'>
          <div className='div3'>
            <div className='classdiv'>
            <div className='div7'>
              <h2 className='h2_1'>Home</h2>
              <p className='p3'>To Order</p>
              <p className='p3'>About us</p>
              <p className='p3'>Events</p>
              <p className='p3'>Menu</p>
            </div>
            <div className='div7'>
              <h2 className='h2_1'>Events</h2>
              <p className='p3'>3 Pizza 1 Free Coffee</p>
              <p className='p3'>2 Pizza for 1 Price</p>
              <p className='p3'>Kitchen Tour</p>
            </div>
            </div>
            <div className='div35t78'>
            <div className='div7'>
              <h2 className='h2_1'>Menu</h2>
              <p className='p3'>Show All</p>
              <p className='p3'>Seaproducts</p>
              <p className='p3'>Vegan</p>
              <p className='p3'>Meat</p>
            </div>
            <div className='div7'>
              <h2 className='h2_1'>About Us</h2>
              <p className='p3'>Our History</p>
              <p className='p3'>Why We?</p>
            </div>
            </div>
          </div>
          </div>
        </div>
        <div className='divv8'>
          <img className='p11' src={raqam} height={20} alt="" />
          <div className='div567839'>
          <a className='a2014' href="#"><img className='img66' src={insta} height={25} alt="" /></a>
          <a className='a2015' href="#"><img className='img66' src={twiter} height={25} alt="" /></a>
          <a className='a2016' href="#"><img className='img66' src={fesbuk} height={25} alt="" /></a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App