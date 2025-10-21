import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1716745558923-f01cc834da41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcG9vbCUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjA5ODg0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Budowa basenu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1F304E]/85"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-white mb-6">
          Zacznij swój projekt już dziś
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Skontaktuj się z nami, aby otrzymać bezpłatną wycenę i konsultację. Nasi eksperci chętnie odpowiedzą na wszystkie pytania.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-[#26C6AA] hover:bg-[#26C6AA]/90 text-white"
          >
            Zamów bezpłatną wycenę
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-[#1F304E]"
          >
            Zadzwoń: +48 123 456 789
          </Button>
        </div>
      </div>
    </section>
  );
}
