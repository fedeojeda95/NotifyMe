import { fetchNotifications } from './notificationsMock';
import { Api } from '../Api';

const api: Api = {
  notificationsApi: {
    fetchNotifications,
  },
};

export { api };
