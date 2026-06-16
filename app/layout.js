import "./globals.css";
import { ScrollProgressBar } from "@/components/motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  metadataBase: new URL("https://custommusiccompany.com"),
  title: {
    default: "The Custom Music Company",
    template: "%s · The Custom Music Company",
  },
  description:
    "Original music written around your brand by a team of composers, producers, and engineers — with AI in the workflow to cut the round trips. Composed by musicians, delivered without the wait.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "The Custom Music Company",
    description: "Sound that becomes a brand. Composed by musicians, delivered without the wait.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#FBFAF7",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollProgressBar />
        <SiteHeader tone="light" />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
