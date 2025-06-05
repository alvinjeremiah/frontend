import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Privacy Policy</li>
            <li>Affiliate Program</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Get Help</h4>
          <ul>
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Order Status</li>
            <li>Payment Options</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Online Shop</h4>
          <ul>
            <li>Watch</li>
            <li>Bag</li>
            <li>Shoes</li>
            <li>Dress</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
