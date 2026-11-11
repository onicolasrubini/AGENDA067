
import { useRef } from "react";
import { events } from "../data/events";
import EventCard from "./EventCard";

function EventCarousel() {
  const carouselRef = useRef(null);

  function scrollCarousel(direction) {
    const carousel = carouselRef.current;

    if (!carousel) return;

    carousel.scrollBy({
      left: direction === "next" ? 360 : -360,
      behavior: "smooth",
    });
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-violet-600 md:text-4xl">
            Eventos Populares
          </h2>
          <p className="mt-2 text-slate-500">
            Confira os eventos que estão acontecendo na cidade.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollCarousel("prev")}
            aria-label="Eventos anteriores"
            className="h-10 w-10 rounded-full border border-slate-300 hover:bg-violet-100"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => scrollCarousel("next")}
            aria-label="Próximos eventos"
            className="h-10 w-10 rounded-full border border-slate-300 hover:bg-violet-100"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="mt-8 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {events.map((event) => (
          <div
            key={event.id}
            className="w-[280px] flex-shrink-0 snap-start sm:w-[320px] lg:w-[350px]"
          >
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventCarousel;
