import React from 'react'
import Logo from '../assets/Library.svg'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <a href="/">
            <figure className='footer__logo'>
              <img src={Logo} alt="" className="footer__logo--img" />
            </figure>
          </a>
          <div className="footer__list">
            <a href="/" className="footer__link">Home</a>
            <span className="footer__link no-cursor">About</span>
            <a href="/books" className="footer__link">Books</a>
            <a href="/cart" className="footer__link">Cart</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer