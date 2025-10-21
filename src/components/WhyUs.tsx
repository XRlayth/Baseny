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
                    className="w-full border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-gradient-to-r hover:from-[#4A90E2] hover:to-[#6BB6FF] hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-lg"
                  >
                    Sauna ogrodowa
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-gradient-to-r hover:from-[#4A90E2] hover:to-[#6BB6FF] hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-lg"
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
                    className="w-full border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-gradient-to-r hover:from-[#4A90E2] hover:to-[#6BB6FF] hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-lg"
                  >
                    Basen rekreacyjny
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-gradient-to-r hover:from-[#4A90E2] hover:to-[#6BB6FF] hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-lg"
                  >
                    Basen domowy
                  </Button>
                </div>
              </div>
            </div>

            {/* Card 3 - Serwis */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=500&q=80"
                  alt="Serwis basenów"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-[#1F304E] mb-4 text-center">Serwis</h3>
                <div className="flex flex-col gap-3">
                  <Button
                    variant="outline"
                    className="w-full border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-gradient-to-r hover:from-[#4A90E2] hover:to-[#6BB6FF] hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-lg"
                  >
                    Naprawa basenów
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-gradient-to-r hover:from-[#4A90E2] hover:to-[#6BB6FF] hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-lg"
                  >
                    Renowacja basenów
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
              className="bg-gradient-to-r from-[#4A90E2] to-[#6BB6FF] text-white border-2 border-white/30 px-8 py-6 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,144,226,0.6)]"
            >
              Zobacz wszystkie
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
    </section>
  );
}
