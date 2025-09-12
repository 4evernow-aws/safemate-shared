import { EnvironmentConfig } from '../types/api';

export const ENVIRONMENT_CONFIGS: Record<string, EnvironmentConfig> = {
  dev: {
    name: 'development',
    apiEndpoints: {
      onboarding: 'https://527ye7o1j0.execute-api.ap-southeast-2.amazonaws.com/dev',
      wallet: 'https://ncr4ky9z5h.execute-api.ap-southeast-2.amazonaws.com/dev',
      hedera: 'https://229i7zye9f.execute-api.ap-southeast-2.amazonaws.com/dev',
      groups: 'https://njc6cjhmsh.execute-api.ap-southeast-2.amazonaws.com/dev',
      directory: 'https://t2hd7atpa8.execute-api.ap-southeast-2.amazonaws.com/dev',
      tokenVault: 'https://x3qlwocgza.execute-api.ap-southeast-2.amazonaws.com/dev',
    },
    cognito: {
      userPoolId: 'ap-southeast-2_dev123',
      clientId: 'dev_client_id',
    },
    hedera: {
      network: 'testnet',
    },
  },
  preprod: {
    name: 'pre-production',
    apiEndpoints: {
      onboarding: 'https://527ye7o1j0.execute-api.ap-southeast-2.amazonaws.com/preprod',
      wallet: 'https://ncr4ky9z5h.execute-api.ap-southeast-2.amazonaws.com/preprod',
      hedera: 'https://229i7zye9f.execute-api.ap-southeast-2.amazonaws.com/preprod',
      groups: 'https://njc6cjhmsh.execute-api.ap-southeast-2.amazonaws.com/preprod',
      directory: 'https://t2hd7atpa8.execute-api.ap-southeast-2.amazonaws.com/preprod',
      tokenVault: 'https://x3qlwocgza.execute-api.ap-southeast-2.amazonaws.com/preprod',
    },
    cognito: {
      userPoolId: 'ap-southeast-2_preprod123',
      clientId: 'preprod_client_id',
    },
    hedera: {
      network: 'testnet',
    },
  },
};
