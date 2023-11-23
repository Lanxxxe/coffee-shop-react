import './css-files/landing-page.css'
import landing1 from './css-files/images/Home-page/landing-page1.jpg'
import landing2 from './css-files/images/Home-page/landing-page2.jpg'
import landing3 from './css-files/images/Home-page/landing-page3.jpg'
import landing4 from './css-files/images/Home-page/landing-page4.jpg' 

const Home = () => {
  const slides = [
    {image : landing1,
      qoute : ''
    }
  ]

  return (
    <div className="homepage">
        <div className="homepage-description">
          <div className='description'>
            <h3 >Your daily dose of joy in a cup</h3>
            <p>Indulge in the rich symphony of flavors at <em>Coffee House</em></p>
          </div>
        </div>
        <div className='section2'>
          <h3 className=''>Elevate your coffee experience with our handcrafted brews and cozy atmosphere</h3>
        </div>
        <div className='section3'>

        </div>
    </div>
  )
}
export default Home
