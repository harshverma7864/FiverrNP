import React from 'react';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import { Navbar, Footer } from './components';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

function App() {
  
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" component={SearchPage} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
