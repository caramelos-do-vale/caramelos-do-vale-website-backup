import { CTABanner } from "@/components/layout/CTABanner";
import { PageHero } from "@/components/layout/PageHero";
import { mainInfo } from "@/constants/mainInfo";
import { getPetsForAdoption } from "@/services/pets";
import { AvailablePetsSection } from "./AvailablePetsSection";

export async function PetsPage() {
  const animals = await getPetsForAdoption();

  return (
    <>
      <PageHero
        variant="dark"
        tag="Nossos amigos"
        title={
          <>
            Eles estão esperando{" "}
            <span className="text-yellow">por um lar.</span>
          </>
        }
        description="Cada um tem uma história e merece um lar cheio de amor."
      />
      <AvailablePetsSection animals={animals} />
      <CTABanner
        variant="primary"
        title="Interessado em adotar?"
        description="Entre em contato pelo nosso Instagram e saiba mais sobre o processo de adoção responsável."
        ctaList={[
          {
            label: "Falar com a gente",
            href: mainInfo.instagram.href,
            external: true,
          },
        ]}
      />
    </>
  );
}
