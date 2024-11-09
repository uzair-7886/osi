import { client } from '@/sanity/lib/client';

const subjectQuery = `*[_type == "subject"] {
  name,
  description,
  "courses": courses[]-> {
    name,
    description,
    image
  }
}`;

export async function fetchSubjects() {
  try {
    const data = await client.fetch(subjectQuery);
    return data;
  } catch (error) {
    console.error("Error fetching subjects:", error);
    throw new Error('Failed to fetch subjects data');
  }
}