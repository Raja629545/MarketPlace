import React from "react";
import {Link, NavLink} from "react-router-dom";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillApple,
} from "react-icons/ai";
import {FaGooglePlay} from "react-icons/fa";
import "../styles/footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="footer-content">
          {/* <h3
            style={{
              fontFamily: "Trebuchet MS",
              fontSize: "2em"
            }}
          >
            MarketHub
          </h3> */}
          <img src={logo} alt="logo" />
          {/* <p>trueFood is a registered company under Hexaview Tech Pvt. Ltd.</p> */}
          <div className="sub">
            <div>
              <b>Company</b>
              <p>
                <NavLink to="/">Home</NavLink>
              </p>
              <p>
                <NavLink to="/about">About</NavLink>
              </p>
              <p>
                <NavLink to="/services">Services</NavLink>
              </p>
              <p>
                <NavLink to="/contact">Contact</NavLink>
              </p>
              <p>
                <NavLink to="/login">Login</NavLink>
              </p>
            </div>
            <div>
              <b>For Foodies</b>
              <p>Code of conduct</p>
              <p>Community</p>
            </div>
            <div>
              <b>For Restaurant</b>
              <p>Restaurant</p>
              <p>Business</p>
            </div>
            <div>
              <b>For You</b>
              <p>Privacy</p>
              <p>Security</p>
              <p>Terms</p>
            </div>
          </div>
          <hr />
          <div className="row sub">
            <div className="col">
              <p>&#169; 2024 MarketHUB. All Copyrights Reserved.</p>
            </div>
            <div>
              <b className="follow">FOLLOW US</b>
              <div className="social-icons">
                <Link to={"https://facebook.com"}><AiFillFacebook /></Link>
                <Link to={"https://twitter.com"}><AiFillTwitterCircle /></Link>
                <Link to={"https://instagram.com"}><AiFillInstagram /></Link>
              </div>
              <div className="social-icons">
                <Link to={"https://itunes.apple.com"}><AiFillApple /></Link>
                <Link to={"https://play.google.com"}><FaGooglePlay /></Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Footer;
