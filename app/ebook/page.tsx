import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import EbookPurchase from "@/components/ebook/EbookPurchase";
import { ebook } from "@/data/ebook";

export const metadata = {
  title: ebook.title,
  description: ebook.description,
};

export default function EbookPage() {
  return (
    <>
      <Navbar />
      <main>
        <EbookPurchase />
      </main>
      <Footer />
    </>
  );
}
