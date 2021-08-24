
import paralax5 from '../src/img/img-05.jpg';

import portrait1 from '../src/img/gallery/1.png';
import portrait2 from '../src/img/gallery/2.png';
import portrait3 from '../src/img/gallery/3.png';
import portrait4 from '../src/img/gallery/4.png';

const Galery =  () => {
    return (
        <div className ="tm-section-wrap">
        <div className ="tm-parallax" data-parallax="scroll" data-image-src={paralax5}></div>                   
        <section id="gallery" className ="tm-section">
            <h2 className ="tm-text-primary">D’ECO THERAPIE</h2>
            <hr className ="mb-5" />
            <p>
            D’éco thérapie est un art intérieur 
            créé par DAV’HOME qui vous aide 
            à mieux appréhender votre vie 
            émotionnelle par les couleurs et les motifs qui vous entourent au 
            quotidien.
            </p>
            <div className ="tm-gallery">
                <figure className ="effect-honey tm-gallery-item portrait">
                    <img src={portrait1} alt=""/>
                            
                </figure>
                <figure className ="effect-honey tm-gallery-item building">
                    <img src={portrait2} alt=""/>
                            
                </figure>  
                <figure className ="effect-honey tm-gallery-item nature">
                    <img src={portrait3} alt=""/>
                            
                </figure>
                <figure className ="effect-honey tm-gallery-item animal">
                    <img src={portrait4} alt=""/>
                                
                </figure> 
                
            </div>
        </section>
    </div>
    );
}

export default Galery;