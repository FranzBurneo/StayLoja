import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import type { GalleryImage } from "@/types/property";
import { cn } from "@/lib/utils";

export default function GallerySection({ gallery }: { gallery: GalleryImage[] }) {
  return (
    <section id="galeria" className="bg-aurora-cream py-20 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Fotos"
            title="Conoce el departamento"
            description="Explora los espacios interiores del alojamiento: sala, comedor, cocina, habitaciones, baños y detalles pensados para una estadía cómoda."
          />
          <a
            href="#galeria"
            className="focus-ring inline-flex w-fit rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-bold text-aurora-ink shadow-sm"
          >
            Ver fotos
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((image, index) => (
            <figure
              key={image.title}
              className={cn(
                "group relative min-h-[230px] overflow-hidden rounded-3xl bg-white shadow-soft",
                index === 0 && "sm:col-span-2 lg:row-span-2 lg:min-h-[500px]"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={index === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-5 text-white">
                <h3 className="text-lg font-bold">{image.title}</h3>
                <p className="mt-1 text-sm text-white/86">{image.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
