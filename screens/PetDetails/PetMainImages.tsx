"use client";
import Image from "next/image";
import { IPetImage } from "@/type/PetImage";

interface IPetMainImages {
  images: IPetImage[];
  petProfileImg: string;
  petName: string;
}

export function PetMainImages({
  images,
  petName,
  petProfileImg,
}: IPetMainImages) {
  const sideImages = images.slice(1, 3);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[2fr_1fr]">
        <div className="relative min-h-100 overflow-hidden rounded-3xl md:row-span-2">
          <Image
            src={petProfileImg}
            alt={`Foto de ${petName}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover"
          />
        </div>
        {sideImages.length ? (
          sideImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-3xl"
            >
              <Image
                src={image.link}
                alt={`Foto de ${petName}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
