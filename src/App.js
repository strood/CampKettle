import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
// Example pages below that work with our below routes
import Story from './pages/Story';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AllCoffee from './pages/AllCoffee';
import Checkout from './pages/Checkout';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import Error from './pages/Error';
import Modal from './components/Modal';

// import components
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <Modal />
      <ScrollToTop />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/story'>
          <Story />
        </Route>
        <Route path='/coffee'>
          <AllCoffee />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='/shipping'>
          <Shipping />
        </Route>
        <Route path='/payment'>
          <Payment />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
