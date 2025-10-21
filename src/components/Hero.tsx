import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative h-[700px] lg:h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1655131909396-2d3efc5dde9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjBvdXRkb29yfGVufDF8fHx8MTc2MTAxMjY3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luksusowy basen"
          className="w-full h-full object-cover"
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F304E]/60 via-[#1F304E]/75 to-[#1F304E]/90"></div>
        {/* Additional radial gradient for center focus */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#1F304E]/30 to-[#1F304E]/60"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-full text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight">
              Tworzymy Oazy<br/>Basenowych Marzeń
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-4 max-w-2xl mx-auto">
              Kompleksowa obsługa basenów od A do Z
            </p>
            <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl mx-auto">
              Jakość i terminowość gwarantowane
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#4A90E2] to-[#6BB6FF] text-white border-2 border-white/30 px-8 py-6 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,144,226,0.6)]"
              >
                Zamów bezpłatną wycenę
              </Button>
              <Button 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white hover:text-[#1F304E] px-8 py-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                Zobacz realizacje
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
