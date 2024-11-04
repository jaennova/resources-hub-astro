export interface Resource {
    id: number;
    title: string;
    description: string;
    url: string;
    category: string;
    tags: string;
  }
  
  const API_URL = 'https://retoolapi.dev/k2niAr/data'; // fake API for demo
  
  export async function getResources(): Promise<Resource[]> {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch resources');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching resources:', error);
      return [];
    }
  }