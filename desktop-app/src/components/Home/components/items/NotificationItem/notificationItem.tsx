import React from 'react';

import * as styles from './notificationItem.treat';
import { GithubNotification } from '../../../../../data/models';
import dayjs from 'dayjs';

interface NotificationItemProps {
  notification: GithubNotification;
}

function buildPullRequestUrl(repositoryUrl: string, subjectUrl: string) {
  const id = subjectUrl.split('/').pop();
  return `${repositoryUrl}/pull/${id}`;
}

function NotificationItem({ notification }: NotificationItemProps) {
  const {
    subject: { title, url },
    repository: { name: repositoryName, html_url: repositoryUrl },
    last_read_at: lastReadAt,
  } = notification;

  const pullRequestUrl = buildPullRequestUrl(repositoryUrl, url);
  const lastReadDate = dayjs(lastReadAt).format('HH:mm - D, MMM');

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}> {title} </p>
        <div className={styles.actionsContainer}>
          <a className={styles.goToPrLink} href={pullRequestUrl} target="_blank">
            Go to PR
          </a>
          <input className={styles.markAsReadButton} type="button" value="Mark as Read"></input>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.infoName}> Repository </p>
        <p className={styles.infoContent}> {repositoryName} </p>
        <p className={styles.infoName}> Created: </p>
        <p className={styles.infoContent}> {lastReadDate} </p>
      </div>
    </div>
  );
}

export { NotificationItem };
