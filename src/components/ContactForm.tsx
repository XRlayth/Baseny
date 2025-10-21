import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Phone, Mail, User, MessageSquare } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative -mt-16 z-40 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-6 lg:p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl lg:text-3xl text-[#1F304E] mb-2">
            Umów Bezpłatną Konsultację
          </h2>
          <p className="text-gray-600">
            Skontaktuj się z nami już dziś i otrzymaj profesjonalną wycenę
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Imię i nazwisko"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="pl-10 h-10 border-gray-300 focus:border-[#26C6AA] focus:ring-[#26C6AA]"
              required
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="tel"
              placeholder="Numer telefonu"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="pl-10 h-10 border-gray-300 focus:border-[#26C6AA] focus:ring-[#26C6AA]"
              required
            />
          </div>

          {/* Email */}
          <div className="relative lg:col-span-2">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="pl-10 h-10 border-gray-300 focus:border-[#26C6AA] focus:ring-[#26C6AA]"
              required
            />
          </div>

          {/* Message */}
          <div className="relative lg:col-span-2">
            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Textarea
              placeholder="Wiadomość - opisz swoje potrzeby i oczekiwania"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="pl-10 min-h-[80px] border-gray-300 focus:border-[#26C6AA] focus:ring-[#26C6AA] resize-y"
              rows={3}
            />
          </div>

          {/* Consent */}
          <div className="lg:col-span-2 flex items-start gap-3">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData({...formData, consent: checked as boolean})}
              className="mt-1 data-[state=checked]:bg-[#26C6AA] data-[state=checked]:border-[#26C6AA]"
              required
            />
            <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
              Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{" "}
              <a 
                href="/privacy-policy" 
                className="text-[#26C6AA] hover:text-[#1F304E] underline transition-colors"
              >
                polityką prywatności
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <div className="lg:col-span-2 text-center">
            <Button
              type="submit"
              className="bg-gradient-to-r from-[#4A90E2] to-[#6BB6FF] text-white border-2 border-white/30 px-10 shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,144,226,0.6)]"
            >
              Wyślij zapytanie
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}