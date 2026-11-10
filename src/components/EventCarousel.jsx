
import { useEffect, useRef, useState } from "react";
import { events } from "../data/events";
import EventCard from "./EventCard";

function EventCarousel() {
  const carouselRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    let animationFrame;

    function updateProgress() {
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;

      if (maxScroll <= 0) {
        setProgress(0);
        return;
      }

      setProgress((carousel.scrollLeft / maxScroll) * 100);
    }

    function animate() {
      if (!isPaused) {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;

        if (maxScroll > 0) {
          if (carousel.scrollLeft >= maxScroll - 1) {
            carousel.scrollTo({
              left: 0,
              behavior: "smooth",
            });
          } else {
            carousel.scrollLeft += 0.35;
          }
        }
      }

      animationFrame = requestAnimationFrame(animate);
    }

    carousel.addEventListener("scroll", updateProgress);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      carousel.removeEventListener("scroll", updateProgress);
    };
  }, [isPaused]);

  function handleProgressChange(e) {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    carousel.scrollLeft = (Number(e.target.value) / 100) * maxScroll;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div>
        <h2 className="text-3xl font-bold text-violet-600 md:text-4xl">
          Eventos Populares
        </h2>

        <p className="mt-2 text-slate-500">
          Confira os eventos que estão acontecendo na cidade.
        </p>
      </div>

      <div
        ref={carouselRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
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

      <input
        type="range"xs
        min="0"
        max="100"
        step="0.1"
        value={progress}
        onChange={handleProgressChange}
        onMouseDown={() => setIsPaused(true)}
        onMouseUp={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-violet-600"
        aria-label="Navegar pelos eventos"
      />
    </section>
  );
}

export default EventCarousel;
