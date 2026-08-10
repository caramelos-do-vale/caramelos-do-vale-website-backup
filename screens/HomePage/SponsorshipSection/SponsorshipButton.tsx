"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { trackEvent } from "@/analytics";

interface ISponsorshipButton {
  petId: number;
  petName: string;
}

export function SponsorshipButton({ petId, petName }: ISponsorshipButton) {
  function handleClick() {
    trackEvent("click_sponsorship", {
      pet_id: petId,
      pet_name: petName,
    });
  }

  return (
    <ButtonLink
      href={`/pets/${petId}`}
      size="sm"
      variant="dark"
      className="w-fit"
      onClick={handleClick}
    >
      Apadrinhar
    </ButtonLink>
  );
}
