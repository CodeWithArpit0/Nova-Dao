import "./About.css";
import aboutImg from "../../images/raghav1.png";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-wrapper d-flex justify-evenly align-center">
        <div className="about-image">
          <div className="about-img-wrapper">
            <img src={aboutImg} alt="About Image" />
          </div>
        </div>

        <div className="about-content d-flex flex-column">
          <div className="about-heading">
            <h1>How does the Nova Doa works?</h1>
          </div>
          <div className="about-text">
            <p>
              We’re a DAO governed Grants Network & incubation platform for Web3
              builders. $NOVA is used to fractionalize our treasury. These
              tokens can be burned in order to direct treasury funds to back
              chosen builders. $NOVA is earned by staking our NFTs and will also
              be available on DEXs. Our 3 main aims are:
            </p>
          </div>
          <div className="about-text-list d-flex flex-column">
            <ul className="d-flex flex-column">
              <li>
                Bring early opportunities to all in an equal and permissionless
                manner.
              </li>
              <li>
                Use community and network in order to aid founders & develop
                projects.
              </li>
              <li>
                Create tangible frameworks for feasible DAO governance of future
                projects.
              </li>
            </ul>
          </div>
          <div className="about-btns d-flex">
            <button className="whitepaper-btn about-btn">Whitepaper</button>
            <button className="novanomics-btn about-btn">Novanomics</button>
          </div>
        </div>
      </div>
    </section>
  );
}
