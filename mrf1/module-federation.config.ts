import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mrf1',
  exposes: {
    './InputComponent': 'mrf1/src/app/input-component/input-component.component.ts',
  },
};

export default config;
