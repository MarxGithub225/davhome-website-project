
import { Link } from 'react-router-dom';
import logo from '../src/img/logo.png';

const Header2 = () => {


    return (
        <div id="tm-sidebar" className ="tm-sidebar"> 
                <nav className ="tm-nav">
                    <button className ="navbar-toggler" type="button" aria-label="Toggle navigation">
                        <i className ="fas fa-bars"></i>
                    </button>
                    <div>
                        <div className ="tm-brand-box">
                          <img src={logo} alt="Featured Item" width = "190" />
                        </div>                
                        <ul id="tm-main-nav">
                            <li className ="nav-item">                                
                                <a href="/" className ="nav-link current external">
                                    <div className ="triangle-right"></div>
                                    <i className ="fas fa-home nav-icon"></i>
                                    Accueil
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                    
                </nav>
            </div>
    );
}

export default Header2;