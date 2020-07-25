import React from 'react';
import { Dayjs } from 'dayjs';

import * as styles from './currentStatus.treat';
import { NotificationStatus } from '../../../../data/state';
import { LoadingIndicator } from '../../../shared';

interface CurrentStatusProps {
  status: NotificationStatus;
  error: string;
  lastFetched: Dayjs;
}

function LoadingStatus() {
  return (
    <div className={styles.loadingContainer}>
      <p className={styles.loadingText}> Loading...</p>
      <LoadingIndicator />
    </div>
  );
}

function ErrorStatus({ error }: { error: string }) {
  return (
    <div>
      <p>Error!</p>
      <p>{error}</p>
    </div>
  );
}

function LastSynced({ lastFetched }: { lastFetched: Dayjs }) {
  const lastFetchedFormatted = lastFetched.format('HH:mm:ss');
  return (
    <div className={styles.container}>
      <p className={styles.amount}> {lastFetchedFormatted} hs </p>
      <p className={styles.name}> Last synced </p>
    </div>
  );
}

function CurrentStatus({ status, error, lastFetched }: CurrentStatusProps) {
  const statusHandlers = {
    [NotificationStatus.Loading]: <LoadingStatus />,
    [NotificationStatus.Error]: <ErrorStatus error={error} />,
    [NotificationStatus.Succesful]: <LastSynced lastFetched={lastFetched} />,
    [NotificationStatus.NotStarted]: <h1>Not started!</h1>,
  };

  const handler = statusHandlers[status];
  if (handler) {
    return handler;
  }

  return null;
}

export { CurrentStatus };
