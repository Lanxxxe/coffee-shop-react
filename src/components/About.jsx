import {useEffect} from 'react';
import './css-files/about.css';
import logo from './css-files/images/Home-page/Logo.png';
import Image1 from './css-files/images/About/About2.1.jpg';
import Image2 from './css-files/images/About/About2,2.jpg';


const About = () => {

  // useEffect(() => {
  //   window.scrollTo(0,0);
  // }, []);

  return (
    <div>   
      <div className="section1 container-fluid d-flex justify-content-center align-items-center">
        <div className='d-flex flex-column align-items-center'>
          <img className='logo' src={logo} alt="Logo" />
          
          <p className='section1-quote text-center'>“Brewing joy and vitality in every cup, our coffee is the 
            perfect pick-me-up for your moments of inspiration and motivation.”</p>
            
            <p className='since text-center '>
            since 2023
          </p>
        </div>
      </div>

      <div className='story-section p-5 mt-5'>
        <h1 className='text-center title'>
            The Art of Coffee: Our Story
          </h1>
          <p className='text-center fs-6 mt-4'>
          In the heart of our bustling city, Coffee House had humble beginnings, sparked by a shared passion for the art of coffee. 
          What started as a modest dream among friends evolved into a cherished storefront on a quiet corner. 
          The aroma of freshly roasted beans and the gentle hum of espresso machines beckoned passersby, inviting them to step into a space where time seemed to slow down. 
          The founders, armed with their dedication to the perfect brew and a desire to create a haven in the urban chaos, 
          opened the doors to a coffee shop that would soon become a local favorite.
          </p>
          <p className='text-center fs-6 '>
          From the very first day, Coffee House embodied more than just a place to grab a cup; it became a communal hub where individuals 
          seeking a momentary escape found solace. The baristas, with their expertise and friendly smiles, transformed 
          the shop into a daily ritual for coffee connoisseurs and casual visitors alike. Amidst the aroma of freshly ground 
          beans and the comforting chatter of patrons, Coffee House became a testament to the power of a simple cup of coffee to 
          foster genuine connections and create a haven in the heart of the city's hustle.
          </p>
      </div>
      
      <div className="mission-section container-fluid d-block d-md-flex flex-column mt-5">
        <div className='vision-container d-block d-md-flex align-items-center'>
          <img className='image rounded-2 mx-auto d-block' src={Image1} alt="" />
          <div className='vision mx-auto d-block'>
            <h3 className='title text-center text-md-start mt-3 mt-md-0'>Our Vision</h3>
            <p className='text-center text-md-start'>To be the heartbeat of our community, Coffee House envisions a space where the aroma of freshly brewed coffee intertwines with the spirit of connection. 
              We strive to create a haven where every cup is a catalyst for meaningful conversations, shared experiences, and a momentary escape from the hustle of daily life.</p>
          </div>
        </div>

        <div className='mission-container d-block d-md-flex align-items-center mt-5'>
          <img className='image rounded-2 mx-auto d-block' src={Image2} alt="" />
          <div className='mission mx-auto d-block'>
            <h3 className='title text-center text-md-start mt-3 mt-md-0'>Our Mission</h3>
            <p className='text-center text-md-start'>At Coffee House, our mission is to craft exceptional coffee experiences that transcend the ordinary. We are committed to sourcing the finest beans, fostering a welcoming environment, and serving each cup with passion and precision. Through our dedication to quality, community, and the joy found in a well-brewed cup, we aim to be the go-to destination for those seeking a genuine, uplifting, and flavorful coffee journey.</p>
          </div>
        </div>
      </div>

      <div className='container-fluid p-5 coffe-card m-2'>
        <h1 className='text-center'>What we serve...</h1>
        <div className='cards d-block d-md-flex align-items-center justify-content-around p-3 pt-5'>
          <div className='black-container rounded-2 mx-auto d-block d-flex flex-column m-2'>
            <h2 className='black-card'>Black Coffee</h2>
            <p className=''>Black coffee is a potent source of antioxidants, which can help protect cells from damage caused by free radicals.</p>
          </div>
          <div className='iced-container rounded-2 mx-auto d-block d-flex flex-column m-2'>
            <h2 className='iced-card'>Iced Coffee</h2>
            <p className=''>Iced coffee provides a refreshing way to stay hydrated, especially during warmer months, making it a more enjoyable alternative to plain water.</p>
          </div>
          <div className='cookies-container rounded-2 mx-auto d-block d-flex flex-column m-2'>
            <h2 className='cookies-card'>Cookies</h2>
            <p className=''>Cookies are a delightful and satisfying treat, providing a moment of indulgence and enjoyment.</p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h1>Visit our Coffee Houses</h1>

        <div className='container-fluid'>
          <div className='locations d-flex align-items-center justify-content-between'>
            <h4>Main Branch</h4>
            <p>Tacloban City, Leyte</p>
            <p>09236429344</p>
          </div>
          <div className='locations d-flex align-items-center justify-content-between'>
            <h4>Calbayog City</h4>
            <p>Calbayog City, Samar</p>
            <p>09236429344</p>
          </div>
          <div className='locations d-flex align-items-center justify-content-between'>
            <h4>Tacloban City</h4>
            <p>Tacloban City, Leyte</p>
            <p>09236429344</p>
          </div>
          <div className='locations d-flex align-items-center justify-content-between'>
            <h4>Palo</h4>
            <p>Palo, Leyte</p>
            <p>09236429344</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
