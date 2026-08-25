import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Hiranyakh's Wellness",
    template: "%s | Hiranyakh's Wellness",
  },

  description:
    "Evidence-based Clinical Nutrition, Weight Management, Diabetes Care, Gut Health, Lifestyle Transformation and Wellness Coaching by Hiranyakh Chatterjee.",

  keywords: [
    "Clinical Nutritionist",
    "Dietitian",
    "Weight Loss",
    "Diabetes",
    "Gut Health",
    "PCOS",
    "Nutrition",
    "Wellness",
    "Lifestyle",
    "Hiranyakh Chatterjee",
  ],

  authors: [
    {
      name: "Hiranyakh Chatterjee",
    },
  ],

  creator: "Hiranyakh Chatterjee",

  metadataBase: new URL("https://www.hiranyakhchatterjee.com"),

  openGraph: {
    title: "Hiranyakh's Wellness",
    description:
      "Helping people transform their health through evidence-based nutrition.",
    url: "https://www.hiranyakhchatterjee.com",
    siteName: "Hiranyakh's Wellness",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}