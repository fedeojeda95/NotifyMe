import React from 'react';
import { Route } from 'react-router';

import { Home } from '../home';

function Navigation() {
  return <Route exact path="/" component={Home} />;
}

export { Navigation };
