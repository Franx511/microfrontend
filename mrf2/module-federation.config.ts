import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mrf2',
  exposes: {
    './Routes': 'mrf2/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
