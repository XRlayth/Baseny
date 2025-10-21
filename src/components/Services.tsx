import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Baseny do domu",
    description: "Projektujemy i budujemy baseny domowe dostosowane do Twoich potrzeb i przestrzeni",
    image: "https://images.unsplash.com/photo-1680609989998-6183fcea718b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBzd2ltbWluZyUyMHBvb2x8ZW58MXx8fHwxNzYwOTg4NDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Baseny ogrodowe",
    description: "Tworzymy piękne baseny ogrodowe, które harmonijnie wtapiają się w krajobraz",
    image: "https://images.unsplash.com/photo-1716745558923-f01cc834da41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcG9vbCUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjA5ODg0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Baseny komercyjne",
    description: "Realizujemy projekty dla hoteli, spa i centrów rekreacyjnych",
    image: "https://images.unsplash.com/photo-1746475470697-f40519dab2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcG9vbHxlbnwxfHx8fDE3NjA5ODg0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Baseny kryte",
    description: "Specjalizujemy się w budowie basenów krytych z pełnym zapleczem technicznym",
    image: "https://images.unsplash.com/photo-1706808849777-96e0d7be3bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwb29sJTIwZGVzaWdufGVufDF8fHx8MTc2MDk4ODQyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Serwis i konserwacja",
    description: "Kompleksowa obsługa serwisowa, czyszczenie i konserwacja basenów",
    image: "https://images.unsplash.com/photo-1465198901163-2d15b88fecea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwbWFpbnRlbmFuY2V8ZW58MXx8fHwxNzYwOTg4NDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Renowacja basenów",
    description: "Przywracamy starym basenom nowe życie poprzez kompleksową renowację",
    image: "https://images.unsplash.com/photo-1724688078741-6d89e587e809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzd2ltbWluZyUyMHBvb2x8ZW58MXx8fHwxNzYwODgxNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#1F304E] mb-4">Nasze usługi</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferujemy kompleksową obsługę od projektu po wykończenie i serwis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[#1F304E] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button
                  variant="ghost"
                  className="text-[#26C6AA] hover:text-[#1F304E] p-0 h-auto"
                >
                  Zobacz więcej
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
