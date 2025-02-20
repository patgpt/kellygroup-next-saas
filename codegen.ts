import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";
import { env } from "process";

dotenv.config({});

const config: CodegenConfig = {
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${env.CONTENTFUL_SPACE_ID}`]:
        {
          headers: {
            Authorization: `Bearer ${env.CONTENTFUL_DELIVERY_TOKEN}`,
          },
        },
    },
  ],
 
  documents: [
    'src/gql/fragments/**/*.ts',
    'src/gql/queries/**/*.ts',
    '!src/gql/fragments/index.ts'  // Exclude the barrel file
  ],

  watch: true,
  overwrite: true,
  generates: {
    // './src/gql/': {
    //   preset: 'client',
    //   presetConfig: {
    //     includeDirectives: true,
    //     fragmentMasking: { unmaskFunctionName: 'getFragmentData' }

    //   },
    //   config: {
    //     documentMode: 'string'

    //   },
    //   plugins: [],
    // },
    './src/gql/sdk.ts': {
      
      plugins: [
        
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
        "typescript-resolvers",
      ],
      config: {
        rawRequest: true,
 
        documentMode: 'string',
        

      },
    },
    './src/gql/schema.graphql': {
       plugins: ['schema-ast'],
       config: {
         includeDirectives: true
       },
     },
     './schema.json': {
      plugins: ['introspection'],
      config: {
        includeDirectives: true,
        minify: true,
        description: true,
        schemaDescription: true,
      },
      
     },
  },
};

export default config;
