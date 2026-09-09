import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-next",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans-next",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-next",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Commerciax — Ship Smarter Tools at High Speed",
  description:
    "From idea to production, Commerciax helps businesses build, launch and scale with AI-powered software delivered at lightning speed.",
  keywords: ["AI software", "SaaS", "automation", "Commerciax", "product development"],
  openGraph: {
    title: "Commerciax — Ship Smarter Tools at High Speed",
    description:
      "From idea to production, Commerciax helps businesses build, launch and scale with AI-powered software delivered at lightning speed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable} ${instrumentSerif.variable}`}>
      <body className="font-plus-jakarta antialiased">{children}</body>
    </html>
  );
}
