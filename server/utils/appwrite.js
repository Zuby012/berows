import { Client, Databases } from 'node-appwrite';

export const useAppwrite = () => {
  const config = process.env

  const client = new Client()
    .setEndpoint(config.APPWRITE_ENDPOINT)
    .setProject(config.APPWRITE_PROJECT_ID)
    .setKey(config.APPWRITE_DATABASE_API_KEY); // Use the API key for server-side authentication

  const databases = new Databases(client);

  return { databases, client };
}
