import { fetchNotifications } from './notificationsController';
import { Api } from '../Api';

const api: Api = {
  notificationsApi: {
    fetchNotifications,
  },
};

export { api };
