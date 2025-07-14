import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HowItWorksSection = (): JSX.Element => {
  // Data for the login buttons
  const loginButtons = [
    {
      href: "https://carehub.careintelligence.ai/",
      text: "Login CareHub",
    },
  ];

  // Data for the feature sections
  const features = [
    {
      title: "Análise Semântica\nde Dados",
      description:
        "Construção de gráficos de conhecimento (Logica Graph)\nIntegração de dados internos e externos para\nmelhor compreensão (reasoning) da IA.",
      imageUrl: "/video-sem-titulo--e2-80-90-feito-com-o-clipchamp-1-mp4.png",
      isReversed: false,
    },
    {
      title: "Monte sua própria\nlógica de AI no Fluxo\nde funções",
      description:
        "Drag and Drop os agentes aplicáveis para a solução desejada\npara o seu negocio. Adaptável e integrada.",
      imageUrl: "/3d261ef5fd59af4e2e599be04a4421e9c190117a-mp4.png",
      isReversed: true,
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden">
      <div className="relative w-full max-w-[1224px] mx-auto">
        {/* Background blur effect */}
        <div className="absolute w-[984px] h-[1326px] top-0 left-1/2 -translate-x-1/2 blur-[175px] bg-[url(/frame-1597880842-png-webp.png)] bg-cover bg-center" />

        {/* Header section */}
        <div className="relative mb-24 text-center">
          <Badge className="mb-10 px-4 py-2 bg-[#ffffff1a] hover:bg-[#ffffff30] text-neutral-100 text-[19.7px] font-normal rounded-full">
            Solução
          </Badge>

          <h2 className="text-[56.6px] font-normal text-neutral-100 tracking-[-1.16px] leading-[69.6px] mb-6">
            Care{"{"}Hub{"}"}
          </h2>

          <p className="max-w-[807px] mx-auto text-[15.5px] text-neutral-100 leading-[25.6px]">
            Uma plataforma de IA adaptável e escalável, que transforma seus
            dados em decisões seguras e estratégicas,
            <br />
            pronta para impulsionar o futuro do seu negócio. Sem alucinação. Com
            referência.
          </p>
        </div>

        {/* Features section */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-row items-center gap-16 ${feature.isReversed ? "flex-row-reverse" : ""}`}
            >
              <div className="flex-1">
                <h3 className="text-[45.9px] font-bold text-neutral-100 tracking-[-0.96px] leading-[57.6px] whitespace-pre-line mb-10">
                  {feature.title}
                </h3>
                <p className="text-[15.6px] text-neutral-100 leading-[25.6px] whitespace-pre-line mb-10">
                  {feature.description}
                </p>
                <Button
                  asChild
                  className="h-[51px] w-[177px] rounded-xl shadow-[4px_38px_62px_#00000080,inset_-3px_-4px_7px_#ffffff26] bg-[linear-gradient(0deg,rgba(0,240,200,0.2)_0%,rgba(0,240,200,0.2)_100%)] hover:bg-[linear-gradient(0deg,rgba(0,240,200,0.3)_0%,rgba(0,240,200,0.3)_100%)] text-[15.6px] font-bold"
                >
                  <a
                    href={loginButtons[0].href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex items-center justify-center"
                  >
                    {loginButtons[0].text}
                  </a>
                </Button>
              </div>

              <Card className="flex-1 rounded-3xl border-0 overflow-hidden bg-[linear-gradient(180deg,rgba(0,96,240,0)_0%,rgba(0,96,240,0.5)_100%),linear-gradient(0deg,rgba(1,33,91,0.19)_0%,rgba(1,33,91,0.19)_100%)]">
                <CardContent className="p-0.5">
                  <div className="rounded-[22px] bg-[linear-gradient(192deg,rgba(5,22,55,1)_0%,rgba(0,38,104,1)_80%)] p-6">
                    <div
                      className="w-full h-[309px] rounded-xl bg-cover bg-center"
                      style={{ backgroundImage: `url(${feature.imageUrl})` }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
