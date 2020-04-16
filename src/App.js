import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Search';
import Search from './components/Search';
import MoviePage from './components/MoviePage';
import ActorPage from './components/ActorPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/search' component={Landing} />
        <Route exact path='/search/?q=:query' component={Search} />
        <Route exact path='/titles/:id' component={MoviePage} />
        <Route exact path='/names/:id' component={ActorPage} />
      </Switch>
    </Router>
  );
};

export default App;
