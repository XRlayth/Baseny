import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const reviews = [
  {
    name: "Anna Kowalska",
    text: "Profesjonalna obsługa od początku do końca. Basen został wykonany w terminie i jakość wykonania przeszła nasze oczekiwania. Polecam!",
    rating: 5,
    location: "Rzeszów"
  },
  {
    name: "Piotr Nowak", 
    text: "Bardzo dobra komunikacja i doradztwo. Zespół pomógł nam wybrać najlepsze rozwiązanie dla naszego ogrodu. Jesteśmy zachwyceni efektem!",
    rating: 5,
    location: "Krosno"
  },
  {
    name: "Maria Wiśniewska",
    text: "Fachowcy z prawdziwego zdarzenia. Renowacja naszego basenu przebiegła sprawnie, a basen wygląda jak nowy. Gorąco polecam!",
    rating: 5,
    location: "Przemyśl"
  },
  {
    name: "Krzysztof Lewandowski",
    text: "Kompleksowa obsługa i uczciwe ceny. Basen został wykonany zgodnie z projektem i w ustalonym terminie. Bardzo dziękujemy!",
    rating: 5,
    location: "Stalowa Wola"
  },
  {
    name: "Katarzyna Zając",
    text: "Świetny kontakt z klientem, terminowość i perfekcyjne wykonanie. Nasz basen ogrodowy to teraz nasza największa duma!",
    rating: 5,
    location: "Jasło"
  },
  {
    name: "Marek Duda",
    text: "Profesjonalny zespół, który zrealizował nasz projekt dokładnie według wizji. Polecamy wszystkim, którzy szukają jakości!",
    rating: 5,
    location: "Sanok"
  }
];

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => 
        prev + itemsPerView >= reviews.length ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [itemsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= reviews.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, reviews.length - itemsPerView) : prev - 1
    );
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + itemsPerView);
  if (visibleReviews.length < itemsPerView) {
    visibleReviews.push(...reviews.slice(0, itemsPerView - visibleReviews.length));
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl text-[#1F304E] mb-4">
            Opinie naszych klientów
          </h3>
          <p className="text-lg text-gray-600">
            Zaufało nam już setki zadowolonych klientów w całym regionie
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 rounded-full w-10 h-10 p-0 bg-white shadow-lg border-gray-200 hover:bg-gray-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 rounded-full w-10 h-10 p-0 bg-white shadow-lg border-gray-200 hover:bg-gray-50"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleReviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#26C6AA] text-[#26C6AA]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 italic text-sm leading-relaxed">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#26C6AA] to-[#1F304E] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-[#1F304E] text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.location} • Google Reviews</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(reviews.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? 'bg-[#26C6AA] w-8'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}