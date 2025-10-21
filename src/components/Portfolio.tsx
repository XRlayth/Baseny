import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin } from "lucide-react";

const projects = [
  {
    title: "Nowoczesny basen ogrodowy",
    location: "Warszawa",
    image: "https://images.unsplash.com/photo-1724688078741-6d89e587e809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzd2ltbWluZyUyMHBvb2x8ZW58MXx8fHwxNzYwODgxNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Basen kryty z jacuzzi",
    location: "Kraków",
    image: "https://images.unsplash.com/photo-1680609989998-6183fcea718b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBzd2ltbWluZyUyMHBvb2x8ZW58MXx8fHwxNzYwOTg4NDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Ekskluzywny basen hotelowy",
    location: "Wrocław",
    image: "https://images.unsplash.com/photo-1746475470697-f40519dab2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcG9vbHxlbnwxfHx8fDE3NjA5ODg0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Basen z podświetleniem",
    location: "Gdańsk",
    image: "https://images.unsplash.com/photo-1706808849777-96e0d7be3bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwb29sJTIwZGVzaWdufGVufDF8fHx8MTc2MDk4ODQyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Renowacja basenu vintage",
    location: "Poznań",
    image: "https://images.unsplash.com/photo-1716745558923-f01cc834da41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwcG9vbCUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjA5ODg0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Basen infinity z widokiem",
    location: "Zakopane",
    image: "https://images.unsplash.com/photo-1465198901163-2d15b88fecea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwbWFpbnRlbmFuY2V8ZW58MXx8fHwxNzYwOTg4NDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#1F304E] mb-4">Nasze inspirujące projekty</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Działamy na terenie całej Polski, realizując projekty najwyższej jakości
          </p>
          <Button variant="outline" className="border-[#26C6AA] text-[#26C6AA] hover:bg-[#26C6AA] hover:text-white">
            Zobacz wszystkie realizacje
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F304E]/90 via-[#1F304E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white mb-2">{project.title}</h3>
                <div className="flex items-center gap-2 text-sm text-white/80">
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
