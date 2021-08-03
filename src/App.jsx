import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from '../src/components/index.js';
import { Home, About, Projects, Contact } from './pages/index.js';

function App () {
    return (
            <>
              <Router>
                <Navbar/>
                <Switch>

                  <Route path="/about">
                    <About/>
                    </Route>
                    
                    <Route path="/projects">
                      <Projects/>
                      </Route>

                      <Route path="/contact">
                    <Contact/>
                    </Route>
                  
                  <Route exact path="/">
                    <Home/>
                  </Route>
                  
                </Switch>
                <Footer/>
              </Router>
            </>
  );
}
export default App;
