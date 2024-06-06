import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import Search from '../assets/images/search.svg';
import Store from '../assets/images/store.svg';

const Nav = () => {
  return (
    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <ul className='list-styled'>
                <li>
                  <img src={Logo} alt='apple' />
                </li>
                <li>
                  <Link to="/store" className='link-styled'>Store</Link>
                </li>
                <li>
                  <Link to="/" className='link-styled'>Mac</Link>
                </li>
                <li>
                  <Link to="/iphone" className='link-styled'>Iphone</Link>
                </li>
                <li>
                  <Link to="/" className='link-styled'>Ipad</Link>
                </li>
                <li>
                  <Link to="/" className='link-styled'>Iwatch</Link>
                </li>
                <li>
                  <Link to="/" className='link-styled'>Tv</Link>
                </li>
                <li>
                  <Link to="/" className='link-styled'>Airpods</Link>
                </li>
                <li>
                  <Link to="/" className='link-styled'>Accessories</Link>
                </li>
                <li>
                  <Link to="/" className='link-styled'>Support</Link>
                </li>
                <li>
                  <img src={Search} alt='apple' />
                </li>
                <li>
                  <img src={Store} alt='apple' />
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav;
