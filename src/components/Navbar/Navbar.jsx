import { useState } from "react";
import {
  checkWalletAvailable,
  getWalletBalance,
  getUserAddress,
  getChainID,
} from "../../actions/Web3Actions";
import "./Navbar.css";
import { FaDiscord } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import logoLight from "../../images/logo-light.png";

export default function Navbar() {
  const [User, setUser] = useState({
    wallet: false,
    address: "",
    chainID: null,
    balance: 0,
  });

  const ConnectToMetaMask = async () => {
    const wallet = checkWalletAvailable();
    if (wallet) {
      const walletAddress = await getUserAddress();
      const chainID = await getChainID();
      const walletBalance = await getWalletBalance();
      setUser({
        wallet: wallet,
        address: walletAddress,
        chainID: chainID,
        balance: walletBalance,
      });
    }
  };

  return (
    <div className="navbar d-flex justify-around align-center">
      <div className="logo-box d-flex justify-between align-center f-gap-2">
        <div className="logo">
          <img src={logoLight} alt="Logo" />
        </div>
        <h2>Nova Dao</h2>
      </div>
      <nav className="navigation">
        <ul className="d-flex justify-center align-center">
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
      </nav>
      <div className="nav-btns d-flex justify-center align-center f-gap-2">
        {User.wallet ? (
          <div className="user-container">
            <button
              className="nav-btn d-flex justify-center align-center f-gap-1"
              onClick={ConnectToMetaMask}
            >
              <BiUserCircle className="nav-btn-icon" />
            </button>
            <div className="user-dropdown">
              <div className="dropdown-wrapper">
                <ul>
                  <li>Profile</li>
                  <li>Watchlist</li>
                  <li>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="nav-btn d-flex justify-center align-center"
            onClick={ConnectToMetaMask}
          >
            <IoMdWallet className="nav-btn-icon" />
            Connect
          </button>
        )}
        <button className="nav-btn d-flex justify-center align-center f-gap-1">
          <FaDiscord className="nav-btn-icon" />
          Discord
        </button>
      </div>
    </div>
  );
}
