import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/BodyComponent/Home';
import Resume from './Components/BodyComponent/Resume';
import Contact from './Components/BodyComponent/Contact';
import {NoMatch} from './Components/BodyComponent/NoMatch';
//import Logo from './Components/HeaderComponent/Logo';
//import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import NavBar from './Components/HeaderComponent/NavBar';
import Footer from './Components/FooterComponent/Footer';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path ="/" component={Home}/>
          <Route exact path ="/Resume" component={Resume}/>
          <Route exact path ="/Contact" component={Contact}/>
          <Route component={NoMatch}/>
        </Switch>
        <Footer></Footer>
      </Router>
    </React.Fragment>
  );
}

export default App;
