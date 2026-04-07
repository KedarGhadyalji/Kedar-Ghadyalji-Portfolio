import { Button } from "../components/Button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLight, setIsLight] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme === "light";
    }
    return false;
  });

  // Theme Sync Logic
  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [isLight]);

  const toggleTheme = () => {
    if (isLight) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsLight(false);
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsLight(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <nav
        className={`container mx-auto relative flex items-center justify-between transition-all duration-500 rounded-full px-6 ${
          isScrolled
            ? "glass-strong py-3 shadow-lg max-w-5xl"
            : "bg-transparent py-0"
        }`}
      >
        {/* Logo - Left */}
        <div className="flex-1 lg:flex-none">
          <a
            href="#"
            className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors"
          >
            KG<span className="text-primary">.</span>
          </a>
        </div>

        {/* Desktop Nav - Absolute Center */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center">
          <div
            className={`${
              isScrolled ? "" : "glass"
            } rounded-full px-2 py-1 flex items-center gap-1 border border-white/5`}
          >
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-5 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 rounded-full hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA & Theme Toggle - Right */}
        <div className="hidden md:flex flex-1 lg:flex-none justify-end items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/20"
            aria-label="Toggle Theme"
          >
            {isLight ? (
              <Moon size={20} className="text-primary" />
            ) : (
              <Sun size={20} className="text-primary" />
            )}
          </button>

          <a href="#contact">
            <Button size="sm" className="rounded-full px-6">
              Contact
            </Button>
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-foreground rounded-xl glass border border-white/10"
            aria-label="Toggle Theme"
          >
            {isLight ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            className="p-2 text-foreground rounded-xl glass border border-white/10"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-22 z-40 md:hidden animate-in fade-in slide-in-from-top-4 duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="mx-6 glass-strong rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="h-px bg-white/10 w-full" />
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full py-6 text-lg rounded-2xl">
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
