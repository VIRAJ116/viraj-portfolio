import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aimviraj.xyz";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Viraj Raiyani — MERN Stack & Next.js Developer | Ahmedabad, India",
    template: "%s · Viraj Raiyani",
  },
  description:
    "Viraj Raiyani is a Software Engineer with 3+ years of experience building scalable web applications across the MERN stack — React.js, Next.js, Node.js, Express, MongoDB. Based in Ahmedabad, Gujarat, open to remote roles worldwide.",
  applicationName: "Viraj Raiyani — Portfolio",
  authors: [{ name: "Viraj Raiyani", url: SITE_URL }],
  creator: "Viraj Raiyani",
  publisher: "Viraj Raiyani",
  keywords: [
    "Viraj Raiyani",
    "Viraj Raiyani portfolio",
    "Viraj Raiyani developer",
    "Viraj Raiyani Ahmedabad",
    "Viraj Raiyani MERN",
    "Viraj Raiyani Next.js",
    "Viraj Raiyani React",
    "Viraj Raiyani NetAI",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Engineer Ahmedabad",
    "Node.js Developer",
    "Senior Frontend Developer India",
    "PieRush",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Viraj Raiyani — Portfolio",
    title:
      "Viraj Raiyani — MERN Stack & Next.js Developer",
    description:
      "Software Engineer crafting performant, cinematic web experiences with React, Next.js, and Node.js. 3+ years shipping production apps.",
    images: [
      {
        url: "/personal/viraj_og.jpg",
        width: 1200,
        height: 630,
        alt: "Viraj Raiyani — MERN Stack & Next.js Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viraj Raiyani — MERN Stack & Next.js Developer",
    description:
      "Software Engineer · React, Next.js, Node.js · 3+ years shipping production apps.",
    images: ["/personal/viraj_og.jpg"],
    creator: "@VIRAJ116",
  },
  verification: {
    // Replace with values from Google Search Console + Bing Webmaster Tools.
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Viraj Raiyani",
  alternateName: ["Viraj", "VIRAJ116"],
  url: SITE_URL,
  image: `${SITE_URL}/personal/viraj_og.jpg`,
  jobTitle: "Senior Frontend Developer",
  worksFor: {
    "@type": "Organization",
    name: "NetAI Inc.",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  email: "mailto:virajraiyani162@gmail.com",
  knowsAbout: [
    "MERN Stack",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Drizzle ORM",
    "Redux Toolkit",
    "Zustand",
    "Tailwind CSS",
    "D3.js",
    "AWS EC2",
  ],
  sameAs: [
    "https://github.com/VIRAJ116",
    "https://www.linkedin.com/in/raiyaniviraj",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Viraj Raiyani — Portfolio",
  url: SITE_URL,
  author: { "@type": "Person", name: "Viraj Raiyani" },
};

export const viewport = {
  themeColor: "#05060a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="font-sans" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
