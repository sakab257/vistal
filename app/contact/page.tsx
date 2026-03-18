import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <ContactForm />
      </main>
      <Footer variant="no-sticky" />
    </>
  );
}
