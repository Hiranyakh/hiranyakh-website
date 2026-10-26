
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://nutrition.hiranyakhchatterjee.com"
  ),

  title: {
    default: "Hiranyakh's Wellness | Clinical Nutritionist",
    template: "%s | Hiranyakh's Wellness",
  },

  description:
    "Personalised clinical nutrition consultation by Hiranyakh Chatterjee for weight management, diabetes care, gut health, IBS, liver health, and lifestyle wellness.",

  keywords: [
    "Hiranyakh Chatterjee",
    "Hiranyakh's Wellness",
    "Clinical Nutritionist",
    "Clinical Nutritionist in India",
    "Dietitian",
    "Personalised Nutrition Consultation",
    "Weight Management",
    "Diabetes Management",
    "Gut Health",
    "IBS Nutrition",
    "Liver Health",
    "Lifestyle Disease Management",
  ],

  authors: [{ name: "Hiranyakh Chatterjee" }],
  creator: "Hiranyakh Chatterjee",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    url: "https://nutrition.hiranyakhchatterjee.com/",
    siteName: "Hiranyakh's Wellness",
    title: "Hiranyakh's Wellness | Clinical Nutritionist",
    description:
      "Personalised nutrition guidance for weight management, diabetes care, gut health, and lifestyle wellness.",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hiranyakh's Wellness | Clinical Nutritionist",
    description:
      "Explore personalised clinical nutrition consultation and lifestyle wellness services.",
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
