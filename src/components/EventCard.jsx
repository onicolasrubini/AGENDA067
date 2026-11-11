
function EventCard({ event }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="relative h-56 shrink-0 overflow-hidden bg-slate-200">
        {event.image ? (
          <img
            src={event.image}
            alt={event.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-slate-500">
            Imagem do evento
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-lg bg-white px-3 py-2 text-xs font-bold text-slate-900 shadow">
          {event.date}
        </span>
      </div>

      <div className="flex h-[260px] flex-col p-5">
        <span className="shrink-0 text-sm font-semibold text-purple-600">
          {event.category}
        </span>

        <h3 className="mt-2 line-clamp-2 text-xl font-bold">
          {event.name}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm text-slate-500">
          {event.location}, Campo Grande - MS
        </p>

        <button
          type="button"
          className="mt-auto w-full rounded-xl border border-slate-200 py-3 text-sm font-semibold transition hover:border-purple-600 hover:bg-purple-50 hover:text-purple-700"
          onClick={() =>
            alert("A página de detalhes será implementada na próxima etapa.")
          }
        >
          Ver detalhes
        </button>
      </div>

    </article>
  );
}

export default EventCard;
