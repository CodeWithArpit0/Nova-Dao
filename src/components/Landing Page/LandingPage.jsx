import "./LandingPage.css";
import { Link } from "react-router-dom";
import blobImg from "../../images/blob2.png";

export default function LandingPage() {
  return (
    <div className="landing-wrapper d-flex justify-around align-center">
      <div className="left-heading-container d-flex flex-column">
        <div className="main-heading">
          <h1>
            The Web3 Grants <br />
            Network
          </h1>
        </div>
        <div className="mint-count-heading">
          <h3>
            0<span>/</span>7500 Minted
          </h3>
        </div>
        <div className="opt-btns d-flex align-center">
          <Link to="/mint">
            <button className="opt-btn d-flex justify-center align-center">
              Mint NFT
            </button>
          </Link>
        </div>
      </div>
      <div className="right-image-container">
        <div className="image-wrapper">
          <img src={blobImg} alt="blob img" />
        </div>
      </div>
    </div>
  );
}
