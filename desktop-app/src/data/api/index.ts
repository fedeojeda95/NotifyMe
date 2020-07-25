import { Api } from './Api';

let api: Api;

console.log(process.env.API);

if (process.env.API === 'MOCK') {
  const { api: mockApi } = require('./mock');
  api = mockApi;
} else {
  const { api: remoteApi } = require('./remote');
  api = remoteApi;
}

export { api };
export * from './Api';
