
const events = [
  {
    id: 1,
    name: "FELIPE E RODRIGO + JAPA NK - EXPO GENÉTICA",
    category: "Musica",
    date: "06 NOV",
    location: "Parque Laucídio Coelho",
    image:"/img/japa nk event.jpg",
  },
  {
    id: 2,
    name: "THIAGUINHO - EXPOGRANDE 2026",
    category: "Música",
    date: "28 ABR",
    location: "R. Américo Carlos da Costa, 320",
    image:"/img/thiaguinho.jpg",
  },
  {
    id: 3,
    name: "GUSTAVO LIMA - EXPOGRANDE 2026",
    category: "Música",
    date: "01 NOV",
    location: "Feira Central",
    image:"/img/gustavo.jpg",
  },
  {
    id: 3,
    name: "FESTIVAL DE SOBÁ - FEIRA CENTRAL",
    category: "Gastronomia",
    date: "01 NOV",
    location: "Feira Central",
    image:"/img/festival-soba.jpg",
  },
{
    id: 3,
    name: "GUSTAVO LIMA - EXPOGRANDE 2026",
    category: "Música",
    date: "01 NOV",
    location: "Feira Central",
    image:"/img/gustavo.jpg",
  },
  {
    id: 3,
    name: "GUSTAVO LIMA - EXPOGRANDE 2026",
    category: "Música",
    date: "01 NOV",
    location: "Feira Central",
    image:"/img/gustavo.jpg",
  },
  {
    id: 3,
    name: "GUSTAVO LIMA - EXPOGRANDE 2026",
    category: "Música",
    date: "01 NOV",
    location: "Feira Central",
    image:"/img/gustavo.jpg",
  },
  {
    id: 3,
    name: "GUSTAVO LIMA - EXPOGRANDE 2026",
    category: "Música",
    date: "01 NOV",
    location: "Feira Central",
    image:"/img/gustavo.jpg",
  },
  {
    id: 3,
    name: "GUSTAVO LIMA - EXPOGRANDE 2026",
    category: "Música",
    date: "01 NOV",
    location: "Feira Central",
    image:"/img/gustavo.jpg",
  },









];

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-extrabold tracking-tight">
            AGENDA<span className="text-purple-600">067</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#inicio" className="hover:text-purple-600">
              Início
            </a>
            <a href="#eventos" className="hover:text-purple-600">
              Eventos
            </a>
            <a href="#sobre" className="hover:text-purple-600">
              Sobre o projeto
            </a>
          </nav>

          <a
            href="/login"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold transition hover:border-purple-600 hover:text-purple-600"
          >
            Entrar
          </a>
        </div>
      </header>

      <main>
        <section
          id="inicio"
          className="relative isolate overflow-hidden bg-slate-950"
        >
          <img
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Público em evento"
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />
          <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              <span className="font-heading text-transparent [-webkit-text-stroke:2px_#8B5CF6]">Explore</span>
              {" "}, Visite , Curta.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Shows, feiras, festivais e experiências culturais. Encontre seu
              próximo evento e aproveite tudo o que a cidade tem para oferecer.
            </p>

            <a
              href="#eventos"
              className="mt-9 inline-flex rounded-full bg-purple-500 px-7 py-3.5 font-semibold text-white transition hover:bg-purple-600"
            >
              Explorar eventos
            </a>
          </div>
        </section>

        <section id="eventos" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
                <h2 className="font-display  mt-2 text-3xl font-bold tracking-tight md:text-4xl text-violet-600">
                  Eventos Populares
                </h2>
              {/* <p className="mt-3 text-slate-500">
                Descubra experiências para incluir na sua agenda.
              </p> */}
            </div>

            <a
              href="#todos-eventos"
              className="font-semibold text-purple-700 hover:text-purple-900"
            >
              Ver todos os eventos →
            </a>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <article
                key={event.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-lg bg-white px-3 py-2 text-xs font-bold text-slate-900 shadow">
                    {event.date}
                  </span>
                </div>

                <div className="p-5">
                  <span className="text-sm font-semibold text-purple-600">
                    {event.category}
                  </span>

                  
                  <h3 className="mt-2 text-xl font-bold">{event.name}</h3>

                  <p className="mt-3 text-sm text-slate-500">
                    <img
                      src="/img/icon.loc.png"
                      alt="ícone de localização"
                      className="inline-block h-4 w-4 mr-1"
                    />
                    {event.location}, Campo Grande - MS
                  </p>

                  <button
                    type="button"
                    className="mt-5 w-full rounded-xl border border-slate-200 py-3 text-sm font-semibold transition hover:border-purple-600 hover:bg-purple-50 hover:text-purple-700"
                    onClick={() =>
                      alert("A página de detalhes será implementada na próxima etapa.")
                    }
                  >
                    Ver detalhes
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="sobre" className="bg-slate-50">
          <div className=" max-w-7xl px-6 py-16 md:py-20">
            <h2 className="mx-32 mt-3 max-w-2xl text-3xl font-bold md:text-4xl">
              Como funciona.
            </h2>

            <p className="mx-32 mt-4 max-w-2xl leading-7 text-slate-600">
              Uma agenda dedicada a reunir eventos culturais de Campo Grande
              em um só lugar, facilitando a descoberta de novas experiências
              na cidade.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-slate-700 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-bold text-white">
            {/* agenda<span className="text-purple-400">067</span> */}
          </p>
          <p className="text-sm">
            © Copyright 2026. Direitos reservados {" "}
            <a
              href=""
              className="font-semibold text-purple-400 hover:text-purple-600">
              Agenda067 Events
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
