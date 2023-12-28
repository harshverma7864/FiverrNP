import React, { useState , useEffect} from 'react';
import {HomePage , HomePage2 , SearchPage , GigDetailsPage , BecomeASellerPage , Seller2 , Seller3, SellerInformationPage, RequestPage1, RequestPage2} from './pages';
import { Navbar,Navbar2, Footer } from './components';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import ProfilePage from './components/ProfilePage/Profilepage';
// import Brief1 from './components/Brief/Brief1';
import BriefContainer from './components/Brief/BriefContainer';


function App() {
  useEffect(() => {
    // Function to clear cookies and local storage
    const clearDataOnTabClose = () => {
      // Clear local storage
      window.localStorage.clear();

      // Clear cookies
      document.cookie.split(";").forEach((cookie) => {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;`;
      });
    };

    // Attach the function to the beforeunload event
    window.addEventListener('beforeunload', clearDataOnTabClose);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', clearDataOnTabClose);
    };
  }, []);
  

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
          <Route path="/requests" component={RequestPage1} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
