import { useContext } from 'react';

import { notificationsContext, NotificationActionType } from '../state';
import { useInterval } from '../../hooks';
import { api } from '../api';
import { GithubNotification } from '../models';
import { showNewPullRequestsNotifications } from './showNotification';

// Polling interval of 5 minutes
const POLLING_INTERVAL = 1 * 60 * 1000;
// const POLLING_INTERVAL = 5000;

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
    if (notifications.length > 0) {
      showNewPullRequestsNotifications();
    }
  }

  const { lastFetched } = state;

  useInterval(() => {
    const { notificationsApi } = api;
    startLoading();
    notificationsApi.fetchNotifications(lastFetched).then(onSuccess).catch(onError);
  }, POLLING_INTERVAL);

  return state;
}

export { useNotifications };
