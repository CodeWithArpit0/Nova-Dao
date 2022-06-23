import { useState, useRef } from "react";
import "./Minter.css";
import modelImage from "../../images/blob.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { BiErrorCircle } from "react-icons/bi";
import { mintNft } from "../../actions/SmartActions";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Minter() {
  const mintNFTBtnRef = useRef();
  const [nftQTY, setNftQty] = useState(1);
  const [model, setModel] = useState(false);
  const [nftHash, setNftHash] = useState("0xe693d5342ea38cba9e3999d94a462520705dcfd2");
  const [hashCopied, setHashCopied] = useState(false);
  const [error, setError] = useState({
    error: false,
    msg: "",
  });
  // ** Mint NFT button text
  const [btnText, setBtnText] = useState("Mint Now | 1");
  const updateCounter = (val) => {
    if (val >= 1 && val <= 5) {
      setNftQty(val);
    }
  };

  const handleNftMintBtn = () => {
    setBtnText("Minting...");
    mintNFTBtnRef.current.disabled = true;
  };
  const resetApplicationStates = () => {
    setHashCopied(false);
    setNftHash(null);
    setBtnText("Mint Now | 1");
    setError({ error: false, msg: "" });
  };
  const handleModel = (modelState) => {
    setModel(modelState);
    resetApplicationStates();
  };
  const closeError = () => {
    setError({ error: false, msg: "" });
  };
  const mintNFT = async () => {
    handleNftMintBtn();
    const nftResponse = await mintNft(nftQTY);
    if (nftResponse.code === 200) {
      console.log("success and hash is : " + nftResponse.message);
    } else {
      setBtnText("Mint Now | 1");
      setError({ error: true, msg: nftResponse.message });
    }
    // console.log("NFT Mint output : " + hex);
  };
  return (
    <section className="mint-section d-flex justify-around align-center">
      <div className="heading-section d-flex jusitfy flex-column f-gap-4">
        <div className="mint-heading d-flex justify-center align-center flex-column f-gap-2">
          <h1>Mint your NFT in seconds</h1>
          <h3>Get your NFT minted only for 1ETH</h3>
        </div>
        <div className="d-flex justify-center align-center">
          <button className="mint-btn" onClick={() => handleModel(true)}>
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
              <div className="nft-mint-btn d-flex align-center flex-column">
                <button
                  ref={mintNFTBtnRef}
                  className="mint-btn d-flex justify-center align-center"
                  onClick={mintNFT}
                >
                  {btnText} &nbsp; <FaEthereum />
                </button>

                {nftHash ? (
                  <div className="nftHashBox d-flex justify-between align-center f-gap-1">
                    <p>{nftHash.slice(0, 16)}...</p>
                    <CopyToClipboard
                      text={nftHash}
                      onCopy={() => setHashCopied(true)}
                    >
                      <button className="copy-hash-btn">
                        {hashCopied ? "Copied" : "Copy"}
                      </button>
                    </CopyToClipboard>
                  </div>
                ) : null}

                {error.error ? (
                  <div className="error-box d-flex justify-between align-center f-gap-4">
                    <div className="d-flex f-gap-1">
                      <BiErrorCircle className="error-icon error-caution-icon" />
                      <p className="error d-flex align-center justify-start">
                        {error.msg}
                      </p>
                    </div>

                    <button
                      className="error-close-btn d-flex align-center"
                      onClick={closeError}
                    >
                      <ImCross className="error-icon error-close-icon" />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
