import dayjs from 'dayjs';

import {
  NotificationStatus,
  NotificationActionType,
  NotificationsSavedData,
  NotificationsErrorData,
  NotificationsAction,
  NotificationsState,
} from './notificationActionTypes';

const notificationsInitialState: NotificationsState = {
  notifications: [],
  status: NotificationStatus.NotStarted,
  error: '',
  lastFetched: null,
};

function getNewNotifications(data: NotificationsSavedData) {
  const { notifications } = data;

  return notifications.filter((notification) => {
    const {
      subject: { type },
      reason,
    } = notification;

    const isPullRequest = type === 'PullRequest';
    const isRequestForReview = reason === 'review_request';
    return isPullRequest && isRequestForReview;
  });
}

function onNotificationsSaved(state: NotificationsState, action: NotificationsAction): NotificationsState {
  const { data } = action;
  const savedData = data as NotificationsSavedData;

  const newNotifications = getNewNotifications(savedData);

  const { notifications: oldNotifications } = state;
  const notifications = [...newNotifications, ...oldNotifications];

  return {
    notifications,
    status: NotificationStatus.Succesful,
    error: '',
    lastFetched: dayjs(),
  };
}

function onNotificationsLoading(state: NotificationsState, action: NotificationsAction): NotificationsState {
  return {
    ...state,
    status: NotificationStatus.Loading,
  };
}

function onNotificationsError(state: NotificationsState, action: NotificationsAction): NotificationsState {
  const { data } = action;
  const { error } = data as NotificationsErrorData;

  return {
    ...state,
    status: NotificationStatus.Error,
    error,
  };
}

const notificationActionHandlers = {
  [NotificationActionType.NotificationsSaved]: onNotificationsSaved,
  [NotificationActionType.NotificationsLoading]: onNotificationsLoading,
  [NotificationActionType.NotificationsError]: onNotificationsError,
};

function notificationsReducer(state: NotificationsState, action: NotificationsAction) {
  const { type } = action;
  const handler = notificationActionHandlers[type];
  if (handler) {
    return handler(state, action);
  }

  return state;
}

export { notificationsReducer, notificationsInitialState };
