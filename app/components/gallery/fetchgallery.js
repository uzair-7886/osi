import { client } from "@/sanity/lib/client";

const galleryQuery = `*[_type == "gallery"][0] {
  title,
  sections[] {
    name,
    description,
    images[] {
      image,
      caption,
      alt
    }
  }
}`;

export async function fetchGallery() {
  try {
    const data = await client.fetch(galleryQuery);
    return data;
  } catch (error) {
    console.error("Error fetching gallery:", error);
    throw new Error('Failed to fetch gallery data');
  }
}