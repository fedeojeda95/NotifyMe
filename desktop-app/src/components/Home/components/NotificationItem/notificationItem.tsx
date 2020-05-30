import React from 'react';

import * as styles from './notificationItem.treat';
import { GithubNotification } from 'data/models';

interface NotificationItemProps {
  notification: GithubNotification;
}

function NotificationItem({ notification }: NotificationItemProps) {
  return <div></div>;
}

export { NotificationItem };
