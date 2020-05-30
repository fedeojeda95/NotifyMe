import { GithubNotification } from '../models';

enum NotificationStatus {
  Loading,
  NotStarted,
  Error,
  Succesful,
}

enum NotificationActionType {
  NotificationsSaved,
  NotificationsLoading,
  NotificationsError,
}

interface NotificationsSavedData {
  notifications: GithubNotification[];
}

interface NotificationsErrorData {
  error: string;
}

interface NotificationsAction {
  type: NotificationActionType;
  data?: NotificationsSavedData | NotificationsErrorData;
}

interface NotificationsState {
  notifications: GithubNotification[];
  status: NotificationStatus;
  error: string;
}

export {
  NotificationStatus,
  NotificationActionType,
  NotificationsSavedData,
  NotificationsErrorData,
  NotificationsAction,
  NotificationsState,
};
