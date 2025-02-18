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
 
  documents: ['src/**/*.tsx', '!src/gql/**/*'],


  watch: true,
  overwrite: true,
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
