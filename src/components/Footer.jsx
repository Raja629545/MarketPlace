import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillApple
} from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
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
          <img src={logo} alt="" />
          <p>trueFood is a registered company under Hexaview Tech Pvt. Ltd.</p>
          <div className="sub">
            <div>
              <b>Company</b>
              <p>About</p>
              <p>Blog</p>
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
            <div>
              <b>Social links</b>
              <div>
                <AiFillFacebook />
                <AiFillTwitterCircle />
                <AiFillInstagram />
              </div>
              <div>
                <AiFillApple />
                <FaGooglePlay />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;