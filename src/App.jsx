import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from '../src/components/index.js';
import { Home, About, Projects, Contact } from './pages/index.js';

function App() {
    return (
            <>
              <Router>
                <Navbar/>
                <Footer/>
                <Switch>
                  <Route path="/About">
                    <About/>
                    </Route>
                    
                    <Route path="/Projects">
                      <Projects/>
                      </Route>

                      <Route path="/Contact">
                    <Contact/>
                    </Route>
                  
                  <Route exact path="/">
                    <Home/>
                  </Route>
                </Switch>
              </Router>
            </>
  );
}
export default App;
