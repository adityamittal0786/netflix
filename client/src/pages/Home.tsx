import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MovieCarousel from "@/components/MovieCarousel";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { trendingMovies, actionMovies, dramaMovies, comedyMovies } from "@/lib/movies";

/**
 * Netflix Homepage Clone
 * 
 * Design Philosophy: Dark-First Minimalism
 * - Deep blacks with strategic red accents for premium, cinematic feel
 * - Content-centric layout where movie imagery dominates
 * - Hierarchy through scale with large headlines and generous whitespace
 * - Smooth interactivity with hover states and fluid transitions
 */
export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Movie Carousels */}
      <div className="bg-black py-8 md:py-12">
        <MovieCarousel title="Trending Now" movies={trendingMovies} />
        <MovieCarousel title="Action" movies={actionMovies} />
        <MovieCarousel title="Drama" movies={dramaMovies} />
        <MovieCarousel title="Comedy" movies={comedyMovies} />
      </div>

      {/* Features Section */}
      <Features />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
}
