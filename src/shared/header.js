
import { Link } from 'react-router-dom';
import logo from '../src/img/logo.png';

const Header = () => {


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
                                <a href="#home" className ="nav-link current">
                                    <div className ="triangle-right"></div>
                                    <i className ="fas fa-home nav-icon"></i>
                                    Accueil
                                </a>
                            </li>
                            <li className ="nav-item">
                                <a  className ="nav-link">
                                    <div className ="triangle-right"></div>
                                    <i className ="fas fa-tags nav-icon"></i>
                                    Nos produits
                                </a>


                                <ul className = "dropdown-content">
                                    <li >                                
                                        <a href="#advices">
                                            Conseils
                                        </a>
                                    </li>

                                    <li >                                
                                        <a href="#realisations">
                                            Réalisations
                                        </a>
                                    </li>

                                    <li >                                
                                        <a href="#shoponline">
                                            Boutique en ligne
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className ="nav-item">
                                <a href="#gallery" className ="nav-link">
                                    <div className ="triangle-right"></div>
                                    <i className ="fas fa-images nav-icon"></i>
                                    D'éco thérapie
                                </a>
                            </li>

                            <li className ="nav-item ">
                                <Link to="/boutique" className ="nav-link external">
                                    <div className ="triangle-right"></div>
                                    <i className ="fas fa-store nav-icon"></i>
                                    Boutique Dav'Home
                                </Link>
                            </li>
                            
                            <li className ="nav-item">
                                <a href="#contact" className ="nav-link">
                                    <div className ="triangle-right"></div>
                                    <i className ="fas fa-envelope nav-icon"></i>
                                    Contact
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                    
                </nav>
            </div>
    );
}

export default Header;