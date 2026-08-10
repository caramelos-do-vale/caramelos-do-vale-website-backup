"use client";
import Image from "next/image";
import { IPetImage } from "@/type/PetImage";
import { Container } from "@/components/layout/Container";

interface IPetImageGallery {
  images: IPetImage[];
  petGender: "f" | "m";
  petName: string;
}

export function PetImageGallery({
  images,
  petGender,
  petName,
}: IPetImageGallery) {
  return (
    <section className="bg-dark" id="pet-gallery">
      <Container className="flex flex-col gap-10 py-16">
        <h2 className="text-3xl font-black text-white md:text-4xl">
          Galeria {petGender === "f" ? "da" : "do"} {petName}
        </h2>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((image, index) => (
            <li
              key={image.id}
              className="relative aspect-3/4 overflow-hidden rounded-2xl"
            >
              <Image
                src={image.link}
                alt={`Foto ${index + 1} de ${petName}`}
                fill
                className="object-cover"
                sizes="
                  (max-width: 767px) 50vw,
                  (max-width: 1023px) 33vw,
                  25vw
                "
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
