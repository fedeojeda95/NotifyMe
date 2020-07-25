import { client } from './httpClient';
import { GithubNotification } from '../../models';
import { Dayjs } from 'dayjs';

export async function fetchNotifications(since: Dayjs | null): Promise<GithubNotification[]> {
  const params: { per_page: number; since?: string } = {
    per_page: 100,
  };

  if (since) {
    const formattedSince = since.format();
    params.since = formattedSince;
  }

  const response = await client.activity.listNotificationsForAuthenticatedUser({
    per_page: 100,
  });

  const { data } = response;
  return data;
}
