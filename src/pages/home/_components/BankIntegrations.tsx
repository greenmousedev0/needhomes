import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
const modules = import.meta.glob("/src/assets/banks/*", { eager: true });
const images = Object.values(modules).map((m) => m.default);

export default function BankIntegrations() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-center  mx-auto max-w-xl text-3xl font-black">
        Integrate with leading financial institution
      </h2>
      <div className="h-[80px] container mx-auto mt-12">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container  gap-4 justify-center">
            {images.map((item) => (
              <div className="embla__slide  flex-[0_0_220px] h-20" key={item}>
                <img src={item} alt="" className="h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
