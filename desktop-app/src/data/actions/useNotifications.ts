import React, { useContext } from 'react';

import { notificationsContext, NotificationActionType } from 'data/state';
import { useInterval } from 'hooks';
import { fetchNotifications } from 'data/api';
import { GithubNotification } from 'data/models';

// Polling interval of 5 minutes
const POLLING_INTERVAL = 5 * 60 * 1000;

function useNotifications() {
  const [state, dispatch] = useContext(notificationsContext);

  function startLoading() {
    dispatch({
      type: NotificationActionType.NotificationsLoading,
    });
  }

  function onError(error: Error) {
    dispatch({
      type: NotificationActionType.NotificationsError,
      data: {
        error: error.message,
      },
    });
  }

  function onSuccess(notifications: GithubNotification[]) {
    dispatch({
      type: NotificationActionType.NotificationsSaved,
      data: {
        notifications,
      },
    });
  }

  useInterval(() => {
    startLoading();
    fetchNotifications().then(onSuccess).catch(onError);
  }, POLLING_INTERVAL);

  return state;
}

export { useNotifications };