import React, { useState } from 'react';
import {HomePage , HomePage2 , SearchPage , GigDetailsPage} from './pages';
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
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
