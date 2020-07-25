import React from 'react';
import * as styles from './pollingInterval.treat';

function PollingInterval() {
  return (
    <div className={styles.container}>
      <p className={styles.amount}> 5 minutes</p>
      <p className={styles.name}> Polling interval </p>
    </div>
  );
}

export { PollingInterval };
