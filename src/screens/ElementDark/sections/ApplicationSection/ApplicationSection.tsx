import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const ApplicationSection = (): JSX.Element => {
  // Application cards data
  const applicationCards = [
    {
      icon: "/vector-6.svg",
      title: "Decision Making",
      description:
        "Pergunte o que quiser e a IA responde perguntas complexas analisando centenas de dados.",
      example: "Ex: Qual o % de CHURN deste mês comparado ao mês passado?",
    },
    {
      icon: "/vector.svg",
      title: "ChatBot",
      description:
        "Converse como quiser e automatize conversas treinadas pela empresa.",
      example:
        "Ex: WhatsApp de pergunta e resposta para síndico tirar dúvidas financeiras de Gestão.",
    },
    {
      icon: "/vector.svg",
      title: "Crawler",
      description:
        "Busque o que quiser como fontes de dados internos e externos.",
      example: "Ex: Monitoramento de preços de concorrentes.",
    },
    {
      icon: "/vector-11.svg",
      title: "Transcrição (Voz)",
      description: (
        <>
          <span className="font-bold">Fala a vontade</span> convertendo
          <br />
          automaticamente áudio em texto.
        </>
      ),
      example:
        "Ex: Transcrição de consulta médica para o sistema de prontuário.",
    },
    {
      icon: "/vector.svg",
      title: "Sumarização",
      description: "Sumarize como quiser resumo de textos em formato desejado.",
      example:
        "Ex: Analisa centenas de documentos e resume de relatórios financeiros em balanço trimestral.",
    },
    {
      icon: "/vector-3.svg",
      title: "Data Labeling",
      description:
        "Estruture qualquer dado e organize dados dentro de sistemas integrados.",
      example:
        "Ex: Extrai dados de um texto comercial e automaticamente insere no CRM.",
    },
    {
      icon: "/vector-4.svg",
      title: "Anti-Plágio",
      description:
        "Verifique se o texto tem alguma referencia externa, feito por IA ou é original.",
      example: "Ex: Análise de relatórios acadêmicos.",
      smallHeight: true,
    },
    {
      icon: "/vector-1.svg",
      title: "On Demand - You Dream IT. We Build IT!",
      description:
        "Desenvolvimento e treinamento de agentes personalizados com base nas necessidades específicas da empresa. Os agentes são criados para resolver problemas pontuais ou automatizar processos específicos, prontos para serem ativados conforme necessário.",
      fullWidth: true,
      smallHeight: true,
    },
  ];

  return (
    <section
      className="relative w-full py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url(/frame-1597880848-1-2048x1582-png-webp.png)",
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-20">
          <Badge
            variant="outline"
            className="bg-[#ffffff1a] text-neutral-100 px-4 py-2 rounded-full mb-8"
          >
            <span className="text-[19.1px]">Soluções</span>
          </Badge>

          <h2 className="text-[57.1px] text-neutral-100 font-normal tracking-[-1.16px] text-center mb-6">
            Aplicabilidade dos agentes
          </h2>

          <p className="text-[19.7px] text-neutral-100 font-normal text-center">
            Aplicável e treinado para qualquer segmento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {applicationCards.map((card, index) => (
            <Card
              key={index}
              className={`bg-[#01215b30] rounded-xl overflow-hidden backdrop-blur-[10px] border-none text-neutral-100 ${
                card.fullWidth ? "md:col-span-2 lg:col-span-2" : ""
              } ${card.smallHeight ? "h-[271px]" : "h-[322px]"}`}
            >
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-[38px] h-[38px] mb-8 relative">
                  <img
                    className="absolute inset-0 m-auto"
                    alt={card.title}
                    src={card.icon}
                  />
                </div>

                <h3 className="text-[19px] font-bold tracking-[-0.40px] mb-4">
                  {card.title}
                </h3>

                <div className="text-[15.6px] leading-[25.6px] mb-4">
                  {card.description}
                </div>

                <div className="mt-auto bg-[#0060f01a] rounded-xl p-3 shadow-[4px_38px_62px_#00000080]">
                  <p className="text-[15.4px] font-bold tracking-[-0.32px] leading-[25.6px]">
                    {card.example}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
