import React from "react";

import About from '../../component/about';
import Advice from '../../component/advice';
import Realisation from '../../component/realisation';
import Shoponline from '../../component/shoponline';
import Galery from '../../component/galery';
import Contact from '../../component/contact';
import Footer from '../../shared/footer';
import Header from "../../shared/header";

function Home() {

    return (
        <div className ="container-fluid">
            <div className ="row">
                <Header/>

                <div className ="tm-main">
                
                <About/>
                <Advice/>
                <Realisation/>
                <Shoponline/>
                <Galery/>
                <Contact/>
                <Footer/>
                </div>


            </div>
        </div>
            
    );
}
  

export default Home;