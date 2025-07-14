import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeatureSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      <div className="relative w-full h-[958px] bg-[url(/frame-1597880849-1-2048x858-png-webp.png)] bg-cover bg-center">
        <div className="relative max-w-7xl mx-auto">
          {/* Content Container */}
          <div className="flex flex-col items-center justify-center mt-36">
            {/* Heading Section */}
            <div className="flex flex-col items-center text-center mb-16 max-w-4xl">
              <div className="flex items-center mb-6">
                <h2 className="text-5xl font-normal text-neutral-100 tracking-tight leading-tight mr-4">
                  Cronograma do piloto
                </h2>
                <div className="flex items-center">
                  <span className="text-5xl font-bold text-neutral-100 tracking-tight leading-tight">
                    Care
                  </span>
                  <div className="w-[90px] h-[90px] shadow-[4px_38px_62px_#00000080] bg-[url(/frame-1597880814-png-webp-1.png)] bg-cover bg-center" />
                </div>
              </div>

              <p className="text-xl text-neutral-100 mb-4">
                De maneira objetiva, apresentamos o que é viável ou inviável,
                implementando soluções em um
              </p>

              <div className="flex items-center">
                <Card className="mr-4 rounded-xl shadow-[4px_38px_62px_#00000080,inset_-3px_-4px_7px_#ffffff26] [background:url(..//link-2.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(0,240,200,0.2)_0%,rgba(0,240,200,0.2)_100%)]">
                  <CardContent className="p-3.5">
                    <p className="font-bold text-neutral-100 text-[15.1px] leading-[27.2px] whitespace-nowrap">
                      Prazo de 2 a 4 meses,
                    </p>
                  </CardContent>
                </Card>
                <p className="text-xl text-neutral-100">
                  garantimos total transparência e visibilidade em cada etapa do
                  processo.
                </p>
              </div>
            </div>

            {/* Timeline Visualization */}
            <div className="w-full h-[441px] bg-[url(/frame-1597880852-1-2048x738-png-webp.png)] bg-cover bg-center" />
          </div>
        </div>

        {/* Background Overlay */}
        <div className="absolute top-0 right-0 w-full h-[982px] bg-[url(/frame-1597880851-png-webp.png)] bg-cover bg-center z-[-1]" />
      </div>
    </section>
  );
};
