import './css-files/about.css'
import logo from './css-files/images/Home-page/Logo.png'
import Image1 from './css-files/images/About/About2.1.jpg'
import Image2 from './css-files/images/About/About2,2.jpg'

const About = () => {
  return (
    <div>   
      <div className="section1 container-fluid d-flex justify-content-center align-items-center">
        <div className='logo-container'>
          <img className='logo' src={logo} alt="Logo" />
          <p className='since text-center'>
            since 2023
          </p>

          <p className='section1-quote text-center'>“Brewing joy and vitality in every cup, our coffee is the 
            perfect pick-me-up for your moments of inspiration and motivation.”</p>
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
      
      <div className="mission-section container d-block mt-5">
        <div className='vision-container d-flex'>
          <img className='image rounded-2' src={Image1} alt="" />
          <div className='vision mx-4'>
            <h3 className='title'>Our Vission</h3>
            <p className='mt-3'>To be the heartbeat of our community, Coffee House envisions a space where the aroma of freshly brewed coffee intertwines with the spirit of connection. 
              We strive to create a haven where every cup is a catalyst for meaningful conversations, shared experiences, and a momentary escape from the hustle of daily life.</p>
          </div>
        </div>

        <div className='mission-container d-flex mt-5'>
          <img className='image rounded-2' src={Image2} alt="" />
          <div className='mission mx-4'>
            <h3 className='title'>Our Mission</h3>
            <p className=''>At Coffee House, our mission is to craft exceptional coffee experiences that transcend the ordinary. We are committed to sourcing the finest beans, fostering a welcoming environment, and serving each cup with passion and precision. Through our dedication to quality, community, and the joy found in a well-brewed cup, we aim to be the go-to destination for those seeking a genuine, uplifting, and flavorful coffee journey.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
