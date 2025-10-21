import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1F304E] text-white">
      {/* Contact Form Section */}
      <div id="contact" className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">Skontaktuj się z nami</h2>
              <p className="text-white/80">
                Wypełnij formularz, a my skontaktujemy się z Tobą w ciągu 24 godzin
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">
                    Imię i nazwisko *
                  </label>
                  <Input
                    id="name"
                    placeholder="Jan Kowalski"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm mb-2">
                    Numer telefonu *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+48 123 456 789"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  E-mail *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jan.kowalski@example.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Wiadomość *
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Opisz swój projekt..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox id="consent" className="mt-1 border-white/20 data-[state=checked]:bg-[#26C6AA]" />
                <label htmlFor="consent" className="text-sm text-white/80 cursor-pointer">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z polityką prywatności w celu kontaktu zwrotnego *
                </label>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-[#26C6AA] hover:bg-[#26C6AA]/90 text-white"
              >
                Wyślij wiadomość
              </Button>

              <p className="text-xs text-white/60 text-center">
                * Pola wymagane
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#26C6AA] rounded-lg flex items-center justify-center">
                  <span className="text-white">PB</span>
                </div>
                <span className="text-xl text-white">Baseny Rzeszów</span>
              </div>
              <p className="text-white/70 text-sm mb-4">
                Kompleksowa obsługa basenów od A do Z. Jakość i terminowość gwarantowane.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#26C6AA] rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#26C6AA] rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#26C6AA] rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white mb-4">Usługi</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="text-white/70 hover:text-[#26C6AA] transition-colors">Baseny do domu</a></li>
                <li><a href="#services" className="text-white/70 hover:text-[#26C6AA] transition-colors">Baseny ogrodowe</a></li>
                <li><a href="#services" className="text-white/70 hover:text-[#26C6AA] transition-colors">Baseny komercyjne</a></li>
                <li><a href="#services" className="text-white/70 hover:text-[#26C6AA] transition-colors">Serwis i konserwacja</a></li>
                <li><a href="#services" className="text-white/70 hover:text-[#26C6AA] transition-colors">Renowacja</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white mb-4">Szybkie linki</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-white/70 hover:text-[#26C6AA] transition-colors">O nas</a></li>
                <li><a href="#portfolio" className="text-white/70 hover:text-[#26C6AA] transition-colors">Realizacje</a></li>
                <li><a href="#blog" className="text-white/70 hover:text-[#26C6AA] transition-colors">Blog</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-[#26C6AA] transition-colors">Kontakt</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#26C6AA] transition-colors">Polityka prywatności</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white mb-4">Kontakt</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#26C6AA] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70">ul. Przykładowa 123<br />00-001 Warszawa</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#26C6AA] flex-shrink-0" />
                  <a href="tel:+48123456789" className="text-white/70 hover:text-[#26C6AA] transition-colors">+48 123 456 789</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#26C6AA] flex-shrink-0" />
                  <a href="mailto:kontakt@poolbaseny.pl" className="text-white/70 hover:text-[#26C6AA] transition-colors">kontakt@poolbaseny.pl</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-white/60">
            © 2025 Baseny Rzeszów. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
