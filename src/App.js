import React, { useEffect, useCallback } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

  import './App.css';
import Home from "./modules/home";
import Shop from "./modules/shop";

import {getStore} from './modules/shop/actions';
import { useDispatch } from "react-redux";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const dispatch = useDispatch();


  const fetchStore = useCallback(() => {
    dispatch(getStore());
  }, []);


  useEffect(() => {

    window.scroll(0,0);
    
    fetchStore();

  }, [fetchStore]);

  return (
    <Router>
      <div className="App">

        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/boutique' component={Shop}></Route>
        </Switch>

        
      </div>
    </Router>
  );
}

export default App;
