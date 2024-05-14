import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'isa',
  exposes: {
    './Module': 'apps/client/isa/src/remote-entry.ts',
  },
};

export default config;
