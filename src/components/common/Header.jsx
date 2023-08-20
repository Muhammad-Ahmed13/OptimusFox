import React from 'react'
import '../css/Header.css';
import logo from '../images/left logo.png'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <section>
      <nav className="navbar navbar-expand-lg fixed-top main">
        <div className="container-fluid">
        <img className='imageQ' src={logo} width={'180px'} height={'32px'} />
          <button className="navbar-toggler bg-secondary-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon  bg-secondary-subtle"></span>
          </button>
          <div className="collapse navbar-collapse menuQ " id="navbarSupportedContent">

              <ul className="navbar-nav   mb-2 mb-lg-0">
                <li className="nav-item ">
                  <Link to='/' className="nav-link  color_2" aria-current="page"  >Home</Link>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle color" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link to="/portfolio"  className="nav-link color "  >Portfolio</Link>
                </li>
                <li className="nav-item">
                 <Link  to="/blog" className="nav-link color" >Blog</Link>
                </li>
                <li className="nav-item">
                  <Link  to="/about" className="nav-link color " >About Us</Link>
                </li>
                <li className="nav-item">
                  <Link  to="/contact" className="nav-link color" >Contact Us</Link>
                </li>

              </ul>

            <button className="btn   btn_header" type="submit">Get a Quote</button>

          </div>
        </div>
      </nav>


    </section>
  )
};

export default Header










