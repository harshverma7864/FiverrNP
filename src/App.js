import React, { useState } from 'react';
import {HomePage , HomePage2 , SearchPage , GigDetailsPage , BecomeASellerPage , Seller2 , Seller3, SellerInformationPage} from './pages';
import { Navbar,Navbar2, Footer } from './components';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

function App() {

  

  return (
    <Router>
    
        <Switch>
          <Route path="/" exact component={HomePage2} />
          <Route path="/dashboard" exact component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/gigdetails" component={GigDetailsPage} />
          <Route path="/becomeAseller" component={BecomeASellerPage} />
          <Route path="/becomeAseller2" component={Seller2} />
          <Route path="/becomeAseller3" component={Seller3} />
          <Route path="/profileInfo" component={SellerInformationPage} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
