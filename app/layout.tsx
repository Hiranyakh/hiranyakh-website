import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "Hiranyakh Chatterjee | Clinical Nutritionist | Wellness Coach | Business Mentor",

  description:
    "Helping people transform their health, build sustainable wealth and achieve financial freedom.",

  keywords: [
    "Clinical Nutritionist",
    "Dietitian",
    "Weight Loss",
    "Diabetes",
    "Gut Health",
    "Financial Freedom",
    "Wellness Coach",
    "Business Mentor",
    "Hiranyakh Chatterjee",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}