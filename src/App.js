import React from 'react';

import { Helmet } from 'react-helmet';
import { Redirect, BrowserRouter, Route, Switch  } from 'react-router-dom';
// import { Redirect } from 'react-router';

import home from './components/home';

function AppRoutes() {
  return (
    <Switch>
      {/* <Route exact path="*" component={NotFound} /> */}
      <Route exact path="/" component={home} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  );
}

export default function App() {
  return (
    <React.Fragment>
      <Helmet>
        <title>VideoCutTool</title>
      </Helmet>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </React.Fragment>
  );
}
