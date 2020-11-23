import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
// Example pages below that work with our below routes
import About from './pages/About';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AllCoffee from './pages/AllCoffee';
import SingleCoffee from './pages/SingleCoffee.js';
import Error from './pages/Error';

// import components
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <Router>
      <Navbar />
      <SideMenu />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/coffee'>
          <AllCoffee />
        </Route>
        <Route path='/coffee/:id'>
          <SingleCoffee />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
