import { Environment } from './environment.type';
import { version } from './environment.const';

export const environment: Environment = {
  apiKeys: {},
  production: true,
  version: version,
  localApiHost: `https://uewebaudit.azurewebsites.net/api/`,
  remoteApiHost: `https://uewebaudit.azurewebsites.net/api/`,
}
