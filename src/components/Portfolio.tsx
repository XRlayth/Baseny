import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin } from "lucide-react";

const projects = [
  {
    title: "Nowoczesny basen ogrodowy",
    location: "Warszawa",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
  },
  {
    title: "Basen kryty z jacuzzi",
    location: "Kraków",
    image: "https://images.unsplash.com/photo-1680609989998-6183fcea718b?w=800&q=80",
  },
  {
    title: "Ekskluzywny basen hotelowy",
    location: "Wrocław",
    image: "https://images.unsplash.com/photo-1519408299519-b20c0b7e0e78?w=800&q=80",
  },
  {
    title: "Basen z podświetleniem",
    location: "Gdańsk",
    image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=800&q=80",
  },
  {
    title: "Renowacja basenu vintage",
    location: "Poznań",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#1F304E] mb-4 font-bold">Nasze inspirujące projekty</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Działamy na terenie całej Polski, realizując projekty najwyższej jakości
          </p>
          <Button className="bg-gradient-to-r from-[#4A90E2] to-[#6BB6FF] text-white border-2 border-white/30 px-8 py-6 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,144,226,0.6)]">
            Zobacz wszystkie realizacje
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Watery overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F304E]/95 via-[#4A90E2]/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Ripple effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,144,226,0.3),transparent_50%)]"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                <div className="flex items-center gap-2 text-sm text-white/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
