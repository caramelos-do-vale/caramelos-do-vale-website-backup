import { CTABanner } from "@/components/layout/CTABanner";
import { PageHero } from "@/components/layout/PageHero";
import { mainInfo } from "@/constants/mainInfo";
import { AvailablePetsContent } from "./AvailablePetsContent";
import { Suspense } from "react";
import { AvailablePetsSkeleton } from "@/components/layout/Skeleton/AvailablePetsSkeleton";

export async function PetsPage() {
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
      <Suspense fallback={<AvailablePetsSkeleton />}>
        <AvailablePetsContent />
      </Suspense>
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
