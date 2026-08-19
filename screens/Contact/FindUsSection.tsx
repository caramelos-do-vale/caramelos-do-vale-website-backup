import { findUsItems } from "./findUsItems";

export function FindUsSection() {
  return (
    <section
      className="flex flex-col gap-8 md:grid md:grid-cols-2"
      aria-labelledby="find-us-heading"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-black mb-2" id="find-us-heading">
          Onde estamos
        </h2>
        <p className="text-muted">
          Atuamos no Campus do Vale da UFRGS, em Porto Alegre, RS. Nossa atuação
          também se estende ao Jardim Universitário, próximo ao campus.
        </p>
        <p className="text-muted">
          Realizamos cafés mensais no campus — acompanhe o Instagram para saber
          a data do próximo!
        </p>
      </div>
      <div className="p-6 rounded-3xl bg-light border border-border flex flex-col gap-2">
        {findUsItems.map((item) => (
          <dl
            key={item.title}
            className="bg-white border border-border flex items-start gap-4 p-4 rounded-2xl"
          >
            <span aria-hidden="true">{item.icon}</span>
            <div>
              <dt className="mb-0.5 text-xs font-black uppercase text-muted">
                {item.title}
              </dt>
              <dd className="text-sm font-semibold max-w-40">
                {item.description}
              </dd>
            </div>
          </dl>
        ))}
      </div>
    </section>
  );
}
