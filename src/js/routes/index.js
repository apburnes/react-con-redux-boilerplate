import React from 'react';
import { Route } from 'react-router';

import App from '../containers/App.react';
import HomePage from '../containers/pages/HomePage.react';
import NotFoundPage from '../containers/pages/NotFound.react';
import ReadmePage from '../containers/pages/ReadmePage.react';


export default (
  <Route component={App}>
    <Route path="/" component={HomePage} />
    <Route path="/readme" component={ReadmePage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
