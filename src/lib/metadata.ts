import { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "Dpopstudio - Creative Design Studio for Digital Products",
    template: "%s | Dpopstudio",
  },
  description:
    "Dpopstudio is a creative design studio that blends into your team. We design, build, and ship digital products with the care of an in-house crew. UI/UX design, branding, and product development.",
  keywords: [
    "Dpopstudio",
    "design studio",
    "creative studio",
    "UI/UX design",
    "product design",
    "branding",
    "web design",
    "mobile design",
    "digital product",
    "design agency",
    "user interface",
    "user experience",
    "design consultation",
    "creative agency",
  ],
  authors: [{ name: "Dpopstudio" }],
  creator: "Dpopstudio",
  publisher: "Dpopstudio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.dpopstudio.co"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "id-ID": "/id",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    url: "https://www.dpopstudio.co",
    title: "Dpopstudio - Creative Design Studio for Digital Products",
    description:
      "We design, build, and ship digital products with the care of an in-house crew. UI/UX design, branding, and product development.",
    siteName: "Dpopstudio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dpopstudio - Creative Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dpopstudio - Creative Design Studio for Digital Products",
    description:
      "We design, build, and ship digital products with the care of an in-house crew. UI/UX design, branding, and product development.",
    images: ["/twitter-image.jpg"],
    creator: "@dpopstudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
  category: "Design",
};
