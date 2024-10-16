import AshesiLogo from "../images/ashesi-logo.png"
import { ShoppingCartIcon } from "./Icons"

export function Navbar() {

    return (
        <nav className="navbar">
            <img className="ashesi-logo" src={AshesiLogo}/>
            
            <div className="header-links">
                <button className="oswald-regular">Sports</button>
                <button className="oswald-regular">Events</button>
                <button className="oswald-regular">Recruiting</button>
                <button className="oswald-regular">Awards</button>
                <button className="oswald-regular">Athletes</button>
                <button 
                    className="oswald-regular" 
                    onClick={() => window.open('https://ksgoli02.wixstudio.io/elevate-sports', '_blank')}
                >About</button>
            </div>

            <button className="shop">
                <h2 className="shop-text oswald-regular">Shop</h2>
                <ShoppingCartIcon />
            </button>
            


        </nav>
    )
}

export default Navbar