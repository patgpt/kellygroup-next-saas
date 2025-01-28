import { getContentful } from "../contentful-management-client";

const client = getContentful();

/**
 * Create and publish a content type in Contentful.
 *
 * @param contentTypeId - The ID for the content type to be created.
 * @param contentType - The content type definition.
 */
export const createAndPublishContentType = async (
  contentTypeId: string,
  contentType: any,
) => {
  try {
    // Create the content type
    const createdContentType = await client.contentType.createWithId(
      {
        contentTypeId,
      },
      contentType,
    );

    // Publish the content type
    const publishedContentType = await client.contentType.publish(
      {
        contentTypeId,
      },
      createdContentType,
    );

    console.log(
      `Content type ${contentTypeId} created and published successfully.`,
    );
    return publishedContentType;
  } catch (error) {
    console.error(
      `Error creating and publishing content type ${contentTypeId}:`,
      error,
    );
    throw error;
  }
};
