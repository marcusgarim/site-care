import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[728px]">
      <div className="relative h-full">
        {/* Background image container */}
        <div className="absolute w-full h-[660px] top-[68px] left-0" />

        {/* Main background image */}
        <div className="absolute w-[1227px] h-[652px] top-0 left-1/2 -translate-x-1/2 bg-[url(/frame-1597880839-1024x544-png-webp.png)] bg-cover bg-center" />

        {/* Content container */}
        <div className="absolute w-[798px] top-[220px] left-1/2 -translate-x-1/2 flex flex-col items-center">
          {/* Heading section */}
          <div className="w-full text-center mb-12">
            <h1 className="font-normal text-[57.1px] text-neutral-100 tracking-[-1.16px] leading-[81.2px] mb-6 [font-family:'Inter',Helvetica]">
              Moldando novas inteligências
            </h1>

            <div className="flex items-center justify-center">
              <span className="font-normal text-[57.2px] text-neutral-100 tracking-[-1.16px] leading-[81.2px] [font-family:'Inter',Helvetica]">
                através da
              </span>
              <div className="w-[90px] h-[90px] ml-2 shadow-[4px_38px_62px_#00000080] bg-[url(/frame-1597880814-png-webp.png)] bg-cover bg-center" />
            </div>
          </div>

          {/* Tagline */}
          <p className="font-normal text-[15.8px] text-neutral-100 tracking-[0] leading-[25.6px] mb-[112px] [font-family:'Inter',Helvetica]">
            You dream it. We create an AI for it.
          </p>

          {/* CTA Button */}
          <Button className="w-[232px] h-[51px] rounded-xl shadow-[4px_38px_62px_#00000080,inset_-3px_-4px_7px_#ffffff26] bg-[linear-gradient(0deg,rgba(5,22,55,1)_0%,rgba(5,22,55,1)_100%)] [font-family:'Inter',Helvetica] font-bold text-[15px] tracking-[0] leading-[27.2px]">
            Explore Nossas Soluções
          </Button>
        </div>
      </div>
    </section>
  );
};
