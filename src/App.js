import React from 'react';
import {HomePage , SearchPage , GigDetailsPage} from './pages';
import { Navbar, Footer } from './components';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

function App() {
  
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/gigdetails" component={GigDetailsPage} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
