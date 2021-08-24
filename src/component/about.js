
import paralax1 from '../src/img/img-01.jpg';

const methods = [
    {title: 'écoute'},
    {title: 'conseils'},
    {title: 'Réalisation'}
];

const About =  () => {
    return (
        <div className ="tm-section-wrap">
        <div className ="tm-parallax" data-parallax="scroll" data-image-src={paralax1}></div>                   
        <section id="home" className ="tm-section">
            <h2 className ="tm-text-primary">A PROPOS DE DAV’HOME</h2>
            <hr className ="mb-5" />
            <div className ="row">
                <div className ="col-lg-6 tm-col-home mb-4">
                    <div className ="tm-text-container">
                                                       
                        <p>
                        DAV’HOME est une entreprise
                        d’art intérieur basée à Abidjan,
                        qui crée des ambiances et 
                        décos qui aide enfant 
                        et adulte à bien se sentir.
                        </p>

                        <div className = "method">
                              <div className ="methodTitle">Notre méthode:</div>

                              <div className = "methoList">
                                    {methods.map((meth, index) => {
                                      return (
                                        <div className = "methodItem" key = {index}>
                                          <div className = "methIcon">
                                            <i className = "fa fa-caret-right"></i>
                                          </div>
                                          <div className = "methTitle"> {meth.title}</div>
                                        </div>
                                      )
                                    })}
                                    
                              </div>
                        </div>
                        
                    </div>                                
                </div>
                <div className ="col-lg-6 tm-col-home mb-4">
                    <div className ="tm-text-container">
                                                       
                        <p>
                        Avec nous, c’est la créativité, 
                        qualité/prix, prestation 
                        sur-mésure, relation clients.
                        </p>

                        <p>
                        Boutique en ligne d’objets 
                        recyclés
                        </p>

                        <p>
                        Utilisation de produits non 
                        nocifs pour l’environnement
                        </p>
                        {/* <div className ="text-right">
                            <a href="#gallery" className ="btn btn-primary tm-btn-next">Next Page</a>
                        </div>                                     */}
                    </div>
                </div>
            </div>
            {/* <hr className ="tm-hr-short mb-5" />

            <h5 href="#" className ="d-block mb-2 tm-text-primary tm-post-link">NOTRE EQUIPE</h5>
            <div className ="mt-5">
                <div className ="tm-carousel">
                    <div className ="tm-carousel-item">
                        <figure className ="effect-honey mb-4">
                            <img src={user} alt="Featured Item" />
                            <figcaption>
                                <ul className ="tm-social">
                                    <li><a href="https://facebook.com" className ="tm-social-link"><i className ="fab fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com" className ="tm-social-link"><i className ="fab fa-twitter"></i></a></li>
                                    <li><a href="https://instagram.com" className ="tm-social-link"><i className ="fab fa-instagram"></i></a></li>
                                </ul>
                            </figcaption>
                        </figure>
                        <div className ="tm-about-text">
                            <h3 className ="mb-3 tm-text-primary tm-about-title">Calvin Walk</h3>
                            <p>Aliquam efficitur, velit ut aliquet molestie, nulla dolor faucibus neque, quis hendrerit.</p>
                            <h4 className ="tm-text-secondary tm-about-subtitle">Founder and CEO</h4>
                        </div>
                    </div>
                    
                    <div className ="tm-carousel-item">
                        <figure className ="effect-honey mb-4">
                            <img src={user} alt="Featured Item" />
                            <figcaption>
                                <ul className ="tm-social">
                                    <li><a href="https://facebook.com" className ="tm-social-link"><i className ="fab fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com" className ="tm-social-link"><i className ="fab fa-twitter"></i></a></li>
                                    <li><a href="https://instagram.com" className ="tm-social-link"><i className ="fab fa-instagram"></i></a></li>
                                </ul>
                            </figcaption>
                        </figure>
                        <div className ="tm-about-text">
                            <h3 className ="mb-3 tm-text-primary tm-about-title">Jenifer Soft</h3>
                            <p>This is a carousel for a list of 10 team members. Each member image hover has 3 social icons.</p>
                            <h4 className ="tm-text-secondary tm-about-subtitle">Managing Director</h4>
                        </div>
                    </div>

                    <div className ="tm-carousel-item">
                        <figure className ="effect-honey mb-4">
                        <img src={user} alt="Featured Item" />
                            <figcaption>
                                <ul className ="tm-social">
                                    <li><a href="https://facebook.com" className ="tm-social-link"><i className ="fab fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com" className ="tm-social-link"><i className ="fab fa-twitter"></i></a></li>
                                    <li><a href="https://instagram.com" className ="tm-social-link"><i className ="fab fa-instagram"></i></a></li>
                                </ul>
                            </figcaption>
                        </figure>
                        <div className ="tm-about-text">
                            <h3 className ="mb-3 tm-text-primary tm-about-title">David Rock</h3>
                            <p>Aliquam efficitur, velit ut aliquet molestie, nulla dolor faucibus neque, quis hendrerit.</p>
                            <h4 className ="tm-text-secondary tm-about-subtitle">Financial Officer</h4>
                        </div>
                    </div>

                    <div className ="tm-carousel-item">
                        <figure className ="effect-honey mb-4">
                        <img src={user} alt="Featured Item" />
                            <figcaption>
                                <ul className ="tm-social">
                                    <li><a href="https://facebook.com" className ="tm-social-link"><i className ="fab fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com" className ="tm-social-link"><i className ="fab fa-twitter"></i></a></li>
                                    <li><a href="https://instagram.com" className ="tm-social-link"><i className ="fab fa-instagram"></i></a></li>
                                </ul>
                            </figcaption>
                        </figure>
                        <div className ="tm-about-text">
                            <h3 className ="mb-3 tm-text-primary tm-about-title">Calvin Second</h3>
                            <p>Aliquam efficitur, velit ut aliquet molestie, nulla dolor faucibus neque, quis hendrerit.</p>
                            <h4 className ="tm-text-secondary tm-about-subtitle">Senior Director</h4>
                        </div>
                    </div>
                    
                    <div className ="tm-carousel-item">
                        <figure className ="effect-honey mb-4">
                        <img src={user} alt="Featured Item" />
                            <figcaption>
                                <ul className ="tm-social">
                                    <li><a href="https://facebook.com" className ="tm-social-link"><i className ="fab fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com" className ="tm-social-link"><i className ="fab fa-twitter"></i></a></li>
                                    <li><a href="https://instagram.com" className ="tm-social-link"><i className ="fab fa-instagram"></i></a></li>
                                </ul>
                            </figcaption>
                        </figure>
                        <div className ="tm-about-text">
                            <h3 className ="mb-3 tm-text-primary tm-about-title">Jenifer Second</h3>
                            <p>This is a carousel for a list of 10 team members. Each member image hover has 3 social icons.</p>
                            <h4 className ="tm-text-secondary tm-about-subtitle">Accounting Officer</h4>
                        </div>
                    </div>

                    <div className ="tm-carousel-item">
                        <figure className ="effect-honey mb-4">
                        <img src={user} alt="Featured Item" />
                            <figcaption>
                                <ul className ="tm-social">
                                    <li><a href="https://facebook.com" className ="tm-social-link"><i className ="fab fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com" className ="tm-social-link"><i className ="fab fa-twitter"></i></a></li>
                                    <li><a href="https://instagram.com" className ="tm-social-link"><i className ="fab fa-instagram"></i></a></li>
                                </ul>
                            </figcaption>
                        </figure>
                        <div className ="tm-about-text">
                            <h3 className ="mb-3 tm-text-primary tm-about-title">David Second</h3>
                            <p>Aliquam efficitur, velit ut aliquet molestie, nulla dolor faucibus neque, quis hendrerit.</p>
                            <h4 className ="tm-text-secondary tm-about-subtitle">Financial Assistant</h4>
                        </div>
                    </div>
                    
                </div>
            </div> */}
        </section>
    </div>
    );
}

export default About;