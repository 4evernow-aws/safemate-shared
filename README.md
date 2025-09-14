# SafeMate Shared

Shared utilities, types, constants, and Lambda layers for SafeMate blockchain document storage platform.

## Overview

This repository contains shared components used across all SafeMate services, including TypeScript types, utility functions, constants, and pre-built Lambda layers for common dependencies.

## Packages

### Core Packages
- **types** - TypeScript type definitions for all services
- **utils** - Shared utility functions and helpers
- **constants** - Environment configurations and constants
- **schemas** - API schemas and validation schemas

### Lambda Layers
- **hedera-dependencies** - Hedera SDK and blockchain dependencies
- **aws-sdk** - AWS SDK v3 dependencies
- **shared-utilities** - Common utility functions for Lambda functions

## Lambda Layers

### Hedera Dependencies Layer
Contains the Hedera SDK and related blockchain dependencies:
- `@hashgraph/sdk` - Official Hedera SDK
- `@grpc/grpc-js` - gRPC client for Hedera
- `protobufjs` - Protocol buffer support

### AWS SDK Layer
Contains AWS SDK v3 packages:
- `@aws-sdk/client-dynamodb` - DynamoDB client
- `@aws-sdk/lib-dynamodb` - DynamoDB document client
- `@aws-sdk/client-kms` - KMS client
- `@aws-sdk/client-cognito-identity-provider` - Cognito client
- `@aws-sdk/client-lambda` - Lambda client

### Shared Utilities Layer
Contains common utility functions:
- **Crypto utilities** - Encryption/decryption helpers
- **Response utilities** - API Gateway response helpers
- **Validation utilities** - Input validation helpers
- **Error handling** - Standardized error responses

## Directory Structure

```
safemate-shared/
├── lambda-layers/             # Lambda layer definitions
│   ├── aws-sdk/              # AWS SDK layer
│   ├── hedera-dependencies/  # Hedera SDK layer
│   └── shared-utilities/     # Shared utilities layer
├── packages/                 # Shared packages
│   ├── types/               # TypeScript types
│   ├── utils/               # Utility functions
│   ├── constants/           # Constants and configs
│   └── schemas/             # API schemas
└── docs/                    # Documentation
```

## Usage

### Installing Dependencies

```bash
# Install all dependencies
npm install

# Build all packages
npm run build

# Build specific package
npm run build:types
npm run build:utils
npm run build:constants
npm run build:schemas
```

### Using Lambda Layers

Lambda layers are automatically deployed and can be referenced in Lambda functions:

```javascript
// In Lambda function
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { HederaClient } = require('@hashgraph/sdk');
const { encryptData, decryptData } = require('shared-utilities/crypto');
```

### Using Shared Types

```typescript
// In TypeScript projects
import { User, Wallet, HederaAccount } from '@safemate/shared-types';
import { APIResponse, ErrorResponse } from '@safemate/shared-schemas';
```

## Environment Configuration

The shared package provides environment-specific configurations for:

### API Endpoints
- Development: `https://api-dev.safemate.com`
- Pre-production: `https://api-preprod.safemate.com`
- Production: `https://api.safemate.com`

### Cognito Settings
- User Pool IDs for each environment
- Client IDs and configurations
- Authentication flows

### Hedera Network Settings
- Testnet configuration for development
- Mainnet configuration for production
- Network endpoints and settings

### AWS Resource Configurations
- DynamoDB table names
- KMS key IDs
- S3 bucket names
- Lambda function names

## Development

### Adding New Types

```typescript
// packages/types/src/user.ts
export interface User {
  id: string;
  email: string;
  walletId: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### Adding New Utilities

```typescript
// packages/utils/src/crypto.ts
export function encryptData(data: string, key: string): string {
  // Implementation
}
```

### Creating New Lambda Layers

1. Create directory in `lambda-layers/`
2. Add `package.json` with dependencies
3. Create `nodejs/` subdirectory
4. Add layer code
5. Update deployment scripts

## Deployment

### Lambda Layers

Lambda layers are deployed automatically when the infrastructure is updated:

```bash
# Deploy all layers
cd lambda-layers
./deploy-layers.sh

# Deploy specific layer
./deploy-layer.sh aws-sdk
./deploy-layer.sh hedera-dependencies
./deploy-layer.sh shared-utilities
```

### Packages

Packages are published to npm registry:

```bash
# Publish all packages
npm run publish

# Publish specific package
npm run publish:types
npm run publish:utils
```

## Versioning

All shared components follow semantic versioning:
- **Major**: Breaking changes
- **Minor**: New features (backward compatible)
- **Patch**: Bug fixes

## Dependencies

### Production Dependencies
- **AWS SDK v3** - Latest stable version
- **Hedera SDK** - Latest stable version
- **TypeScript** - For type definitions

### Development Dependencies
- **Jest** - Testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking

## Testing

```bash
# Run all tests
npm test

# Run specific package tests
npm run test:types
npm run test:utils
npm run test:constants
npm run test:schemas

# Run tests with coverage
npm run test:coverage
```

## Contributing

### Code Standards
- **TypeScript** for all new code
- **ESLint** configuration enforced
- **Prettier** for code formatting
- **Jest** for testing

### Pull Request Process
1. Create feature branch
2. Add tests for new functionality
3. Ensure all tests pass
4. Update documentation
5. Submit pull request

## Recent Updates

### AWS SDK v3 Migration
- **Status**: ✅ Complete
- **Impact**: Improved performance and reduced bundle size
- **Layers**: All Lambda layers updated

### Lambda Layers Optimization
- **Status**: ✅ Complete
- **Impact**: Reduced Lambda function size
- **Performance**: Faster cold starts

### Type Safety Improvements
- **Status**: ✅ Complete
- **Impact**: Better developer experience
- **Coverage**: 100% type coverage

## Support

### Documentation
- **API Docs**: `docs/api/`
- **Layer Docs**: `docs/layers/`
- **Usage Examples**: `docs/examples/`

### Troubleshooting
- **Common Issues**: `docs/troubleshooting/`
- **Layer Issues**: `docs/layers/troubleshooting.md`
- **Type Issues**: `docs/types/troubleshooting.md`

---

**SafeMate Shared Status**: ✅ **PRODUCTION READY**  
**Lambda Layers**: ✅ **ALL DEPLOYED**  
**Type Coverage**: ✅ **100%**  
**Last Updated**: 2025-01-15