import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "W jakiego typu basenach się specjalizujecie?",
    answer: "Specjalizujemy się w budowie i serwisie wszystkich rodzajów basenów: ogrodowych, krytych, domowych, komercyjnych oraz rekreacyjnych. Każdy projekt dostosowujemy indywidualnie do potrzeb klienta.",
  },
  {
    question: "Jak przebiega proces realizacji?",
    answer: "Proces składa się z 7 etapów: kontakt, bezpłatna wycena, pomiar terenu, podpisanie umowy, realizacja projektu, rozliczenie oraz gwarancja. Cały proces trwa od 4 do 12 tygodni w zależności od złożoności projektu.",
  },
  {
    question: "Czy oferujecie gwarancję?",
    answer: "Tak, każda nasza realizacja objęta jest pełną 2-letnią gwarancją na wykonane prace i zastosowane materiały. Dodatkowo oferujemy możliwość wykupienia przedłużonej gwarancji.",
  },
  {
    question: "Czy wykonujecie tylko budowę czy też serwis?",
    answer: "Oferujemy kompleksowe usługi - od projektu i budowy, przez serwis i konserwację, aż po renowację starych basenów. Zapewniamy również pełne zaplecze techniczne i chemię basenową.",
  },
  {
    question: "Jaki jest koszt budowy basenu?",
    answer: "Koszt zależy od wielu czynników: rozmiaru basenu, typu (ogrodowy/kryty), zastosowanych materiałów i dodatków (np. podgrzewanie, oświetlenie). Po darmowych oględzinach przygotujemy szczegółową wycenę dopasowaną do Twojego budżetu.",
  },
  {
    question: "Czy działacie na terenie całej Polski?",
    answer: "Tak, realizujemy projekty na terenie całej Polski. Nasze zespoły są mobilne i przygotowane do wykonania prac w każdym zakątku kraju.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#1F304E] mb-4">Najczęstsze pytania</h2>
          <p className="text-lg text-gray-600">
            Odpowiedzi na pytania, które najczęściej nam zadajecie
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-[#1F304E] hover:text-[#26C6AA] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
