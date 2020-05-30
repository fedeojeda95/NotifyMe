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
};

function onNotificationsSaved(state: NotificationsState, action: NotificationsAction): NotificationsState {
  const { data } = action;
  const { notifications } = data as NotificationsSavedData;

  return {
    ...state,
    status: NotificationStatus.Succesful,
    notifications,
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
