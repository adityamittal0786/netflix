import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-black/0 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-red-600 font-black text-3xl">N</div>
          <span className="text-white font-bold text-xl hidden sm:inline">NETFLIX</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            TV Shows
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            Movies
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            New & Popular
          </a>
        </nav>

        {/* Sign In Button */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-white hover:text-gray-300 transition-colors">
            Sign In
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black/95 px-4 py-4 space-y-4 border-t border-gray-700">
          <a href="#" className="block text-white hover:text-gray-300 transition-colors py-2">
            Home
          </a>
          <a href="#" className="block text-white hover:text-gray-300 transition-colors py-2">
            TV Shows
          </a>
          <a href="#" className="block text-white hover:text-gray-300 transition-colors py-2">
            Movies
          </a>
          <a href="#" className="block text-white hover:text-gray-300 transition-colors py-2">
            New & Popular
          </a>
          <a href="#" className="block text-white hover:text-gray-300 transition-colors py-2">
            Sign In
          </a>
        </nav>
      )}
    </header>
  );
}
