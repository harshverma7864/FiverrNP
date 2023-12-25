import React from 'react';
import {HomePage , SearchPage , GigDetailsPage} from './pages';
import { Navbar, Footer } from './components';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import ProfilePage from './components/ProfilePage/Profilepage';
// import Brief1 from './components/Brief/Brief1';
import BriefContainer from './components/Brief/BriefContainer';


function App() {
  
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/gigdetails" component={GigDetailsPage} />
          <Route path="/profilepage" component={ProfilePage} />
          <Route path="/brief1" component={BriefContainer} />
        
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
