# SafeMate Lambda Layers

This directory contains Lambda layers for the SafeMate project, providing shared dependencies and utilities across Lambda functions.

## Layers

### 1. AWS SDK Layer (`aws-sdk/`)
Contains AWS SDK v3 packages for common AWS services:
- `@aws-sdk/client-dynamodb` - DynamoDB operations
- `@aws-sdk/lib-dynamodb` - DynamoDB document client
- `@aws-sdk/client-kms` - Key Management Service
- `@aws-sdk/client-lambda` - Lambda operations
- `@aws-sdk/client-cognito-identity-provider` - Cognito operations
- `@aws-sdk/client-s3` - S3 operations
- `@aws-sdk/client-cloudwatch` - CloudWatch operations

### 2. Hedera Dependencies Layer (`hedera-dependencies/`)
Contains Hedera Hashgraph SDK:
- `@hashgraph/sdk` - Hedera Hashgraph SDK for blockchain operations

### 3. Shared Utilities Layer (`shared-utilities/`)
Contains common utility functions:
- `crypto.js` - Cryptographic utilities (random strings, UUIDs, hashing, encryption)
- `response.js` - API Gateway response helpers
- `validation.js` - Input validation utilities

## Usage

### Deploying Layers

1. Navigate to the layer directory
2. Install dependencies: `npm install`
3. Create the layer package following AWS Lambda layer structure
4. Deploy using AWS CLI or Terraform

### Using in Lambda Functions

```javascript
// AWS SDK layer
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, GetCommand } = require('@aws-sdk/lib-dynamodb');

// Hedera layer
const { Client, PrivateKey } = require('@hashgraph/sdk');

// Shared utilities layer
const { generateUUID, createSuccessResponse } = require('/opt/nodejs/utils/crypto');
const { createSuccessResponse } = require('/opt/nodejs/utils/response');
const { isValidEmail } = require('/opt/nodejs/utils/validation');
```

## Structure

Each layer follows the AWS Lambda layer structure:
```
layer-name/
├── package.json          # Layer dependencies
└── nodejs/               # Node.js runtime
    ├── package.json      # Runtime dependencies
    └── utils/            # Utility modules (for shared-utilities layer)
        ├── crypto.js
        ├── response.js
        └── validation.js
```

## Version Management

All layers use standardized versions:
- AWS SDK v3: `^3.859.0`
- Hedera SDK: `^2.71.1`
- Node.js utilities: Latest stable versions

## Free Tier Compliance

These layers are designed to work with AWS Free Tier services and avoid expensive dependencies that could incur costs.
