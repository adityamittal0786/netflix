import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { Movie } from "@/lib/movies";

interface MovieCarouselProps {
  title: string;
  movies: Movie[];
}

export default function MovieCarousel({ title, movies }: MovieCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="relative group mb-12">
      <h2 className="text-2xl font-bold text-white mb-4 px-4 md:px-8">{title}</h2>

      <div className="relative">
        {/* Left scroll button */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 p-2 rounded-full transition-all duration-200 ml-2"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        )}

        {/* Movie carousel */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-2 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4"
          style={{ scrollBehavior: "smooth" }}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex-shrink-0 relative group/movie cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-10"
            >
              <div className="relative w-48 h-72 rounded-lg overflow-hidden bg-gray-800">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Rank badge */}
                {movie.rank && (
                  <div className="absolute top-2 right-2 bg-yellow-400 text-black font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">
                    {movie.rank}
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover/movie:bg-black/40 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover/movie:opacity-100">
                  <p className="text-white font-semibold text-sm line-clamp-2">
                    {movie.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right scroll button */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 p-2 rounded-full transition-all duration-200 mr-2"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        )}
      </div>
    </div>
  );
}
