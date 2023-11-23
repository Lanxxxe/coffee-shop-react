import logo from './css-files/images/Home-page/Logo.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css-files/Styles.css'

const Navbar = () => {

  const [isScrolling, setIsScrolling] = useState(false);

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
    <div className={`sticky-top navigation-bar ${isScrolling ? 'scrolled' : 'not-scrolled'}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ">
          <Link className="navbar-brand" href="#"><img src={logo} alt="Coffee House Logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-evenly">
              <li className="nav-item">
                <Link className="nav-link" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about' >About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to='/blog'>Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to='/products'>Products</Link>
              </li>
            </ul>
            <Link className='cart'><i className='bi bi-cart h4'></i></Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
