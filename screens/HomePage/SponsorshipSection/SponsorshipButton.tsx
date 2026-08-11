"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { trackEvent } from "@/analytics";

interface ISponsorshipButton {
  petId: number;
  petName: string;
  petGroupLink: string;
}

export function SponsorshipButton({
  petId,
  petName,
  petGroupLink,
}: ISponsorshipButton) {
  function handleClick() {
    trackEvent("click_sponsorship", {
      pet_id: petId,
      pet_name: petName,
    });
  }

  return (
    <ButtonLink
      href={petGroupLink}
      size="sm"
      variant="dark"
      className="w-fit"
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      Apadrinhar
    </ButtonLink>
  );
}
