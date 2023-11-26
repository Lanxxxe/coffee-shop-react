import {useEffect} from 'react';
import './css-files/products.css';
import Black from './css-files/images/Coffee/Hot/Black-Coffee.jpg';
import Americano from './css-files/images/Coffee/Hot/Americano-Coffee.jpg';
import Cappuccino from './css-files/images/Coffee/Hot/Cappuccino.jpg';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <div>  
      <div className="blank"></div>

      <div className='d-flex align-items-center justify-content-around p-5'>
        <button className='hot rounded-3'>Hot Coffee</button>
        <button className='cold rounded-3'>Iced Coffee</button>
        <button className='cookies rounded-3'>Cookies</button>
      </div>
      
      <div className='product-container d-flex justify-content-evenly'>
        <div className='product-card p-2 m-5'>
          <img className='products rounded-3' src={Black} alt="" />
          <div className='d-flex justify-content-between align-items-center pt-2'>
            <h5>Black Coffee</h5>
            <p className='text-success fs-5'>P220</p>
          </div>
          <span><i className='text-warning bi-star-fill'></i> <i className='bi-star-fill text-warning '> </i> <i className='bi-star-fill text-warning'></i> <i className='bi-star-half text-warning'></i> <i className='bi-star'></i></span>
          <p className='mt-3'>Black coffee may reduce your risk of cancer, liver cirrhosis, and type 2 diabetes. It also boasts energizing and focus-enhancing effects</p>
          <div className='buttons d-flex flex-column mt-5'>
            <button className='p-3 rounded-5'>Add to brewing station</button>
            <button className='p-3 bg-success rounded-5 mt-3 text-white border border-0'>Buy now</button>
          </div>
        </div>
        <div className='product-card p-2 m-5'>
          <img className='products rounded-3' src={Americano} alt="" />
          <div className='d-flex justify-content-between align-items-center pt-2'>
            <h5>Americano</h5>
            <p className='text-success fs-5'>P230</p>
          </div>
          <span><i className='text-warning bi-star-fill'></i> <i className='bi-star-fill text-warning '> </i> <i className='bi-star-half text-warning'></i> <i className='bi-star'></i> <i className='bi-star'></i></span>
          <p className='mt-3'>Black coffee may reduce your risk of cancer, liver cirrhosis, and type 2 diabetes. It also boasts energizing and focus-enhancing effects</p>
          <div className='buttons d-flex flex-column mt-5'>
            <button className='p-3 rounded-5'>Add to brewing station</button>
            <button className='p-3 bg-success rounded-5 mt-3 text-white border border-0'>Buy now</button>
          </div>
        </div>
        <div className='product-card p-2 m-5'>
          <img className='products rounded-3' src={Cappuccino} alt="" />
          <div className='d-flex justify-content-between align-items-center pt-2'>
            <h5>Cappuccino</h5>
            <p className='text-success fs-5'>P270</p>
          </div>
          <span><i className='text-warning bi-star-fill'></i> <i className='bi-star-fill text-warning '> </i> <i className='bi-star-fill text-warning'></i> <i className='bi-star-fill text-warning'></i> <i className='bi-star-fill text-warning'></i></span>
          <p className='mt-3'>Black coffee may reduce your risk of cancer, liver cirrhosis, and type 2 diabetes. It also boasts energizing and focus-enhancing effects</p>
        
          <div className='buttons d-flex flex-column mt-5'>
            <button className='p-3 rounded-5'>Add to brewing station</button>
            <button className='p-3 bg-success rounded-5 mt-3 text-white border border-0'>Buy now</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Products
