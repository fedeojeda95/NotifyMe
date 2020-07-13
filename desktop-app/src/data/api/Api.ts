import { GithubNotification } from '../models';
import { Dayjs } from 'dayjs';

interface NotificationsApi {
  fetchNotifications(since: Dayjs | null): Promise<GithubNotification[]>;
}

interface Api {
  notificationsApi: NotificationsApi;
}

export { Api, NotificationsApi };
