import React from 'react';
import * as styles from './home.treat';
import { NotificationItem } from './components';
import { useNotifications } from '../../data/actions';
import { NotificationStatus } from '../../data/state';
import { GithubNotification } from '../../data/models';

function Home() {
  const { status, error, notifications } = useNotifications();

  console.log(status);
  console.log(error);
  console.log(notifications);

  if (status === NotificationStatus.Loading) {
    return <h1>Loading...</h1>;
  }

  if (status === NotificationStatus.Error) {
    return (
      <div>
        <h1>Error!</h1>
        <h2>{error}</h2>
      </div>
    );
  }

  const items = notifications.map((notification: GithubNotification) => (
    <NotificationItem key={notification.id} notification={notification} />
  ));
  return <div className={styles.container}>{items}</div>;
}

export { Home };
