import {useEffect} from 'react';
import './css-files/blog.css'
import vanilla from './css-files/images/Blog-Section/coffee-blog.jpg'
import freshBeans from './css-files/images/Blog-Section/fresh-coffee-beans.jpg'
import mochaCoffee from '././css-files/images/Blog-Section/mocha-coffee.jpg'
import coffeePapers from '././css-files/images/Blog-Section/coffee-and-papers.jpg'
import coffeeMug from '././css-files/images/Blog-Section/coffe-mug.jpg'

const Blog = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div>
      <div className="blog1 container-fluid d-flex align-items-center justify-content-evenl p-md-5">
        <img className='vanilla-image image-fluid' src={vanilla} alt="Vanilla Coffee" />
        <div className='first-blog m-3 p-lg-5'>
          <h2 className='text-sm'>6 <span className='health'>Health</span> Benefits You Didn't Know <span className='span'>Coffee</span>  Had</h2>
          <p className='fw-light'>Ah, coffee, that sweet dark delicious drink which unites us all from different backgrounds,
             occupations and interests. It brings together both the officer and the criminal, the professor and the student, 
             the boss and the employee.</p>
          <p className='fw-light'>
          Coffee has been around for thousands of years, but it has not been until recently that we have 
          discovered just how many incredible benefits it actually has. Are you a coffee drinker?
          </p>
          <a href="">continue reading</a>
        </div>
      </div>

      <div className="blog2 container-fluid container-lg d-flex flex-column align-items-center mt-5">
        
        <div className="link2 container-fluid d-flex flex-column flex-md-row justify-content-evenly align-items-center m-2">
          <img className='blog-image rounded-3' src={freshBeans} alt="Fresh Coffee Beans" />
          <div className='context d-flex flex-column align-items-start p-4'>
            <h3>
              Study: These Types of Single-Serve Coffee Capsules Are Worst for the Environment
            </h3>
            <p>After conducting a sustainability assessment of three different types of single-use coffee capsules by material type, 
              researchers in The Netherlands concluded that conventional plastic is the worst for the environment in terms of recyclability and circularity.</p>
          </div>
        </div>
        
        <div className="link2 container-fluid d-flex flex-column flex-md-row justify-content-evenly align-items-center m-2">
          <img className='blog-image rounded-3' src={mochaCoffee} alt="Mocha Coffee" />
          <div className='context d-flex flex-column align-items-start p-4'>
            <h3>
              21 Surprising Coffee Facts That Will Perk Up Your Afternoon
            </h3>
            <p>You pour it without thinking (or more likely to help you start thinking) but there's a fascinating backstory behind your morning cup of coffee. 
              Here's what goes into each cup of brewed beans — err, seeds.</p>
          </div>
        </div>

        <div className="link2 container-fluid d-flex flex-column flex-md-row justify-content-evenly align-items-center m-2">
          <img className='blog-image rounded-3' src={coffeePapers} alt="Fresh Coffee Beans" />
          <div className='context d-flex flex-column align-items-start p-4'>
            <h3>
              Study: These Types of Single-Serve Coffee Capsules Are Worst for the Environment
            </h3>
            <p>After conducting a sustainability assessment of three different types of single-use coffee capsules by material type, 
              researchers in The Netherlands concluded that conventional plastic is the worst for the environment in terms of recyclability and circularity.</p>
          </div>
        </div>

        <div className="link2 container-fluid d-flex flex-column flex-md-row justify-content-evenly align-items-center m-2">
          <img className='blog-image rounded-3' src={coffeeMug} alt="Mocha Coffee" />
          <div className='context d-flex flex-column align-items-start p-4'>
            <h3 className=''>
              21 Surprising Coffee Facts That Will Perk Up Your Afternoon
            </h3>
            <p>You pour it without thinking (or more likely to help you start thinking) but there's a fascinating backstory behind your morning cup of coffee. 
              Here's what goes into each cup of brewed beans — err, seeds.</p>
          </div>
        </div>
      </div>

      <div className='blog3 position-relative'>
        <div className='blog3-headline position-inherit d-flex flex-column align-items-start justify-content-center'>
          <h1>Life Begins after Coffee</h1>
          <p className=''>Discover the real taste of a natural coffee</p>
        </div>
      </div>
    </div>
  )
}

export default Blog
