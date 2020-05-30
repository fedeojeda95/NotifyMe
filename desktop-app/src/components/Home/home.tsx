import React from 'react';
import * as styles from './home.treat';
import { NotificationItem } from './components';
import { useNotifications } from 'data/actions';
import { GithubNotification } from 'data/models';

function Home() {
  const { status, error, notifications } = useNotifications();

  const items = notifications.map((notification: GithubNotification) => (
    <NotificationItem notification={notification} />
  ));
  return <div className={styles.container}>{items}</div>;
}

export { Home };
