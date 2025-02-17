import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config({});

const config: CodegenConfig = {
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`]:
        {
          headers: {
            Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
          },
        },
    },
  ],
  hooks: { afterAllFileWrite: ["eslint --fix"] },
  documents: [
    "src/graphql/**/*.{graphql,gql,ts}",
    "!src/graphql/__generated__/**/*", // Exclude generated files
  ],
  
  watch: true,
  overwrite: true,
  generates: {

    // Generate the GraphQL schema as an SDL file
    'src/graphql.schema.graphql': {
       plugins: ['schema-ast'],
       config: {
         includeDirectives: true,
         includeIntrospectionTypes: true,
         commentDescriptions: true,
       },
     },
 
    // Generate client-side operations and type-safe SDK for react-query
    './src/gql/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: false
      },
    },
    // Generate a minified introspection file (optional)
    "src/graphql/__generated__/introspection.json": {
      plugins: ["introspection"],
      overwrite: true,

      config: {
        minify: true, // Minify the introspection result
      },
    },
  },
};

export default config;
