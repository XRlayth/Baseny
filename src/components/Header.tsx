import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past hero section (approximately 700px)
      setIsScrolled(window.scrollY > 700);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'fixed top-0 bg-white/95 backdrop-blur-md shadow-lg' 
        : 'absolute top-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main navigation */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <span className={`text-2xl transition-colors duration-300 ${
                isScrolled ? 'text-[#1F304E]' : 'text-white drop-shadow-lg'
              }`}>
                Baseny Rzeszów
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#home" className={`transition-colors ${
              isScrolled 
                ? 'text-[#1F304E]/90 hover:text-[#1F304E]' 
                : 'text-white/90 hover:text-white drop-shadow-lg'
            }`}>
              Strona główna
            </a>
            <a href="#about" className={`transition-colors ${
              isScrolled 
                ? 'text-[#1F304E]/90 hover:text-[#1F304E]' 
                : 'text-white/90 hover:text-white drop-shadow-lg'
            }`}>
              O nas
            </a>
            
            <div className="relative group">
              <button className={`flex items-center gap-1 transition-colors ${
                isScrolled 
                  ? 'text-[#1F304E]/90 hover:text-[#1F304E]' 
                  : 'text-white/90 hover:text-white drop-shadow-lg'
              }`}>
                Usługi
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4">
                  <a href="#services" className="block px-4 py-2 text-sm text-[#1F304E] hover:bg-[#26C6AA]/10 rounded">
                    Baseny do domu
                  </a>
                  <a href="#services" className="block px-4 py-2 text-sm text-[#1F304E] hover:bg-[#26C6AA]/10 rounded">
                    Baseny ogrodowe
                  </a>
                  <a href="#services" className="block px-4 py-2 text-sm text-[#1F304E] hover:bg-[#26C6AA]/10 rounded">
                    Baseny komercyjne
                  </a>
                  <a href="#services" className="block px-4 py-2 text-sm text-[#1F304E] hover:bg-[#26C6AA]/10 rounded">
                    Baseny kryte
                  </a>
                  <a href="#services" className="block px-4 py-2 text-sm text-[#1F304E] hover:bg-[#26C6AA]/10 rounded">
                    Serwis i konserwacja
                  </a>
                  <a href="#services" className="block px-4 py-2 text-sm text-[#1F304E] hover:bg-[#26C6AA]/10 rounded">
                    Renowacja basenów
                  </a>
                </div>
              </div>
            </div>

            <a href="#portfolio" className={`transition-colors ${
              isScrolled 
                ? 'text-[#1F304E]/90 hover:text-[#1F304E]' 
                : 'text-white/90 hover:text-white drop-shadow-lg'
            }`}>
              Realizacje
            </a>
            <a href="#blog" className={`transition-colors ${
              isScrolled 
                ? 'text-[#1F304E]/90 hover:text-[#1F304E]' 
                : 'text-white/90 hover:text-white drop-shadow-lg'
            }`}>
              Blog
            </a>
            <a href="#contact" className={`transition-colors ${
              isScrolled 
                ? 'text-[#1F304E]/90 hover:text-[#1F304E]' 
                : 'text-white/90 hover:text-white drop-shadow-lg'
            }`}>
              Kontakt
            </a>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button className="bg-gradient-to-r from-[#4A90E2] to-[#6BB6FF] text-white border-2 border-white/30 shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,144,226,0.6)]">
              <Phone className="h-4 w-4 mr-2" />
              +48 123 456 789
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-[#1F304E]' : 'text-white drop-shadow-lg'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-[#1F304E]' : 'text-white drop-shadow-lg'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-4">
            <a href="#home" className="block py-2 text-[#1F304E] hover:text-[#26C6AA]">
              Strona główna
            </a>
            <a href="#about" className="block py-2 text-[#1F304E] hover:text-[#26C6AA]">
              O nas
            </a>
            <a href="#services" className="block py-2 text-[#1F304E] hover:text-[#26C6AA]">
              Usługi
            </a>
            <a href="#portfolio" className="block py-2 text-[#1F304E] hover:text-[#26C6AA]">
              Realizacje
            </a>
            <a href="#blog" className="block py-2 text-[#1F304E] hover:text-[#26C6AA]">
              Blog
            </a>
            <a href="#contact" className="block py-2 text-[#1F304E] hover:text-[#26C6AA]">
              Kontakt
            </a>
            <Button className="w-full bg-gradient-to-r from-[#4A90E2] to-[#6BB6FF] text-white border-2 border-white/30 shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,144,226,0.6)]">
              <Phone className="h-4 w-4 mr-2" />
              +48 123 456 789
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
