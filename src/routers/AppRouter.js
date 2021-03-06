import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import User from '../components/User';
import NavBar from '../components/NavBar';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <Fragment>
      <NavBar/>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/user/:login" component={User} />
        <Route component={NotFoundPage} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default AppRouter;
