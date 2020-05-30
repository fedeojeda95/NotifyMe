import { client } from './httpClient';
import { GithubNotification } from '../models';

export async function fetchNotifications(): Promise<GithubNotification[]> {
  const response = await client.activity.listNotificationsForAuthenticatedUser({
    per_page: 100,
  });

  const { data } = response;
  return data;
}
