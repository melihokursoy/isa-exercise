import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'isa',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
