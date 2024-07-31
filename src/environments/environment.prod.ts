import { Environment } from './environment.type';
import { version } from './environment.const';

export const environment: Environment = {
  apiKeys: {},
  production: true,
  version: version,
  localApiHost: `https://master--comfy-seahorse-d51b3e.netlify.app/`,
  remoteApiHost: `https://brandonshuey.ngrok.io/api/`,
}
