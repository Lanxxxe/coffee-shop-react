import {useEffect, useState} from 'react';
import './css-files/products.css';
import { useCart } from './Cart';
import allproducts from './css-files/images/Coffee/product-information';

const Rating = ({ stars }) => {
  return (
    <div>
      {stars.map((starClass) => (
        <i className={starClass}></i>
      ))}
    </div>
  );
};

const Products = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filtration = selectedCategory === 'all' 
    ? allproducts 
    : allproducts.filter(prod => prod.category === selectedCategory);

  useEffect(() => {
    window.scrollTo(0,0); 
  }, []);

  return (
    <div>  
      <div className="blank"></div>

      <div className='filt-buttons d-flex align-items-center justify-content-around align-content-around flex-wrap p-3'>
        
        <button className='all rounded-3' onClick={() => setSelectedCategory('all')}>All Products</button>
        <button className='hot rounded-3' onClick={() => setSelectedCategory('Hot')}>Hot Coffee</button>
        <button className='cold rounded-3' onClick={() => setSelectedCategory('Cold')}>Iced Coffee</button>
        <button className='cookies rounded-3' onClick={() => setSelectedCategory('Cookies')}>Cookies</button>
      </div>
      
      <div className='product-container p-2 d-flex flex-wrap align-content-around justify-content-around'>
        {filtration.map(product => (
          <div className='product-card' key={product.id}>
            <img className='products d-block mx-auto rounded-3' src={product.image} alt="" />
            <div className='prod-info d-flex justify-content-between align-items-center'>
              <h5>{product.name}</h5>
              <p >P{product.price}</p>
            </div>
            <span><i className={product.star}></i> <i className={product.star}></i> <i className={product.star}></i> <i className={product.star}></i> <i className={product.star}></i></span>
            <p className='des mt-3'>Black coffee may reduce your risk of cancer, liver cirrhosis, and type 2 diabetes. It also boasts energizing and focus-enhancing effects</p>
            <div className='buttons d-flex align-items-center justify-content-around flex-wrap mt-4'>
              <button className='add text-center rounded-5' onClick={() => addToCart(product)}>Add to Kitchen</button>
              <button className='buy-now text-center rounded-5' onClick={() => addToCart(product)}>Buy now</button>            
            </div>
        </div>
          ))}
      </div>
      
    </div>
  )
}

export default Products
