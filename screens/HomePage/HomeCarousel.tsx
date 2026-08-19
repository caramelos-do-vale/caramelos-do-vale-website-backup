"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { mainInfo } from "@/constants/mainInfo";

const slides = [
  {
    image: "/home_1.png",
    alt: "Acompanhe a Caramelos do Vale no Instagram",
    href: mainInfo.instagram.href,
    external: true,
  },
  {
    image: "/home_2.png",
    alt: "Faça parte da Caramelos e ganhe horas de extensão",
    href: mainInfo.publicNotice,
    external: true,
  },
];

const SLIDE_DURATION = 7000;

export function HomeCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((current) =>
        current === slides.length - 1 ? 0 : current + 1,
      );
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Destaques da Caramelos do Vale"
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
          aria-live={isPaused ? "polite" : "off"}
        >
          {slides.map((slide, index) => {
            const content = (
              <div className="relative aspect-1920/600 w-full shrink-0">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
              </div>
            );

            return (
              <Link
                key={slide.image}
                href={slide.href}
                aria-label={slide.alt}
                className="block w-full shrink-0"
                {...(slide.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>

      <div
        className="
          absolute
          bottom-2
          left-1/2
          flex
          -translate-x-1/2
          gap-2
        "
      >
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Ir para destaque ${index + 1}: ${slide.alt}`}
            aria-current={currentSlide === index}
            onClick={() => setCurrentSlide(index)}
            className={`
              h-1.5
              rounded-full
              transition-all
              duration-300
              ${
                currentSlide === index
                  ? "w-4 bg-dark"
                  : "w-1.5 bg-white/70 hover:bg-white"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}
