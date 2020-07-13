import { Octokit } from '@octokit/rest';

const client = new Octokit({
  auth: 'mypersonaltoken',
});

export { client };
