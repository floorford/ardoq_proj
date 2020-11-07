import React from "react";
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";

import "./css/style.css";

import MaxProductCalculator from "./components/MaxProductCalculator";
import OsloBikes from "./components/OsloBikes";
import FourOhFour from "./components/FourOhFour";

const App = () => {
  const home = <div>Bye</div>;

  return (
    <Router>
      <header>
        <h1>Ardoq Project</h1>
        <nav>
          <ul className='menu'>
            <li>
              <NavLink activeClassName='active' to='/calculator'>
                <i className='fi-list'></i>
                <span>Max Product Calculator</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/oslobikes'>
                <i className='fi-list'></i>
                <span>Oslo Bikes</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path='/' exact render={() => home} />
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
