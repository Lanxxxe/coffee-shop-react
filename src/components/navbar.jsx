import logo from './css-files/images/Home-page/Logo.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from './Cart';
import './css-files/navbar.css'

const Navbar = () => {
  const { cart } = useCart();
  const [isScrolling, setIsScrolling] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolling(scrollTop > 10); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <div className={`fixed-top navigation-bar ${isScrolling ? 'scrolled' : 'not-scrolled'}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" href="#"><img src={logo} alt="Coffee House Logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-evenly">
              <li className="nav-item">
                <Link className="nav-link" activeClassName='active' to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName='active' to='/about' >About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName='active' to='/blog'>Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName='active' to='/products'>Products</Link>
              </li>
            </ul>
          </div>
            <Link className='nav-link cart mt-1' to='/checkout'>
              <i className='bi bi-shop-window h4 position-relative' >
                <span className='badge position-absolute top-0 start-100 translate-middle rounded-circle'>
                  {cart.length}
                  <span className='visually-hidden'></span>
                </span>
              </i>
            </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
