import React from "react";
import { Button } from "../components/ui/button";
import { ApplicationSection } from "./sections/ApplicationSection";
import { CaseStudiesSection } from "./sections/CaseStudiesSection";
import { FeatureSection } from "./sections/FeatureSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { TimelineSection } from "./sections/TimelineSection";

export const ElementDark = (): JSX.Element => {
  // Partner logos data
  const partnerLogos = [
    { src: "/dark-1-png-webp.png", alt: "Partner logo 1" },
    { src: "/dark-png-webp.png", alt: "Partner logo 2" },
    { src: "/dark-2-png-webp.png", alt: "Partner logo 3" },
    { src: "/dark-3-png-webp.png", alt: "Partner logo 4" },
    { src: "/dark-4-png-webp.png", alt: "Partner logo 5" },
  ];

  // AI provider logos data
  const aiProviderLogos = [
    { src: "/darksdaadada-png-webp.png", alt: "AI Provider logo 1" },
    { src: "/darksdaadada-1-png-webp.png", alt: "AI Provider logo 2" },
    { src: "/darksdaadada-2-png-webp.png", alt: "AI Provider logo 3" },
    { src: "/darksdaadada-3-png-webp.png", alt: "AI Provider logo 4" },
  ];

  // Language options
  const languageOptions = [
    { src: "/item---link---portugu-s.png", alt: "Portuguese" },
    { src: "/item---link---english.png", alt: "English" },
    { src: "/item---link---espa-ol.png", alt: "Spanish" },
  ];

  return (
    <div className="w-full bg-[#000212]">
      <div className="relative">
        {/* Header Section */}
        <section className="w-full">
          <HeaderSection />
          <div className="mx-auto w-[1150px] h-[83px] py-6">
            <div className="flex items-center justify-between">
              <div className="w-[168px] h-[83px] bg-[url(/group-2-png-webp.png)] bg-cover bg-[50%_50%]" />

              <div className="flex space-x-4">
                <div className="flex items-center">
                  <div className="px-4 py-2">
                    <span className="font-normal text-neutral-100 text-base">
                      Plataforma
                    </span>
                  </div>
                  <div className="px-4 py-2">
                    <span className="font-normal text-neutral-100 text-[15.9px]">
                      Etapas
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <Button className="h-[51px] rounded-xl shadow-[4px_38px_62px_#00000080,inset_-3px_-4px_7px_#ffffff26] bg-[linear-gradient(0deg,rgba(5,22,55,1)_0%,rgba(5,22,55,1)_100%)]">
                  <span className="font-bold text-neutral-100 text-[15.5px]">
                    Entre em contato
                  </span>
                </Button>

                <Button className="h-[51px] rounded-xl shadow-[4px_38px_62px_#00000080,inset_-3px_-4px_7px_#ffffff26] [background:url(..//link-2.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(0,240,200,0.2)_0%,rgba(0,240,200,0.2)_100%)]">
                  <a
                    href="https://carehub.careintelligence.ai/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="font-bold text-neutral-100 text-[15.6px]"
                  >
                    Login CareHub
                  </a>
                </Button>

                <div className="flex space-x-2.5">
                  {languageOptions.map((lang, index) => (
                    <div
                      key={`lang-${index}`}
                      className={`w-[17px] h-3 bg-[url(${lang.src})] bg-cover bg-[50%_50%]`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="w-full">
          <div className="w-full mx-auto bg-[url(/frame-1597880840-png-webp.png)] bg-cover bg-[50%_50%] py-[120px]">
            <div className="max-w-[1224px] mx-auto text-center">
              <div className="mb-[80px]">
                <p className="font-normal text-neutral-100 text-base tracking-[3.84px] leading-[25.6px]">
                  A PROUD PARTNER OF
                </p>
              </div>

              <div className="flex justify-between">
                {partnerLogos.map((logo, index) => (
                  <div
                    key={`partner-${index}`}
                    className="w-[232px] h-[85px] bg-[url(${logo.src})] bg-cover bg-[50%_50%]"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full">
          <HowItWorksSection />
        </section>

        {/* Footer Section */}
        <section className="w-full">
          <FooterSection />
        </section>

        {/* Hero Section */}
        <section className="w-full">
          <HeroSection />
        </section>

        {/* AI Providers Section */}
        <section className="w-full relative">
          <div className="relative w-full overflow-hidden">
            <div className="absolute w-[2428px] h-[603px] left-1/2 -translate-x-1/2 top-[-289px] blur-[125px] bg-[url(/frame-1597880846-2048x509-png-webp.png)] bg-cover bg-[50%_50%]" />
            <div className="absolute w-[2867px] h-[686px] left-1/2 -translate-x-1/2 blur-[85px] bg-[url(/ellipse-1539-2048x490-png-webp.png)] bg-cover bg-[50%_50%]" />

            <div className="relative max-w-[1224px] mx-auto py-[120px] text-center">
              <div className="mb-[80px]">
                <p className="font-normal text-neutral-100 text-base tracking-[3.84px] leading-[25.6px]">
                  PROVEDORES DE IA GENERATIVA COM OS QUAIS FAZEMOS PARCERIA:
                </p>
              </div>

              <div className="flex justify-between">
                {aiProviderLogos.map((logo, index) => (
                  <div
                    key={`ai-provider-${index}`}
                    className="w-[294px] h-[108px] bg-[url(${logo.src})] bg-cover bg-[50%_50%]"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Section */}
        <section className="w-full">
          <ApplicationSection />
        </section>

        {/* Feature Section */}
        <section className="w-full">
          <FeatureSection />
        </section>

        {/* Timeline Section */}
        <section className="w-full">
          <TimelineSection />
        </section>

        {/* Case Studies Section */}
        <section className="w-full">
          <CaseStudiesSection />
        </section>
      </div>
    </div>
  );
};