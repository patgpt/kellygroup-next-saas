import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
});

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN!,
  host: "preview.contentful.com",
});

export const getClient = (preview?: boolean) =>
  preview ? previewClient : client;
