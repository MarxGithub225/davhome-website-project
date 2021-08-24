
import paralax2 from '../src/img/img-02.jpg';

const Advice =  () => {
    return (
        <div className ="tm-section-wrap">
                    <div className ="tm-parallax" data-parallax="scroll" data-image-src={paralax2}></div>
                    <section id="advices" className ="tm-section">
                        <h2 className ="tm-text-primary">CONSEILS</h2>
                        <hr className ="mb-5" />
                        
                        <div className ="row tm-row-home">                            
                            <div className ="tm-col-home tm-col-home-l">
                                <div className ="media mb-4">
                                    {/* <i className ="fas fa-scroll fa-4x tm-post-icon tm-text-primary"></i> */}
                                    <div className ="media-body">
                                    <ul>
                                            <li>Book Déco</li>
                                            <li>Diagnostique conseil avant</li>
                                            <li>Achat</li>
                                            <li>D’ECOTHERAPIE</li>
                                          </ul>
                                    </div>                                    
                                </div>
                                
                                
                            </div>
                            
                        </div>
                        
                    </section>
                </div>
    );
}

export default Advice;