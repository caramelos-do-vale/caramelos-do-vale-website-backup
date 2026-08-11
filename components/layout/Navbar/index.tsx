"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navbarItems } from "./navbarItems";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "../Container";
import { usePathname } from "next/navigation";
import { mainInfo } from "@/constants/mainInfo";

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen((current) => !current);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="border-yellow bg-warm-white/97 fixed top-0 right-0 left-0 z-50 border-b-2 shadow-[rgba(26,46,56,0.08)_0px_2px_20px]">
      <Container className="grid h-15 grid-cols-[1fr_auto_auto] items-center gap-4 md:flex md:h-16 md:justify-between">
        <Link
          href="/"
          aria-label="Caramelos do Vale — página inicial"
          onClick={closeMenu}
          className="focus-visible:outline-yellow shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <Image
            src="/caramelos_do_vale_logo.png"
            alt="Caramelos do Vale"
            width={97}
            height={40}
          />
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-2">
            {navbarItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.url}
                  className={`focus-visible:outline-yellow block rounded-xl px-3 py-1.5 text-sm font-bold transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    pathname === item.url
                      ? "bg-blue shadow-blue/20 scale-[1.01] text-white shadow-md"
                      : "text-dark hover:bg-dark/5 hover:text-blue hover:scale-[1.01]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink
          href={mainInfo.communityWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
        >
          Apadrinhe
        </ButtonLink>
        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="text-dark hover:bg-dark/5 focus-visible:outline-yellow flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
        >
          <span
            aria-hidden="true"
            className={`block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            aria-hidden="true"
            className={`block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
              isMenuOpen ? "scale-0 opacity-0" : ""
            }`}
          />

          <span
            aria-hidden="true"
            className={`block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={`border-dark/10 bg-warm-white overflow-hidden border-t transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? "max-h-125 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav
          aria-label="Navegação mobile"
          className="mx-auto max-w-7xl px-4 py-4"
        >
          <ul className="flex flex-col gap-1">
            {navbarItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.url}
                  onClick={closeMenu}
                  className="text-dark hover:bg-dark/5 focus-visible:outline-yellow block rounded-xl px-4 py-3 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
