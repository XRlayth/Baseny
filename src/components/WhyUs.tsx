import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Phone, ArrowRight } from "lucide-react";

export function WhyUs() {
  return (
    <section className="py-0">
      {/* First Stripe - Deep Blue Title */}
      <div className="bg-[#1F304E] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl text-white">
            Profesjonalna Budowa i Kompleksowa Obsługa Basenów
          </h2>
        </div>
      </div>

      {/* Second Stripe - Slightly Lighter Blue with Cards */}
      <div className="bg-[#2A4A7F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 - Sauny */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1654204952090-529e54fd1a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzYXVuYSUyMHdvb2R8ZW58MXx8fHwxNzYxMDEyNjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Sauna"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-[#1F304E] mb-4 text-center">Sauny</h3>
                <div className="flex flex-col gap-3">
                  <Button
                    variant="outline"
                    className="w-full border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white transition-all duration-300"
                  >
                    Sauna ogrodowa
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white transition-all duration-300"
                  >
                    Sauna rekreacyjna
                  </Button>
                </div>
              </div>
            </div>

            {/* Card 2 - Baseny */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwb29sJTIwaG91c2V8ZW58MXx8fHwxNzYxMDEyNjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Basen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-[#1F304E] mb-4 text-center">Baseny</h3>
                <div className="flex flex-col gap-3">
                  <Button
                    variant="outline"
                    className="w-full border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white transition-all duration-300"
                  >
                    Basen rekreacyjny
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white transition-all duration-300"
                  >
                    Basen domowy
                  </Button>
                </div>
              </div>
            </div>

            {/* Card 3 - Serwis (Larger Card) */}
            <div className="lg:col-span-1 lg:row-span-1 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-2xl text-[#1F304E] mb-6">Serwis</h3>
                <div className="flex flex-col gap-3 mb-6">
                  <Button
                    variant="outline"
                    className="justify-start border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white transition-all duration-300"
                  >
                    Naprawa basenów
                  </Button>
                  <Button
                    variant="outline"
                    className="justify-start border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white transition-all duration-300"
                  >
                    Renowacja basenów
                  </Button>
                </div>
                <div className="mt-auto">
                  <Button
                    className="w-full bg-gradient-to-r from-[#4A90E2] to-[#6BB6FF] text-white border-2 border-white/30 shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,144,226,0.6)]"
                  >
                    Zobacz więcej
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Stripe - Deep Blue with Action Buttons */}
      <div className="bg-[#1F304E] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#4A90E2] to-[#6BB6FF] text-white border-2 border-white/30 px-8 shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,144,226,0.6)]"
            >
              Zobacz wszystkie
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1F304E] px-8 transition-all duration-300"
            >
              <Phone className="mr-2 h-4 w-4" />
              Zadzwoń
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
