
import paralax6 from '../src/img/img-06.jpg';

const Contact =  () => {
    return (
        <div className ="tm-section-wrap">
                    <div className ="tm-parallax" data-parallax="scroll" data-image-src={paralax6}></div>
                    <div id="contact" className ="tm-section">
                        <h2 className ="tm-text-primary">Contact</h2>
                        <hr className ="mb-5" />
                        <div className ="row">
                            
                            <div className ="col-xl-12 tm-contact-col-r">

                                <div className ="mapouter mb-4">
                                    <div className ="gmap_canvas">
                                        <iframe width="100%" height="520" id="gmap_canvas"
                                            src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                    </div>
                                </div>
            

                                <address className ="mb-4">
                                    Côte d'Ivoire<br />
                                    Abidjan<br />
                                </address>
            

                                <ul className ="tm-contact-links mb-4">
                                    <li className ="mb-2">
                                        <a href="tel:+225 07 89 87 87 05">
                                            <i className ="fas fa-phone mr-2 tm-contact-link-icon"></i>
                                            +225 07 89 87 87 05
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:davhomepourvous@gmail.com">
                                            <i className ="fas fa-at mr-2 tm-contact-link-icon"></i>
                                            davhomepourvous@gmail.com
                                        </a>
                                    </li>
                                </ul>
                                {/* <ul className ="tm-contact-social">
                                    <li><a href="https://fb.com/templatemo" className ="tm-social-link"><i className ="fab fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com" className ="tm-social-link"><i className ="fab fa-twitter"></i></a></li>
                                    <li><a href="https://instagram.com" className ="tm-social-link"><i className ="fab fa-instagram"></i></a></li>
                                    <li><a href="https://youtube.com" className ="tm-social-link"><i className ="fab fa-youtube"></i></a></li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default Contact;