import React from 'react';
import { FaCoins } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
      <FaCoins className="footer-icon" />
        <nav>
          <a href="/">Home</a>
          <a href="/">Cryptocurrencies</a>
          <a href="/">Coin Market</a>
          <a href="/">Contact</a>
        </nav>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;