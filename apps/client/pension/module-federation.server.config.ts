import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'pension',
  exposes: {
    './Module': 'apps/client/pension/src/remote-entry.ts',
  },
};

export default config;
