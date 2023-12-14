import './css-files/home.css'
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
    window.scrollTo(0,0);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const div6 = document.getElementById('section6');
      if (div6) {
        const rect = div6.getBoundingClientRect();
        setDiv6Visible(rect.top > -(window.innerHeight) && rect.bottom < window.innerHeight + window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <div className="homepage d-flex flex-column">
        <div className="homepage-description">
          <div className='description d-flex align-items-center p-4'>
              <div className='mx-2'>
              <h1>Your daily dose of joy in <span>a cup </span></h1>
              <p className='lh-lg'>Indulge in the rich symphony of flavors at <em>Coffee House</em></p>
              </div>
          </div>
        </div>

        <div className='section2 container-fluid'>
          <h3 className='text-center'>Elevate your coffee experience with our handcrafted brews and cozy atmosphere</h3>
        </div>

        <div className={`section3 container-md-fluid ${isDiv6Visible ? '' : 'sticky-lg-top' } `} id='section3'>
          <div>
          <h1 className='text-center'>Flavorful</h1>
          <h4 className='text-center'>Brewing up a strong of flavors</h4>
          </div>
        </div>

        <div className={`section4 container-fluid ${isDiv6Visible ? '' : 'sticky-lg-top' } `} id='section4'>
          <div>
          <h1 className='text-center'>Embrace</h1>
          <h4 className='text-center'>Coffee that speaks to your soul, served with a side of warmth</h4>
          </div>
        </div>

        <div className={`section5 container-fluid ${isDiv6Visible ? '' : 'sticky-lg-top' } `} id='section5'>
          <div>
          <h1 className='text-center'>Embrace</h1>
          <h4 className='text-center'>Coffee that speaks to your soul, served with a side of warmth</h4>
          </div>
        </div>

      <div className="section6 container-fluid d-flex flex-column align-items-start mt-3 mb-5 p-4" id='section6'> 
        <h1>Coffee House</h1>
        <h4 className='mt-2'>We our the coffee house where the finest coffee blends meet the ease of online indulgence. Explore our curated selection,
          and elevate your coffee moments with the perfect brew delivered to your doorstep.
          <div className='section6-images d-flex justify-content-evenly mt-5'>
            <img className='images m-1' src={Card1}  alt="C" />
            <img className='images m-1' src={Card2}  alt="O" />
            <img className='images m-1' src={Card3}  alt="F" />
            <img className='images m-1' src={Card4}  alt="F" />
            <img className='images m-1' src={Card5}  alt="E" />
            <img className='images m-1' src={Card6}  alt="E" />
          </div>
        </h4>
      </div>

      <footer className='footer container-fluid d-flex align-items-center justify-content-center'>
        <div className='footer-content container d-flex flex-column align-items-center justify-items-center'>
          <img className='' src={Logo} alt="Coffee House Logo" />
          <div className='icons d-flex align-items-center justify-content-evenly'>
            <i className='facebook fs-2 bi bi-facebook'></i>
            <i className='youtube fs-2 bi bi-youtube'></i>
            <i className='instagram fs-2 bi bi-instagram'></i>
            <i className='linkedin fs-2 bi bi-linkedin'></i>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Home
