const contentful = require("contentful-management");
import dotenv from "dotenv";
dotenv.config({
  path: "../../.env",
});
const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN, // Replace with your CMA token
});

export const getSpace = async () => {
  try {
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID); // Replace with your Space ID
    return space;
  } catch (error) {
    console.error("Failed to get space:", error);
    throw new Error("Failed to get space");
  }
};

export const getEnvironment = async (space: any) => {
  try {
    const environment = await space.getEnvironment("master"); // Adjust the environment if necessary
    return environment;
  } catch (error) {
    console.error("Failed to get environment:", error);
    throw new Error("Failed to get environment");
  }
};
