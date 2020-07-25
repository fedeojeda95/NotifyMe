import React from 'react';
import { HashRouter } from 'react-router-dom';

import { Navigation as HomeNavigation } from '../Home';

function Navigation() {
  return <HashRouter>{HomeNavigation()}</HashRouter>;
}

export { Navigation };
