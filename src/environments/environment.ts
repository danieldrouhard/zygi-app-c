import { Environment } from './environment.type';
import { version } from './environment.const';

export const environment: Environment = {
  apiKeys: {},
  production: false,
  version: version,
  localApiHost: `https://master--comfy-seahorse-d51b3e.netlify.app/api/`,
  remoteApiHost: `https://brandonshuey.ngrok.io/api/`,
}
