import React from 'react';
import { GithubNotification } from '../../../../data/models';
import { NotificationItem } from './NotificationItem';
import * as styles from './items.treat';

interface ItemsProps {
  notifications: GithubNotification[];
}

function EmptyNotifications() {
  return <p>No notifications yet!</p>;
}

function Items({ notifications }: ItemsProps) {
  const notificationsAreEmpty = notifications.length === 0;
  if (notificationsAreEmpty) {
    return <EmptyNotifications />;
  }

  const items = notifications.map((notification: GithubNotification) => (
    <NotificationItem key={notification.id} notification={notification} />
  ));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Notifications</h1>
      {items}
    </div>
  );
}

export { Items };
