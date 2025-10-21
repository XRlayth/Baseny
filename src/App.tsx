import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ContactForm } from "./components/ContactForm";
import { ReviewsCarousel } from "./components/ReviewsCarousel";
import { WhyUs } from "./components/WhyUs";
import { Services } from "./components/Services";
import { ProcessTimeline } from "./components/ProcessTimeline";
import { Portfolio } from "./components/Portfolio";
import { FAQ } from "./components/FAQ";
import { CTASection } from "./components/CTASection";
import { MapSection } from "./components/MapSection";
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
        <ProcessTimeline />
        <Portfolio />
        <FAQ />
        <CTASection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
