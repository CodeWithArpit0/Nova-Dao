import Navbar from "../Navbar/Navbar";
import LandingPage from "../Landing Page/LandingPage";
import './Header.css';

export default function Header(){
    
    return(
        <header className="header">
            <Navbar/>
            <LandingPage/>
        </header>
    );
}