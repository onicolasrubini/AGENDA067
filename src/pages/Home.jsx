
import { Link } from "react-router-dom";
import PopularEvents from "../components/PopularEvents";
import EventCarousel from "../components/EventCarousel";

function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link to="/" className="text-2xl font-extrabold tracking-tight">
            AGENDA<span className="text-purple-600">067</span>
          </Link>

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

          <Link
            to="/login"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold transition hover:border-purple-600 hover:text-purple-600"
          >
            Entrar
          </Link>

        </div>
      </header>

      <main>

        <section
          id="inicio"
          className="relative isolate overflow-hidden bg-slate-950"
        >
          <img
            src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Público em evento"
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />

          <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
              <span className="font-graffiti text-transparent [-webkit-text-stroke:2px_#8B5CF6]">
                Explore
              </span>
              {" "}, Visite, Curta.
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

        <EventCarousel />

        <section id="sobre" className="bg-slate-300">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

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

      <footer className="bg-black text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-lg font-bold text-white">
            AGENDA<span className="text-purple-400">067</span>
          </p>

          <p className="text-sm">
            © Copyright 2026. Direitos reservados{" "}
            <span className="font-semibold text-purple-400">
              Agenda067 Events
            </span>
          </p>

        </div>
      </footer>

    </div>
  );
}

export default Home;
