import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:6969/graphql',
  documents: [
    'src/**/*.mutation.ts',
    'src/**/*.query.ts',
    'src/**/*.subscription.ts',
  ],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/generated/': {
      preset: 'client',
    },
  },
};

export default config;
