import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FooterSection = (): JSX.Element => {
  const featureCards = [
    {
      icon: "/vector.svg",
      iconSize: "w-7 h-8",
      iconPosition: "top-[3px] left-[5px]",
      title: "Inteligência Customizável",
      description: [
        "A complexidade da plataforma é para",
        "tornar simples e flexível a adaptação da IA",
        "no seu negócio. Ela pode estar em um",
        "ChatBot, em ferramentas de treinamento",
        "interno, ou embedded em um botão de voz.",
      ],
    },
    {
      icon: "/vector-5.svg",
      iconSize: "w-8 h-[22px]",
      iconPosition: "top-2 left-[3px]",
      title: "Implementação Simples",
      description: [
        "Oferecemos soluções plug-and-play e",
        "whitelabel, permitindo fácil integração com",
        "sistemas existentes, minimizando o tempo",
        "de implementação e maximizando a",
        "eficiência operacional.",
      ],
    },
    {
      icon: "/vector-2.svg",
      iconSize: "w-[30px] h-7",
      iconPosition: "top-[5px] left-[5px]",
      title: "Alta Curadoria de Dados",
      description: [
        "A IA é uma ferramenta e os dados o motor",
        "para a inteligência. Por isso, a plataforma",
        "comporta uma DATA ENGINE que processa",
        "e transforma dados em insights para",
        "tomada de decisão.",
      ],
    },
  ];

  return (
    <section className="w-full max-w-[1224px] mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featureCards.map((card, index) => (
          <Card
            key={`feature-card-${index}`}
            className="h-[286px] bg-[#01215b30] rounded-xl overflow-hidden backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] border-none"
          >
            <CardContent className="p-8 h-full flex flex-col">
              <div className="w-[38px] h-[38px] relative mb-[35px]">
                <div className="relative w-[38px] h-[38px]">
                  <img
                    className={`absolute ${card.iconSize} ${card.iconPosition}`}
                    alt="Feature icon"
                    src={card.icon}
                  />
                </div>
              </div>

              <h3 className="font-bold text-neutral-100 text-[19px] tracking-[-0.40px] leading-8 mb-[38px] font-sans">
                {card.title}
              </h3>

              <p className="font-normal text-neutral-100 text-[15.8px] leading-[25.6px] font-sans">
                {card.description.map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    {lineIndex < card.description.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
