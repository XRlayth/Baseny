import { Phone, FileText, Ruler, FileCheck, Hammer, CreditCard, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Kontakt",
    description: "Skontaktuj się z nami telefonicznie lub przez formularz",
  },
  {
    number: "02",
    icon: FileText,
    title: "Wycena",
    description: "Przygotujemy bezpłatną wycenę dostosowaną do Twoich potrzeb",
  },
  {
    number: "03",
    icon: Ruler,
    title: "Pomiar",
    description: "Wykonamy dokładny pomiar i ocenę terenu",
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Umowa",
    description: "Podpisanie umowy i ustalenie harmonogramu",
  },
  {
    number: "05",
    icon: Hammer,
    title: "Realizacja",
    description: "Profesjonalna budowa basenu zgodnie z projektem",
  },
  {
    number: "06",
    icon: CreditCard,
    title: "Rozliczenie",
    description: "Końcowe rozliczenie i przekazanie dokumentacji",
  },
  {
    number: "07",
    icon: ShieldCheck,
    title: "Gwarancja",
    description: "2 lata pełnej gwarancji na wykonane prace",
  },
];

export function Process() {
  return (
    <section className="py-20 bg-[#1F304E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Krok po kroku do basenu</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Transparentny proces realizacji od pierwszego kontaktu do zakończenia projektu
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-[#26C6AA]/30"></div>
            
            <div className="grid grid-cols-7 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Circle */}
                  <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 bg-[#26C6AA] rounded-full flex items-center justify-center relative z-10">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <div className="text-3xl text-[#26C6AA]/50 mb-2">{step.number}</div>
                    <h3 className="text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-white/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-[#26C6AA] rounded-full flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-xl text-[#26C6AA]/50 mb-1">{step.number}</div>
                <h3 className="text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
