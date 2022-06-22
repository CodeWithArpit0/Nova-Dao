import "./Footer.css";
import logoImg from "../../images/logo-light.png";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineMedium, AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {
  return (
    <section className="footer-section d-flex justify-around flex-column align-center">
      <div className="footer-wrapper d-flex justify-around">
        <div className="footer-logo d-flex f-gap-2">
          <div className="logo-img">
            <img src={logoImg} alt="Footer Image" />
          </div>
          <div className="logo-text d-flex justify-center flex-column f-gap-1">
            <h1>Nova Dao</h1>
            <p>The Web3 project</p>
          </div>
        </div>
        <div className="footer-content d-flex align-center">
          <div className="imp-links d-flex f-gap-2 flex-column">
            <ul className="d-flex align-center f-gap-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/mint">Mint</Link>
              </li>
              <li>
                <Link to="/roadmap">Roadmap</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="social-links d-flex align-center">
          <ul className="d-flex f-gap-5">
            <li>
              <a href="#">
                <FaDiscord />
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineMedium />
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright-box d-flex justify-center align-center">
        <p>&copy; Nova Dao. All rights reserved.</p>
      </div>
    </section>
  );
}
