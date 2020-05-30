import { RestEndpointMethodTypes } from '@octokit/rest';

export type GithubNotification = RestEndpointMethodTypes['activity']['listNotificationsForAuthenticatedUser']['response']['data'][0];
