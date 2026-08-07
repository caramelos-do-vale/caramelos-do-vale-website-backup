"use client";
import Image from "next/image";
import { IPetImage } from "@/type/PetImage";
import { Container } from "@/components/layout/Container";

interface IPetImageGallery {
  images: IPetImage[];
  petGender: "f" | "m";
  petName: string;
  handleShowGallery: (showGallery: boolean) => void;
}

export function PetImageGallery({
  images,
  petGender,
  petName,
  handleShowGallery,
}: IPetImageGallery) {
  return (
    <section className="bg-dark" id="pet-gallery">
      <Container className="py-16 flex flex-col gap-10">
        <h2 className="text-3xl md:text-4xl font-black text-white">
          Galeria {petGender === "f" ? "da" : "do"} {petName}
        </h2>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((image, index) => (
            <li
              key={image.id}
              className="
                relative
                aspect-3/4
                overflow-hidden
                rounded-2xl
              "
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
        <div className="flex justify-center items-center mt-10">
          <button
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-yellow
              shadow-[0_4px_14px_rgba(234,183,74,0.35)] 
              hover:shadow-[0_6px_18px_rgba(234,183,74,0.45)]
              px-6
              py-3
              text-sm
              font-bold
            "
            onClick={() => handleShowGallery(false)}
          >
            Fechar galeria de fotos
          </button>
        </div>
      </Container>
    </section>
  );
}
