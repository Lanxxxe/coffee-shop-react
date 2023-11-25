import './css-files/landing-page.css'
import React, { useEffect, useState } from 'react';
import Card1 from './css-files/images/Home-page/Card-1.jpg'
import Card2 from './css-files/images/Home-page/Card-2.jpg'
import Card3 from './css-files/images/Home-page/Card-3.jpg'
import Card4 from './css-files/images/Home-page/Card-4.jpg'
import Card5 from './css-files/images/Home-page/Card-5.jpg'
import Card6 from './css-files/images/Home-page/Card-6.jpg'
import Logo from './css-files/images/Home-page/Logo.png'

const Home = () => {

  const [isDiv6Visible, setDiv6Visible] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const div6 = document.getElementById('section6');
    if (div6) {
      const rect = div6.getBoundingClientRect();
      // Adjust the 1 pixel threshold
      setDiv6Visible(rect.top >= -(window.innerHeight) && rect.bottom <= window.innerHeight + window.innerHeight);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  
  return (
    <div className="homepage">

        <div className="homepage-description">
          <div className='description d-flex align-items-center p-3'>
            <div>
              <h1>Your daily dose of joy in a cup</h1>
              <p className='lh-lg'>Indulge in the rich symphony of flavors at <em>Coffee House</em></p>
            </div>
          </div>
        </div>

        <div className='section2 container-fluid'>
          <h3 className='text-center'>Elevate your coffee experience with our handcrafted brews and cozy atmosphere</h3>
        </div>

        <div className={`section3 container-fluid ${isDiv6Visible ? '' : 'sticky-top' } `} id='section3'>
          <div>
          <h1 className='text-center'>Flavorful</h1>
          <h4 className='text-center'>Brewing up a strong of flavors</h4>
          </div>
        </div>

        <div className={`section4 container-fluid ${isDiv6Visible ? '' : 'sticky-top' } `} id='section4'>
          <div>
          <h1 className='text-center'>Embrace</h1>
          <h4 className='text-center'>Coffee that speaks to your soul, served with a side of warmth</h4>
          </div>
        </div>

        <div className={`section5 container-fluid ${isDiv6Visible ? '' : 'sticky-top' } `} id='section5'>
          <div>
          <h1 className='text-center'>Embrace</h1>
          <h4 className='text-center'>Coffee that speaks to your soul, served with a side of warmth</h4>
          </div>
        </div>

      <div className="section6 container-fluid p-3 align-items-center mt-5 mb-5 sticky-top" id='section6'> 
        <h1>Coffee House</h1>
        <h4 className='mt-3'>We our the coffee house where the finest coffee blends meet the ease of online indulgence. Explore our curated selection,
          and elevate your coffee moments with the perfect brew delivered to your doorstep.
          <div className='section6-images d-block d-md-flex justify-content-md-evenly mt-5'>
            <img className='img-fluid m-1' src={Card1}  alt="C" />
            <img className='img-fluid m-1' src={Card2}  alt="O" />
            <img className='img-fluid m-1' src={Card3}  alt="F" />
            <img className='img-fluid m-1' src={Card4}  alt="F" />
            <img className='img-fluid m-1' src={Card5}  alt="E" />
            <img className='img-fluid m-1' src={Card6}  alt="E" />
          </div>
        </h4>
      </div>

      <footer className='footer container-fluid d-flex align-items-center justify-content-center bg-body-tertiary'>
        <div className='footer-content'>
          <img src={Logo} alt="" />
          <div>
            <i className='bi bi-facebook'></i>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Home
