
import { events } from "../data/events";
import EventCard from "./EventCard";

function PopularEvents() {
  return (
    <section
      id="eventos"
      className="mx-auto max-w-7xl px-6 py-16 md:py-20"
    >
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-violet-600 md:text-4xl">
            Eventos Populares
          </h2>
        </div>

        <a
          href="#eventos"
          className="font-semibold text-purple-700 hover:text-purple-900"
        >
          Ver todos os eventos →
        </a>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}

export default PopularEvents;
