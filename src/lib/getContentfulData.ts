 'server-only'
import { cache } from 'react';
 

 
 
/**
 * Server-side data fetching utility for Contentful
 * Caches responses and ensures data fetching only happens on server
 */
  export const getContentfulData = cache(async <T>(
  queryFn: () => Promise<T>
): Promise<T> => {
  try {
    const response = await queryFn()
    return response;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : 'Failed to fetch data');
  }
}); 

 