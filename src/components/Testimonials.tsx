import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anna Kowalska",
    text: "Profesjonalna obsługa od początku do końca. Basen został wykonany w terminie i jakość wykonania przeszła nasze oczekiwania. Polecam!",
    rating: 5,
  },
  {
    name: "Piotr Nowak",
    text: "Bardzo dobra komunikacja i doradztwo. Zespół pomógł nam wybrać najlepsze rozwiązanie dla naszego ogrodu. Jesteśmy zachwyceni efektem!",
    rating: 5,
  },
  {
    name: "Maria Wiśniewska",
    text: "Fachowcy z prawdziwego zdarzenia. Renowacja naszego basenu przebiegła sprawnie, a basen wygląda jak nowy. Gorąco polecam!",
    rating: 5,
  },
  {
    name: "Krzysztof Lewandowski",
    text: "Kompleksowa obsługa i uczciwe ceny. Basen został wykonany zgodnie z projektem i w ustalonym terminie. Bardzo dziękujemy!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#1F304E] mb-4">Opinie naszych klientów</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zaufało nam już setki zadowolonych klientów w całej Polsce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#26C6AA] text-[#26C6AA]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#26C6AA]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#26C6AA]">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-[#1F304E]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Opinia pochodząca z Google</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
