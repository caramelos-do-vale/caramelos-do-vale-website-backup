import { PageHero } from "@/components/layout/PageHero";
import { ContactUsSection } from "./ContactUsSection";
import { Container } from "@/components/layout/Container";
import { DonateSection } from "./DonateSection";
import { FindUsSection } from "./FindUsSection";

export function ContactPage() {
  return (
    <>
      <PageHero
        variant="secondary"
        details={
          <span
            aria-hidden="true"
            className="absolute -top-10 -right-10 w-72 h-72 opacity-10 blob-1 bg-yellow"
          ></span>
        }
        tag="Fale com a gente"
        title={
          <>
            Ficou com alguma <span className="text-yellow">dúvida?</span>
          </>
        }
      />
      <Container className="py-14 flex flex-col gap-10">
        <ContactUsSection />
        <DonateSection />
        <FindUsSection />
      </Container>
    </>
  );
}
