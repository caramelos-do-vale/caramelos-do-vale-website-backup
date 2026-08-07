import { Container } from "@/components/layout/Container";
import { statisticsItems } from "./statisticsItems";

export function StatisticsSection() {
  return (
    <section className={`relative overflow-hidden bg-blue`}>
      <span className="absolute -right-10 top-0 w-56 h-56 opacity-10 blob-2 bg-yellow"></span>
      <Container
        className={`py-14 flex flex-col gap-5 items-center md:grid md:grid-cols-3`}
      >
        {statisticsItems.map((item) => (
          <article
            key={item.title}
            className="w-full p-7 rounded-3xl flex items-center gap-5 bg-white/15 border border-white/20 text-white"
          >
            <span aria-hidden="true" className="text-4xl">
              {item.icon}
            </span>
            <div>
              <p className="font-black text-4xl text-yellow">+{item.data}</p>
              <p className="font-black text-base">{item.title}</p>
              <p className="text-xs">{item.description}</p>
            </div>
          </article>
        ))}
      </Container>
    </section>
  );
}
