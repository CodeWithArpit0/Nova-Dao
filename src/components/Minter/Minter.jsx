import { useState } from "react";
import "./Minter.css";
import modelImage from "../../images/blob.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { mintNft } from "../../actions/SmartActions";

export default function Minter() {
  const [nftQTY, setNftQty] = useState(1);
  const [model, setModel] = useState(false);

  const updateCounter = (val) => {
    if (val >= 1 && val <= 5) {
      setNftQty(val);
    }
  };

  const mintNFT = async () =>{
    const hex = await mintNft(nftQTY);
  }
  return (
    <section className="mint-section d-flex justify-around align-center">
      <div className="heading-section d-flex jusitfy flex-column f-gap-4">
        <div className="mint-heading d-flex justify-center align-center flex-column f-gap-2">
          <h1>Mint your NFT in seconds</h1>
          <h3>Get your NFT minted only for 1ETH</h3>
        </div>
        <div className="d-flex justify-center align-center">
          <button className="mint-btn" onClick={() => setModel(true)}>
            Mint Now
          </button>
        </div>

        {model ? (
          <div className="mint-model d-flex justify-center align-center flex-column">
            <div className="close-model-btn d-flex justify-end align-center">
              <button onClick={() => setModel(false)}>
                <ImCross />
              </button>
            </div>
            <div className="model-wrapper d-flex flex-column justify-center align-center f-gap-5">
              <div className="model-image">
                <img src={modelImage} />
              </div>
              <div className="nft-minted-heading">
                <h1>0 / 7500 Minted</h1>
              </div>
              <div className="counter-box">
                <div className="counter d-flex justify-center align-center f-gap-1">
                  <button onClick={() => updateCounter(nftQTY + 1)}>
                    <AiOutlinePlus />
                  </button>
                  <input type="text" placeholder={nftQTY} />
                  <button onClick={() => updateCounter(nftQTY - 1)}>
                    <AiOutlineMinus />
                  </button>
                </div>
              </div>
              <div className="nft-mint-btn">
                <button className="d-flex justify-center align-center" onClick={mintNFT}>
                  Mint Now | 1 &nbsp; <FaEthereum />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
