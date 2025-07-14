import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const CaseStudiesSection = (): JSX.Element => {
  // Form field data for mapping
  const formFields = [
    {
      id: "nome",
      label: "Nome",
      placeholder: "Seu nome",
      required: true,
      position: "top-0 left-0",
    },
    {
      id: "sobrenome",
      label: "Sobrenome",
      placeholder: "Seu sobrenome",
      required: true,
      position: "top-0 left-[386px]",
    },
    {
      id: "telefone",
      label: "Telefone",
      placeholder: "(555) 555-1234",
      required: true,
      position: "top-32 left-0",
    },
    {
      id: "email",
      label: "Email",
      placeholder: "email@email.com",
      required: true,
      position: "top-32 left-[386px]",
    },
  ];

  return (
    <section className="relative w-full h-[614px] bg-[#010519]">
      <div className="relative h-[494px] pt-[120px]">
        {/* Footer copyright */}
        <div className="absolute w-full h-[67px] bottom-0 left-0 bg-[#010519] flex items-center justify-center">
          <div className="[font-family:'Inter',Helvetica] font-normal text-neutral-100 text-[12.3px] text-center tracking-[0] leading-[18.9px]">
            © 2024 Care Intelligence Todos os direitos reservados
          </div>
        </div>

        {/* Background blur effect */}
        <div className="absolute w-[1840px] h-[191px] bottom-[67px] left-10 blur-[100px] bg-[url(/frame-1597880860-png-webp.png)] bg-cover bg-[50%_50%]" />

        {/* Main content container */}
        <div className="relative w-full max-w-[1224px] h-[307px] mx-auto flex justify-between">
          {/* Left column - Heading and contact text */}
          <div className="w-[395px] h-[272px]">
            <h2 className="w-[368px] h-[173px] [font-family:'Inter',Helvetica] font-bold text-[45.9px] tracking-[0] leading-[57.6px]">
              <span className="text-neutral-100">
                Pronto para dar
                <br />o próximo passo
                <br />
                com{" "}
              </span>
              <span className="text-[#0060f0]">IA?</span>
            </h2>

            <p className="mt-6 [font-family:'Inter',Helvetica] font-normal text-neutral-100 text-[15.6px] tracking-[0] leading-[25.6px]">
              Entre em contato conosco
            </p>

            <img
              className="mt-6 w-6 h-6"
              alt="Link frame"
              src="/link---frame-1597880724-svg.svg"
            />
          </div>

          {/* Right column - Contact form */}
          <Card className="w-[749px] h-[307px] bg-transparent border-none">
            <div className="relative w-full h-full">
              {/* Form fields */}
              {formFields.map((field) => (
                <div
                  key={field.id}
                  className={`absolute w-[363px] h-32 ${field.position}`}
                >
                  <label
                    htmlFor={field.id}
                    className="block mb-2 [font-family:'Inter',Helvetica] font-normal text-[15.5px] tracking-[0.40px] leading-[27.2px]"
                  >
                    <span className="text-neutral-100 tracking-[0.06px]">
                      {field.label}
                    </span>
                    {field.required && (
                      <span className="text-[#ff4747] tracking-[0.06px]">
                        *
                      </span>
                    )}
                  </label>

                  <Input
                    id={field.id}
                    className="h-14 bg-[#060922] text-[#95959c] [font-family:'Inter',Helvetica] font-normal text-[15.6px] tracking-[0] leading-normal border-none"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              {/* Submit button */}
              <Button className="absolute w-[115px] h-[50px] top-64 left-0 rounded-xl shadow-[4px_38px_62px_#00000080,inset_-3px_-4px_7px_#ffffff26] [background:url(..//link-2.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(0,240,200,0.2)_0%,rgba(0,240,200,0.2)_100%)]">
                <span className="[font-family:'Segoe_UI-Bold',Helvetica] font-bold text-white text-base text-center tracking-[0.50px] leading-[18.4px]">
                  Enviar
                </span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
