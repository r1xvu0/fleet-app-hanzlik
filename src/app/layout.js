import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Flotila Praha - Největší taxi flotila v Praze | Řidič taxi, Bolt, Uber",
  description: "Staňte se řidičem největší taxi flotily v Praze. Spolupracujeme s Bolt a Uber. Moderní vozidla, flexibilní pracovní doba, týdenní výplaty. Kontaktujte nás ještě dnes!",
  keywords: "taxi Praha, řidič taxi, Bolt řidič, Uber řidič, flotila Praha, práce řidič, taxi služby Praha, půjčení auta taxi",
  authors: [{ name: "Flotila Praha" }],
  creator: "Flotila Praha",
  publisher: "Flotila Praha",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'http://flotila-praha.eu',
    siteName: 'Flotila Praha',
    title: 'Flotila Praha - Největší taxi flotila v Praze',
    description: 'Staňte se řidičem největší taxi flotily v Praze. Spolupracujeme s Bolt a Uber. Moderní vozidla, flexibilní pracovní doba.',
    images: [
      {
        url: 'http://flotila-praha.eu/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flotila Praha - Taxi služby',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flotila Praha - Největší taxi flotila v Praze',
    description: 'Staňte se řidičem největší taxi flotily v Praze. Spolupracujeme s Bolt a Uber.',
    images: ['http://flotila-praha.eu/og-image.jpg'],
  },
  alternates: {
    canonical: 'http://flotila-praha.eu',
  },
  verification: {
    google: 'zZ3S3EBzjLXQYRn0OgK6Jiwg6joWpugG0zqTUONeryE',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
