import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hiranyakh Chatterjee | Clinical Nutritionist | Wellness Coach | Business Mentor",

  description:
    "Helping people transform their health, build sustainable wealth, and achieve financial freedom through clinical nutrition, wellness coaching, and business mentorship.",

  keywords: [
    "Hiranyakh Chatterjee",
    "Clinical Nutritionist",
    "Dietitian",
    "Nutritionist",
    "Weight Loss",
    "Diabetes Management",
    "Gut Health",
    "Autoimmune Diseases",
    "Lifestyle Disease Management",
    "Wellness Coach",
    "Business Mentor",
    "Financial Freedom",
    "Health Coach",
    "Nutrition Kolkata",
    "Nutrition India",
  ],

  authors: [
    {
      name: "Hiranyakh Chatterjee",
    },
  ],

  creator: "Hiranyakh Chatterjee",

  publisher: "Hiranyakh Chatterjee",

  robots: {
    index: true,
    follow: true,
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