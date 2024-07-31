import { Environment } from './environment.type';
import { version } from './environment.const';

export const environment: Environment = {
  apiKeys: {},
  production: false,
  version: version,
  localApiHost: 'http://localhost:5173/api/',
  remoteApiHost: `https://brandonshuey.ngrok.io/api/`,
}
