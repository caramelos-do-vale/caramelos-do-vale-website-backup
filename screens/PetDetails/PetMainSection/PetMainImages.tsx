"use client";
import Image from "next/image";
import { IPetImage } from "@/type/PetImage";
import { MinusIcon, PlusIcon } from "lucide-react";

interface IPetMainImages {
  images: IPetImage[];
  petName: string;
  showGallery: boolean;
  handleShowGallery: (showGallery: boolean) => void;
}

export function PetMainImages({
  images,
  petName,
  showGallery,
  handleShowGallery,
}: IPetMainImages) {
  const mainImage = images[0];
  const sideImages = images.slice(1, 3);

  return (
    <div>
      <div
        className="
        grid
        grid-cols-1
        gap-4
        md:grid-cols-[2fr_1fr]
    "
      >
        <div
          className="
            relative
            min-h-100
            overflow-hidden
            rounded-3xl
            md:row-span-2
        "
        >
          <Image
            src={mainImage.link}
            alt={`Foto de ${petName}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover"
          />
        </div>
        {sideImages.map((image) => (
          <div
            key={image.id}
            className="
                relative
                aspect-square
                overflow-hidden
                rounded-3xl
            "
          >
            <Image
              src={image.link}
              alt={`Foto de ${petName}`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      {images.length > 3 && (
        <div className="flex justify-center mt-3">
          <button
            type="button"
            onClick={() => handleShowGallery(!showGallery)}
            aria-expanded={showGallery}
            aria-controls="pet-gallery"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              font-bold
              transition-all
              duration-200
              ease-out
              hover:-translate-y-0.5
              active:translate-y-0
              px-3.5 
              py-1.5 
              text-xs 
              md:px-5 
              md:py-2 
              md:text-sm
              text-dark 
              hover:bg-dark/10
            "
          >
            {showGallery ? (
              <>
                <MinusIcon size={14} /> Fechar galeria de fotos
              </>
            ) : (
              <>
                <PlusIcon size={14} /> Ver todas as fotos de {petName}
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
