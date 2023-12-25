import React, { useState } from 'react';
import {HomePage , HomePage2 , SearchPage , GigDetailsPage , BecomeASellerPage , Seller2 , Seller3, SellerInformationPage} from './pages';
import { Navbar,Navbar2, Footer } from './components';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import ProfilePage from './components/ProfilePage/Profilepage';
// import Brief1 from './components/Brief/Brief1';
import BriefContainer from './components/Brief/BriefContainer';


function App() {

  

  return (
    <Router>
    
        <Switch>
          <Route path="/" exact component={HomePage2} />
          <Route path="/dashboard" exact component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/gigdetails" component={GigDetailsPage} />
          <Route path="/profilepage" component={ProfilePage} />
          <Route path="/brief1" component={BriefContainer} />
        
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
