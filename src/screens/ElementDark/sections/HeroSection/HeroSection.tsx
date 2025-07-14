import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Data for the platform layers
  const platformLayers = [
    {
      title: "Multi Agentes",
      description:
        "Conjunto de ferramentas (agentes) que são interconectados fazendo multiplas funções",
    },
    {
      title: "Agentes",
      description:
        "Os Agentes são a interface que executa tarefas automatizadas e interage diretamente com os usuários e sistemas, proporcionando eficiência e rapidez.",
    },
    {
      title: "Reasoning",
      description:
        "A camada de Reasoning processa dados e aplica lógica avançada para gerar insights e tomar decisões inteligentes, adaptando-se às necessidades da sua empresa.",
    },
    {
      title: "Security & Fine Tuning",
      description:
        "Garantimos total segurança com criptografia avançada, enquanto o Fine Tuning permite personalizar a IA para atender às demandas específicas de cada cliente.",
    },
    {
      title: "Cloud Services",
      description:
        "Essa camada oferece escalabilidade e desempenho através de uma infraestrutura em nuvem, facilitando a integração e o processamento de grandes volumes de dados.",
    },
    {
      title: "LLMs",
      description:
        "Os LLMs interpretam e processam linguagem natural, gerando respostas precisas e fundamentadas com dados em tempo real.",
    },
    {
      title: "Data",
      description:
        "A plataforma se conecta a diversas fontes de dados, como MySQL, MongoDB, Excel e Oracle, transformando essas informações em insights acionáveis.",
    },
  ];

  return (
    <section className="w-full max-w-[1224px] mx-auto py-16">
      <div className="flex flex-col items-center mb-16">
        <Badge
          variant="outline"
          className="bg-[#ffffff1a] text-neutral-100 px-4 py-2 rounded-full mb-8"
        >
          <span className="[font-family:'Inter',Helvetica] text-[19.1px] font-normal">
            Soluções
          </span>
        </Badge>

        <h2 className="[font-family:'Inter',Helvetica] font-normal text-neutral-100 text-[57.2px] text-center tracking-[-1.16px] leading-[69.6px] mb-6">
          Como Funciona?
        </h2>

        <p className="[font-family:'Inter',Helvetica] font-normal text-neutral-100 text-[15.9px] text-center tracking-[0] leading-[25.6px] max-w-[620px]">
          A plataforma é estruturada em várias camadas interconectadas, que
          trabalham em
          <br />
          conjunto para oferecer soluções de IA seguras, escaláveis e
          personalizáveis:
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2">
          {platformLayers.map((layer, index) => (
            <Card
              key={index}
              className="mb-0 bg-transparent border-l border-[#041028] rounded-none"
            >
              <CardContent className="p-0">
                <div
                  className={`py-8 pl-8 ${index !== platformLayers.length - 1 ? "border-b border-[#041028]" : ""}`}
                >
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-neutral-100 text-[17px] tracking-[0] leading-[30.6px] mb-2">
                    {layer.title}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-neutral-100 text-[15.5px] tracking-[0] leading-[27.2px]">
                    {layer.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="w-full md:w-1/2 bg-[url(/image-blur.png)] bg-[100%_100%]">
          <div className="h-full min-h-[600px] md:min-h-[1063px] bg-[url(/tabpanel---group-47226-png-webp.png)] bg-cover bg-center" />
        </div>
      </div>
    </section>
  );
};
