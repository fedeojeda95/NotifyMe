import * as React from 'react';

import { Navigation } from './components';
import { NotificationsProvider } from './data/state';

function App() {
  return (
    <NotificationsProvider>
      <Navigation />
    </NotificationsProvider>
  );
}

export default App;
