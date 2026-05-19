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

export const metadata = {
  metadataBase: new URL("https://your-portfolio.example.com"),
  title: {
    default: "Viraj Raiyani — MERN Stack Developer & Creative Engineer",
    template: "%s · Viraj Raiyani",
  },
  description:
    "Portfolio of Viraj Raiyani — a MERN stack developer crafting cinematic, performant web experiences with React, Next.js, Node, and a strong eye for design.",
  keywords: [
    "MERN Developer",
    "Full Stack",
    "Next.js",
    "React",
    "Portfolio",
    "Three.js",
    "Framer Motion",
  ],
  authors: [{ name: "Viraj Raiyani" }],
  openGraph: {
    title: "Viraj Raiyani — MERN Stack Developer",
    description:
      "Cinematic, performant web experiences. React, Next.js, Node, MongoDB.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viraj Raiyani — MERN Stack Developer",
  },
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
      <body className="font-sans">{children}</body>
    </html>
  );
}
