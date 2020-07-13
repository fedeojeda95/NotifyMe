import { GithubNotification } from '../models';
import { Dayjs } from 'dayjs';

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
  lastFetched: Dayjs | null;
}

export {
  NotificationStatus,
  NotificationActionType,
  NotificationsSavedData,
  NotificationsErrorData,
  NotificationsAction,
  NotificationsState,
};
