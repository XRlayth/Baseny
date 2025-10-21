export function MapSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-[#1F304E]">
            Baseny Rzeszów obejmują wszelkie regiony
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Obsługujemy klientów w całej Polsce, dostarczając wysokiej jakości usługi basenowe
          </p>
        </div>

        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663412.403943602!2d17.511831990873176!3d52.42818971988342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47009964a4640bbb%3A0x97573ca49cc55ea!2sPolska!5e0!3m2!1spl!2spl!4v1753798367435!5m2!1spl!2spl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Polski - Baseny Rzeszów"
          />
        </div>
      </div>
    </section>
  );
}
