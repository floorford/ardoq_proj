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

const App = () => {
  const home = (
    <section className='home'>
      <h3>Thanks for the oppurtunity to work on this task!</h3>
      <p>A little explanation on what's before you:</p>
      <p>
        Libraries used:
        <ul>
          <li>Axios for API requests</li>
          <li>ReactRouter for in-app navigation</li>
          <li>Font Awesome for some iconisation</li>
          <li>Google fonts</li>
        </ul>
      </p>
    </section>
  );

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
