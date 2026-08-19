import { Container } from "@/components/layout/Container";
import { howItWorksItems } from "./howItWorksItems";

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-dark">
      <span
        aria-hidden="true"
        className="absolute -left-16 top-0 w-72 h-72 opacity-10 blob-2 bg-yellow"
      ></span>
      <Container className="py-16 flex flex-col gap-12">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center">
          Como funciona?
        </h2>

        <ol className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {howItWorksItems.map((item, index) => (
            <li
              key={item.title}
              className={`flex flex-col gap-2 p-7 rounded-3xl text-white border ${index % 2 === 0 ? "bg-yellow/12 border-yellow/25" : "bg-blue/12 border-blue/25"}`}
            >
              <span
                aria-hidden="true"
                className={`mb-2 text-5xl font-black ${index % 2 === 0 ? "text-yellow" : "text-blue"}`}
              >
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="text-white font-black text-lg">{item.title}</h3>
              <p className="text-sm text-white/60">{item.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
