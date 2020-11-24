import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
// Example pages below that work with our below routes
import Story from './pages/Story';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AllCoffee from './pages/AllCoffee';
import SingleCoffee from './pages/SingleCoffee.js';
import Error from './pages/Error';
import Footer from './components/Footer';

// import components

// Force scroll to top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/story'>
          <Story />
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
