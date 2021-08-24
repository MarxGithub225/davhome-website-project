import React from "react";
import {setOrder} from "./actions";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


import { Modal, Button } from "react-bootstrap";
import { useState } from 'react';


import Header2 from "../../shared/header2";

import { connect } from "react-redux";
import {useDispatch} from "react-redux";


import url from '../../env.js';

const baseUrl = url.replace('/routes', '');


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const Shop = (props) =>{

    const initial = {
    lastname : "",
    firstname : "",
    phone : "",
    address : "",
    email : "",
    date : new Date().getTime()
  };


    const [product, setProduct] = useState(null);
    const [order, makeOrder] = useState(initial);
    const [open, setOpen] = useState(false);
    const [modalOpened, setModal] = useState(false);


    const dispatch = useDispatch();

      const handleInputChange = event => {
        const { name, value } = event.target;
        makeOrder({ ...order, [name]: value });
      };



      const save = (e) => {
        e.preventDefault();

        const data = {...order, amount: product.price, item: product.libelle};

        dispatch(setOrder(data));
        
        setTimeout(() => {
          setOpen(true);
          setModal(false);
          makeOrder(initial)
        }, 2000);

        setTimeout(() => {
          setOpen(false);
        }, 7000);
      };

    return (

        <div className ="tm-section-wrap2">

<Snackbar open={open} autoHideDuration={6000} onClose={() => {setOpen(false)}}>
        <Alert onClose={() => {setOpen(false)}} severity="success">
         <p style = {{color: '#fff'}}> Votre commande a été prise en compte, nous vous contacterons afin de la finaliser.</p>
        </Alert>
      </Snackbar>


       <Modal show={modalOpened} onHide={() =>{setModal (false);}}>
        <Modal.Header closeButton>
          <Modal.Title>Passer une commande</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <div className="form-wrap">
            <form className="form"  onSubmit={save}>
            <div className="row">
              

              <div className="col-lg-12 form-group">

                  <input
                  placeholder="Nom"  
                  className="common-input mb-20 form-control" 
                  id="lastname"
                  required
                  value={order.lastname}
                  onChange={handleInputChange}
                  name="lastname"
                  type="text" />

              </div>

              <div className="col-lg-12 form-group">

                  <input
                  placeholder="Prénoms"  
                  className="common-input mb-20 form-control" 
                  id="firstname"
                  required
                  value={order.firstname}
                  onChange={handleInputChange}
                  name="firstname"
                  type="text" />

              </div>

              <div className="col-lg-12 form-group">

                  <input
                  placeholder="E-mail"  
                  className="common-input mb-20 form-control" 
                  id="email"
                  required
                  value={order.email}
                  onChange={handleInputChange}
                  name="email"
                  type="email" />

              </div>


              <div className="col-lg-12 form-group">

                  <input
                  placeholder="Adresse"  
                  className="common-input mb-20 form-control" 
                  id="address"
                  required
                  value={order.address}
                  onChange={handleInputChange}
                  name="address"
                  type="text" />

              </div>


              <div className="col-lg-12 form-group">

                <input
                placeholder="Téléphone"  
                className="common-input mb-20 form-control" 
                id="phone"
                required
                value={order.phone}
                onChange={handleInputChange}
                name="phone"
                type="text" />

              </div>
            <div className="col-md-12">
            <div className="input-group dates-wrap">
            <button className="btn btn-success btn-block" type ="submit">Commander</button>
            </div>
            </div>
            </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="secondary" onClick={() =>{setModal (false);}}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

            <div className ="container-fluid">
                <div className ="row">
                    <Header2/>

                    <div className ="tm-main" >
                    <section id="gallery" className ="tm-section">
                        <h2 className ="tm-text-primary">BOUTIQUE DAV'HOME</h2>
                        <hr className ="mb-5" />
                
                
                <div className ="tm-gallery  tm-gallery-mod" >

                {
                props.shop.map((data) => {
                        return (

                                <figure className ="effect-honey tm-gallery-item portrait" key = {data.id}
                                onClick = {() => {setProduct(data); setModal(true)}}
                                >
                                    <img src={baseUrl + data.link} alt="Image"/>
                                    <figcaption>
                                        <h2>
                                            <i>
                                        
                                        
                                        {data.libelle}
                                        <br/>
                                        <button className ="btn btn-warning">ACHETER</button>
                                        </i>
                                        </h2>					
                                    </figcaption>
                                </figure>

                    );
                    })
                    }
                    
                    
                </div>
            </section>
                    </div>


                </div>
            </div>
        </div>
    );
}
  

const mapStateToProps = state => {
    const shop = state.storeReducer;


    console.log(shop)
    return { 
        shop: shop.shop
    };
  };
  
  export default connect(mapStateToProps) (Shop);