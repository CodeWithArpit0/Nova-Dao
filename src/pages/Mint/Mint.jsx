import Navbar from "../../components/Navbar/Navbar";
import Minter from "../../components/Minter/Minter";
import Footer from "../../components/Footer/Footer";
import './mint.css';

export default function Mint(){
    return(
        <div className="mint-main">
            <Navbar/>
            <Minter/>
            <Footer/>
        </div>
    );
}