import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'home',
  remotes: ['pension', 'isa'],
};

export default config;
