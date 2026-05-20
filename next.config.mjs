/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow dev-server assets/HMR when accessing via LAN IP or local hostnames.
  // Without this, Next.js blocks cross-origin requests to the dev server and
  // the page hydrates to nothing (loader stays stuck).
  allowedDevOrigins: [
    "192.168.1.48",
    "192.168.1.0/24",
    "*.local",
  ],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
    ],
  },
};

export default nextConfig;
