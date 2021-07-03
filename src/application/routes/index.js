import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from 'application/components/Layout';
import Login from 'pages/login';

const AppRouter = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </Layout>
  </Router>
);

export default AppRouter;
