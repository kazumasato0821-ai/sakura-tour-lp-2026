import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428387136/YigJYeeXazuHMpDuQtzPYi/logo_header_e868147f.png";

const navItems = [
  { label: "ツアー概要", href: "#overview" },
  { label: "行程表", href: "#schedule" },
  { label: "過去の様子", href: "#gallery" },
  { label: "お申し込み", href: "#cta" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="flex items-center gap-2.5 transition-colors duration-300"
          >
            <img
              src={LOGO_URL}
              alt="文化と食体験ツアー"
              className={`transition-all duration-300 ${
                isScrolled ? "h-10 w-10" : "h-11 w-11"
              } rounded-full object-cover`}
            />
            <span
              className={`font-serif text-base font-semibold tracking-wide transition-colors duration-300 hidden sm:inline ${
                isScrolled ? "text-sakura-600" : "text-white"
              }`}
            >
              文化と食体験ツアー
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wider transition-colors duration-300 hover:text-sakura-500 ${
                  isScrolled ? "text-sumi" : "text-white/90"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              className="bg-sakura-500 hover:bg-sakura-600 text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              参加申し込み
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-sumi" : "text-white"
            }`}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-sakura-100">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="block text-sumi text-sm font-medium py-2 hover:text-sakura-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setIsMobileOpen(false)}
              className="block bg-sakura-500 text-white text-sm font-medium px-5 py-2.5 rounded-full text-center mt-2"
            >
              参加申し込み
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
