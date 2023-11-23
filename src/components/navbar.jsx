import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css-files/styles.css'
import logo from './css-files/images/Logo.png'
import { useState } from 'react';

const Navbar = () => {

  const [menu, setMenu] = useState("shop")

  return (
    <div className="navigation-bar position-relative">
      <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src={logo} alt="Coffee House Logo" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
            <ul class="navbar-nav justify-content-evenly">
              <li class="nav-item">
                <a onClick={() => {setMenu("shop")}} class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a onClick={() => {setMenu("about")}} class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a onClick={() => {setMenu("blog")}} class="nav-link ">Blog</a>
              </li>
              <li class="nav-item">
                <a onClick={() => {setMenu("products")}} class="nav-link ">Products</a>
              </li>
            </ul>
            <a href=""><i className='bi bi-cart h4'></i></a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
