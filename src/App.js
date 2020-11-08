import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";

import "./css/style.css";

import MaxProductCalculator from "./components/MaxProductCalculator";
import OsloBikes from "./components/OsloBikes";
import FourOhFour from "./components/FourOhFour";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <header>
        <h1>
          <Link to='/'>Ardoq Project</Link>
        </h1>
        <nav>
          <ul className='menu'>
            <li>
              <NavLink activeClassName='active' to='/calculator'>
                <i className='fas fa-calculator'></i>
                <span>Max Product Calculator</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/oslobikes'>
                <i className='fas fa-bicycle'></i>
                <span>Oslo Bikes</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path='/' exact render={() => <Home />} />
        <Route
          path='/calculator'
          exact
          render={() => <MaxProductCalculator />}
        />
        <Route path='/oslobikes' exact render={() => <OsloBikes />} />
        <FourOhFour />
      </Switch>
    </Router>
  );
};

export default App;
