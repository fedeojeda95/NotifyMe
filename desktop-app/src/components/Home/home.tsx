import React from 'react';

import * as styles from './home.treat';
import { CurrentStatus, PollingInterval, Items } from './components';
import { useNotifications } from '../../data/actions';
import { Divider } from '../shared';

function Home() {
  const { status, error, notifications, lastFetched } = useNotifications();

  const information = (
    <div className={styles.infoContainer}>
      <h1> Info </h1>
      <div className={styles.intervalContainer}>
        <PollingInterval />
      </div>
      <Divider className={styles.divider} />
      <div className={styles.statusContainer}>
        <CurrentStatus status={status} error={error} lastFetched={lastFetched} />
      </div>
    </div>
  );

  const itemsList = (
    <div className={styles.itemsContainer}>
      <Items notifications={notifications} />
    </div>
  );

  return (
    <div className={styles.container}>
      {itemsList}
      {information}
    </div>
  );
}

export { Home };
