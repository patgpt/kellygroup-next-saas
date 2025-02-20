import { getSdk } from "@/gql/sdk";
import { createClient } from "contentful";
import dotenv from "dotenv";
 
import { GraphQLClient } from "graphql-request";
import { Logger } from "./utils";

dotenv.config();


// contentful client
/*
* @description This is the contentful client that is used to fetch the data from the contentful space
* @param {string} space - The space id
* @param {string} accessToken - The access token
* @param {string} environment - The environment
* @param {string} host - The host
* @param {function} logHandler - The log handler
* @deprecated Use the graphql client instead
*/
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN!,
  environment: process.env.CONTENTFUL_ENVIRONMENT!,
  host: process.env.NODE_ENV === "production" ? "cdn.contentful.com" : "preview.contentful.com",
  logHandler:Logger,
});


/*
* @description This is the graphql client that is used to fetch the data from the contentful space
* @param {string} url - The url
* @param {object} options - The options
* @param {function} logHandler - The log handler
*/
const graphqlClient = new GraphQLClient(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {

    headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_TOKEN!}`,
    },
    credentials: "include",
});


/*
* @description This is the sdk that is used to fetch the data from the contentful space
* @param {GraphQLClient} graphqlClient - The graphql client
*/
 
const sdk = getSdk(graphqlClient);

export default sdk;