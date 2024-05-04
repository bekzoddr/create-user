import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>about us</li>
              <li>our services</li>
              <li>privacy policy</li>
              <li>affiliate program</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>FAQ</li>
              <li>shipping</li>
              <li>returns</li>
              <li>order status</li>
              <li>payment options</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li>watch</li>
              <li>bag</li>
              <li>shoes</li>
              <li>dress</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <ul className="social-links">
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
