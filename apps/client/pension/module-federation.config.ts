import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'pension',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
