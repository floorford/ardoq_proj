import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

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
          <ul>
            <li>
              <Link to='/calculator'>Max Product Calculator</Link>
            </li>
            <li>
              <Link to='oslobikes'>Oslo Bikes</Link>
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
