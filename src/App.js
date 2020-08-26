import React from 'react';
import { BrowserRouter as Router, Route , Redirect, Switch} from 'react-router-dom';

import Mission from './user/pages/Mission';
import Missile from './places/pages/Missile';
import MainNavigation from './shared/components/Navigation/MainNavigation';


const App = () => {
  return (
  <Router>
    <MainNavigation />
    <main>
    <Switch>
      <Route path = "/" exact>
          <Mission />
      </Route>
      <Route path="/:value/Successful_Launch" exact>
          <Missile />
          </Route>
      <Redirect to="/"  />
      </Switch>
      </main>
  </Router>
  );
};

export default App;
