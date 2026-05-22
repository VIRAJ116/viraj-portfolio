const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aimviraj.xyz";

export default function sitemap() {
  const now = new Date();
  const sections = ["", "#about", "#skills", "#projects", "#experience", "#contact"];
  return sections.map((s) => ({
    url: `${SITE_URL}/${s}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: s === "" ? 1 : 0.7,
  }));
}
