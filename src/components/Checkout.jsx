import React from 'react'
import './css-files/checkout.css'
import shoppeepay from './css-files/images/Payments/shoppeepay.png';
import gcash from './css-files/images/Payments/gcash.jpg'
import { useCart } from './Cart'

const Checkout = () => {
    const { cart } = useCart();
    const shippingFee = 45;

    const subTotal = () => {
        let total = 0;
        cart.forEach((itemsPrice) => {
            total += itemsPrice.price
        });
        return total
    };
    const totalPrice = subTotal() + shippingFee;

    const orderDone = () => {
        alert('Thank you for Ordering!');
        window.location.reload();
    }

  return (
    <div>
        <div className='space'></div>

        <div className='checkout-container d-flex flex-column flex-lg-row jusify-content-around'>
            <div className='customer-information'>
                <div className='express-payment'>
                    <p className='text-center'>Express Payments</p>
                    <div className='online-payment d-flex align-items-center justify-content-center'>
                        <img className='shoppee rounded mx-3' src={shoppeepay} alt="" />
                        <img className='gcash rounded' src={gcash} alt="" />
                    </div>
                </div>

                <div className='mt-5'>
                    <h2>Delivery Information</h2>
                    <div className='row g-4 mt-2'>
                        <div className='col-md-6'>
                            <label className='mb-2' htmlFor="">First Name</label>
                            <input type="text" id='first' className='form-control' placeholder='ex. Mark Juan'/>
                        </div>
                        <div className='col-md-6'>
                            <label className='mb-2' htmlFor="">Last Name</label>
                            <input type="text" className='form-control' placeholder='ex. Monte' />
                        </div>
                        <div className='col-md-12'>
                            <label className='mb-2' htmlFor="">Full Address</label>
                            <input type="text" className='form-control' placeholder='ex. BGC Taguig City' />
                        </div>
                        <div className='col-md-6'>
                            <label className='mb-2' htmlFor="">Cellphone Number</label>
                            <input type="text" className='form-control' placeholder='ex. (+63) 989 786 8937' />
                        </div>
                        <div className='col-md-6'>
                            <label className='mb-2' htmlFor="">Telephone Number</label>
                            <input type="text" className='form-control' placeholder='ex. 992-783-2982' />
                        </div>
                        <div className='col-md-12 position-relative'>
                            <label className='mb-2' htmlFor="">Note to the Driver</label>
                            <textarea className='riders-note p-2 form-control' name="note" id="" placeholder='ex. Just leave at the door'></textarea>
                        </div>
                    </div>

                    <div className='shipping-buttons d-flex flex-wrap align-items-center justify-content-around mt-4'>
                        <div className=''>
                            <button className='back-button'>Back to Products</button>
                        </div>
                        <div className=''>
                            <button className='proceed-button' onClick={orderDone}>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='bill-information'>
                <div className='voucher-container mb-4'>
                    <input type="text" className='form-control' placeholder='Voucher Code' />
                </div>
                <div className='d-flex justify-content-between'>
                    <h5>Subtotal</h5>
                    <p>P{subTotal()}</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <h5>Shipping Fee</h5>
                    <p>P{shippingFee}</p>
                </div>
                <div className='d-flex justify-content-between mb-3'>
                    <h5>Total Amount</h5>
                    <p>P{totalPrice}</p>
                </div>

                <div className='items-container'>
                    {cart.map((item) => (
                        <div className='d-flex mt-3'>
                            <div className='item-image'>
                                <img className='checkout-image' src={item.image} alt="" />
                            </div>
                            <div className='item-information d-flex flex-column'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h4>{item.name}</h4>
                                    <p>P{item.price}</p>
                                </div>
                                <div>
                                    <p>Quantity: 1</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>  
        </div>
    </div>
  );
};

export default Checkout
