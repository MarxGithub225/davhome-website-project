
import paralax4 from '../src/img/img-04.jpg';

const Shoponline =  () => {
    return (
        <div className ="tm-section-wrap">
                    <div className ="tm-parallax" data-parallax="scroll" data-image-src={paralax4}></div>
                    <section id="shoponline" className ="tm-section">
                        <h2 className ="tm-text-primary">BOUTIQUE EN LIGNE</h2>
                        <hr className ="mb-5" />
                        
                        <div className ="row tm-row-home">                            
                            <div className ="tm-col-home tm-col-home-l">
                                
                                
                                <div className ="media mb-4">
                                    {/* <i className ="fas fa-dove fa-4x tm-post-icon tm-text-primary"></i> */}
                                    <div className ="media-body">
                                        <p>
                                        Nous donnons une seconde vie 
                                        à vos objets  de déco ou petit 
                                        mobilier qui ne vous servent 
                                        plus, abimés.

                                        
                                        </p>

                                        <p>
                                          Nous achetons !!! Appelez nous !
                                        </p>
                                    </div>                                    
                                </div>
                            </div>
                            
                        </div>
                        
                    </section>
                </div>
    );
}

export default Shoponline;