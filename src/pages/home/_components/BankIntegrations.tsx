import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
const modules = import.meta.glob<string, { default: string }>(
  "/src/assets/banks/*",
  { eager: true },
);

export default function BankIntegrations() {
  const [emblaRef] = useEmblaCarousel(
    { loop: false, skipSnaps: true, containScroll: "keepSnaps" },
    [Autoplay()],
  );
  const images = Object.values(modules).map((m) => m.default);
  return (
    <div className="container mx-auto py-22">
      <h2 className="text-center  mx-auto max-w-xl text-3xl font-black">
        Integrate with leading financial institution
      </h2>
      <div className="h-20 container mx-auto mt-12">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container  gap-4 justify-center">
            {images.map((item, index) => (
              <div
                className="embla__slide   flex-[0_0_220px] h-20"
                key={"slide" + index}
              >
                <img src={item} alt="" className="h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
