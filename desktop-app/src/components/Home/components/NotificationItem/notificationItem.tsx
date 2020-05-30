import React from 'react';

import * as styles from './notificationItem.treat';
import { GithubNotification } from '../../../../data/models';

interface NotificationItemProps {
  notification: GithubNotification;
}

function NotificationItem({ notification }: NotificationItemProps) {
  return (
    <div className={styles.container}>
      <p>{notification.url}</p>
      <p>{notification.reason}</p>
      <p>{notification.subject.title}</p>
      <p>{notification.subject.type}</p>
      <p>{notification.unread}</p>
    </div>
  );
}

export { NotificationItem };
