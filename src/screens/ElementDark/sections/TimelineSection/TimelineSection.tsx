import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const TimelineSection = (): JSX.Element => {
  // Case study data for mapping
  const caseStudies = [
    {
      id: "docli",
      logo: "/frame-1597880853-svg.svg",
      description:
        "IA que transcreve, sumariza e empacota, conteúdo treinados por médicos com 99.87% de acurácia.",
      image: "/group-1000004158-jpg-webp.png",
      agents: ["Transcrição", "Sumarização", "Data Labeling"],
      url: "https://docli.com.br/",
    },
    {
      id: "docdoor",
      logo: "/frame-1597880710-svg.svg",
      description:
        "IA conversacional treinada com mais de 30.000 árvores de tomada de decisão e com referências científicas.",
      image: "/frame-1597880854-jpg-webp.png",
      agents: ["Crawler", "Decision Making", "Chatbot"],
      url: "https://www.docdoor.com.br/",
    },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full bg-[url(/mask-group-2048x905-png-webp.png)] bg-cover bg-center" />
      </div>
      <div className="absolute bottom-0 w-full h-[605px] blur-[123.6px] bg-[url(/frame-1597880857-2048x577-png-webp.png)] bg-cover bg-center" />

      {/* Content container */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-[55.4px] font-normal text-neutral-100 tracking-[-1.16px] leading-[69.6px] mb-6">
            Estudos de Caso e Recursos
          </h2>
          <p className="text-[19.5px] font-normal text-neutral-100 leading-8">
            Veja como nossos parceiros estão transformando seu negócio com nossa
            ajuda
          </p>
        </div>

        {/* Case studies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <div key={study.id} className="flex flex-col h-full">
              {/* Logo and description */}
              <div className="flex flex-col items-center mb-14">
                <img
                  className="w-[184px] h-[75px] mb-10"
                  alt={`${study.id} logo`}
                  src={study.logo}
                />
                <p className="text-[19.4px] font-normal text-neutral-100 text-center leading-8">
                  {study.description.split("<br />").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < study.description.split("<br />").length - 1 && (
                        <br />
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </div>

              {/* Case study card */}
              <Card className="border-0 bg-transparent">
                <CardContent className="p-0 space-y-6">
                  {/* Case study image */}
                  <div
                    className="w-full h-[453px] rounded-xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${study.image})` }}
                  />

                  {/* Agents used section */}
                  <div className="space-y-4">
                    <h3 className="text-[19.4px] font-normal text-neutral-100 leading-8">
                      Agentes que foram utilizados:
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {study.agents.map((agent, index) => (
                        <Badge
                          key={index}
                          className="bg-[#ffffff1a] hover:bg-[#ffffff33] text-neutral-100 rounded-[200px] px-4 py-2 h-10"
                        >
                          <span className="text-[19.2px] font-normal">
                            {agent}
                          </span>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Access solution link */}
                  <a
                    className="inline-flex items-center text-[15.4px] font-normal text-neutral-100 leading-[25.6px]"
                    href={study.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Acessar Solução
                    <ArrowUpRightIcon className="ml-2 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
