import { client } from "@/sanity/lib/client";

export async function fetchHeroData() {
  const heroSectionQuery = `*[_type == "heroSection"][0] {
    text,
    date,
    buttonText,
    image
  }`;
  
  try {
    const data = await client.fetch(heroSectionQuery);
    return data;
  } catch (error) {
    console.error("Error fetching hero data:", error);
    return null;
  }
}