import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ContactForm } from "./components/ContactForm";
import { ReviewsCarousel } from "./components/ReviewsCarousel";
import { WhyUs } from "./components/WhyUs";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Portfolio } from "./components/Portfolio";
import { FAQ } from "./components/FAQ";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ContactForm />
        <ReviewsCarousel />
        <WhyUs />
        <Services />
        <Process />
        <Portfolio />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
