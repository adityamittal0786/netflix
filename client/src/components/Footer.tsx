import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Contact Link */}
        <p className="text-gray-400 text-sm mb-8">
          Questions? <a href="#" className="hover:text-white transition-colors">Contact us.</a>
        </p>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors block">FAQ</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors block">Help Centre</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors block">Account</a>
          </div>
          <div className="space-y-3">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors block">Media Centre</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors block">Investor Relations</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors block">Jobs</a>
          </div>
          <div className="space-y-3">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors block">Ways to Watch</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors block">Terms of Use</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors block">Privacy</a>
          </div>
          <div className="space-y-3">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors block">Cookie Preferences</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors block">Corporate Information</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors block">Contact Us</a>
          </div>
        </div>

        {/* Language Selector */}
        <div className="mb-8">
          <div className="flex items-center gap-2 border border-gray-600 rounded px-3 py-2 w-fit">
            <Globe className="w-4 h-4 text-gray-400" />
            <select className="bg-transparent text-gray-300 text-sm focus:outline-none">
              <option>English</option>
              <option>中文</option>
              <option>Español</option>
              <option>Français</option>
            </select>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          Netflix Singapore
        </p>
      </div>
    </footer>
  );
}
