
import paralax3 from '../src/img/img-03.jpg';

const Realisation =  () => {
    return (
        <div className ="tm-section-wrap">
                    <div className ="tm-parallax" data-parallax="scroll" data-image-src={paralax3}></div>
                    <section id="realisations" className ="tm-section">
                        <h2 className ="tm-text-primary">REALISATIONS</h2>
                        <hr className ="mb-5" />
                        
                        <div className ="row tm-row-home">                            
                            <div className ="tm-col-home tm-col-home-l">
                               
                                <div className ="media mb-4">
                                    {/* <i className ="fas fa-cloud-sun fa-4x tm-post-icon tm-text-primary"></i> */}
                                    <div className ="media-body">
                                        
                                    <   ul>
                                            <li>Simulation 3D</li>
                                            <li>Home staging</li>
                                            <li>Prestation complète</li>
                                          </ul>
                                        
                                    </div>                                    
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </section>
                </div>
    );
}

export default Realisation;