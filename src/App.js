import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Search from './components/Search';
import MoviePage from './components/MoviePage';
import ActorPage from './components/ActorPage';
import SearchResult from './components/SearchResult';

const App = () => {
  return (
    <Router history={history}>
      <Search />
      <Switch>
        <Route exact path='/search?=q:query' component={SearchResult} />
        <Route exact path='/titles/:id' component={MoviePage} />
        <Route exact path='/names/:id' component={ActorPage} />
      </Switch>
    </Router>
  );
};

export default App;
