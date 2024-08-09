"use client";
import React, { ChangeEventHandler, useEffect, useState } from "react";
import Script from "next/script";
import SelectCustom from "../SelectCustom";
import Image from "next/image";
import ArrowDown from "public/Icons/chevron-down.svg";
import { Inter } from "next/font/google";
import Modal from "../Modal"

const inter = Inter({ subsets: ["latin"] });

import { usePathname, useSearchParams } from "next/navigation";

interface FormState {
  name: string;
  email: string;
  phonenumber: string;
  whatsapp: string;
  ddi: string;
}

type FormFields = "name" | "email" | "whatsapp" | "ddi";

type Form = Record<FormFields, string>;

type InputHandler = (field: FormFields) => ChangeEventHandler<HTMLInputElement>;

interface FormProps {
  type?: string;
  xid: string;
  urlredirect: string;
  typeredirect: string;
}

export default function FormInfusion({ type = "vtsd" }: FormProps) {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [telReady, setTelReady] = useState("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phonenumber: "",
    whatsapp: "",
    ddi: "+55",
  });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  }

  function getCookie(name: string) {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      let parts = cookie.split("=");
      if (parts[0] === name) {
        return parts[1];
      }
    }
    return null;
  }

  const ck_xid = getCookie("_#9r2r6a");

  const pathpage = useSearchParams();
  const pathname = usePathname();
  const conversion = pathpage.get("conversion");
  const utm_campaign = pathpage.get("utm_campaign");
  const utm_content = pathpage.get("utm_content");
  const utm_medium = pathpage.get("utm_medium");
  const utm_source = pathpage.get("utm_source");
  const utm_term = pathpage.get("utm_term");

  const handleInput: InputHandler = (field) => (e) => {
    console.log("opaaaaaa");

    setForm({
      ...form,
      [field]: e.currentTarget.value,
    });
  };

  const handleDdi = (ddi: any) => {
    setForm({
      ...form,
      ddi: ddi,
    });
  };

  const phoneMask = (value: any) => {
    if (!value) return "";

    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

  const handlePhone = (whatsapp: any) => {
    let input = whatsapp.target;
    input.value = phoneMask(input.value);

    setForm({
      ...form,
      whatsapp: whatsapp.target.value,
    });
  };

  useEffect(() => {
    setTelReady("+" + form.ddi + form.whatsapp);

    console.log("setTelReady ->", telReady);
  }, [form.ddi, form.whatsapp, telReady]);

  return (
    <>
      <section>
        <div className="w-full flex flex-col">
          {type === "stories10x" && (
            <>
              <div className="flex px-[29px] py-[19px] gap-4">
                <div className="w-[25px] h-[25px] border border-white rounded-full"></div>
                <div className="w-[25px] h-[25px] border border-white rounded-full"></div>
              </div>
              <div className="w-[75%] h-[1px] bg-white"></div>
            </>
          )}
          <div className="">
            {type === "vtsd" ? (
              <></>
            ) : (
              <>
                <div className="lg:hidden">
                  <Image
                    src="/stories10x/logo.svg"
                    layout="fixed"
                    width="136"
                    height="20"
                    alt="Image"
                  />
                </div>
                <div className="hidden lg:block">
                  <Image
                    src="/stories10x/logo.svg"
                    layout="fixed"
                    width="180"
                    height="26"
                    alt="Image"
                  />
                </div>
              </>
            )}
            <div></div>
            <form
              className="flex flex-col justify-center items-center"
              acceptCharset="UTF-8"
              method="POST"
              action="https://readytogo59637.activehosted.com/proc.php"
            >
              <div className={`${inter.className} w-full flex flex-col gap-[.81rem] lg:gap-4 pb-[.81rem]`}>
                <input type="hidden" name="act" value="sub" />
                <input type="hidden" name="f" value="3" />
                <input
                  type="hidden"
                  name="or"
                  value="0b2a0fe8b618557e119630b0091d6aa9"
                />

                <input
                  type="hidden"
                  name="field[10]"
                  value={utm_campaign ?? ""}
                />

                <input
                  type="hidden"
                  name="field[11]"
                  id="utm_source"
                  value={utm_source ?? ""}
                />

                <input
                  type="hidden"
                  name="field[12]"
                  id="utm_medium"
                  value={utm_medium ?? ""}
                />

                <input
                  type="hidden"
                  name="field[13]"
                  id="utm_content"
                  value={utm_content ?? ""}
                />

                <input
                  type="hidden"
                  name="field[14]"
                  id="utm_term"
                  value={utm_term ?? ""}
                />

                <input
                  type="hidden"
                  name="field[15]"
                  id="conversion"
                  value={conversion ?? ""}
                />

                <input
                  type="hidden"
                  name="field[16]"
                  id="sigla_produto"
                  value={"S10X"}
                />

                <input
                  type="hidden"
                  name="field[17]"
                  id="versao_pico"
                  value="L2"
                />

                <input
                  type="hidden"
                  name="field[18]"
                  id="pathpage"
                  value={pathname ?? ""}
                />

                <input
                  type="hidden"
                  name="field[19]"
                  id="url_redirect"
                  value={"/"}
                />

                <input
                  type="hidden"
                  name="field[20]"
                  id="type_redirect"
                  value={"/"}
                />

                <input
                  type="hidden"
                  name="field[24]"
                  id="ck_xid"
                  value={ck_xid ?? ""}
                />

                <input
                  className={`lg:py-3 py-4 ${type === "vtsd"
                    ? "border-[1px] lg:text-[1rem] text-[0.875rem] border-[#C8C8C8]"
                    : ""
                    } text-black px-3 lg:px-5 leading-7 rounded-lg w-full`}
                  type="text"
                  required
                  id="inf_field_FirstName"
                  name="fullname"
                  placeholder="Digite seu nome completo"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  value={form.name}
                />
                <input
                  className={`lg:py-3 py-4 ${type === "vtsd"
                    ? "border-[1px] lg:text-[1rem] text-[0.875rem] border-[#C8C8C8]"
                    : ""
                    } text-black px-3 lg:px-5 leading-7 rounded-lg w-full`}
                  type="email"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  required
                  id="inf_field_Email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  value={form.email}
                />

                <div className={`flex gap-[.5rem] `}>
                  <SelectCustom handleDdi={handleDdi} />

                  <input
                    name="phonenumber"
                    type={"tel"}
                    placeholder="Telefone"
                    className={`lg:py-3 py-4 px-3 lg:px-5 leading-7 w-full rounded-lg text-black ${type === "vtsd"
                      ? "border-[1px] border-[#C8C8C8] lg:text-[1rem] text-[0.875rem]"
                      : ""
                      }`}
                    maxLength={15}
                    onChange={(e) => handlePhone(e)}
                    required
                  />

                  <input type="hidden" value={telReady} name="phone" />
                </div>
                <div className="relative">
                  <select name="options" id="" value={selectedOption} onChange={handleSelectChange} className={` lg:py-3 py-4 border-[1px] border-[#C8C8C8] lg:text-[1rem] text-[0.875rem] px-3 lg:px-5 leading-7 rounded-lg w-full pr-4 appearance-none ${selectedOption === '' ? 'text-[#666]' : 'text-black'
                    }`} >
                    <option value="" disabled>Qual sua situação atual?</option>
                    <option value="option1">Sou funcionário e quero entrar para o digital</option>
                    <option value="option2">Tenho negócio físico e quero começar no digital</option>
                    <option value="option3">Possuo um produto digital e quero aumentar as vendas</option>
                    <option value="option4">Faço lançamentos e quero iniciar no perpétuo</option>
                    <option value="option5">Faço perpétuo e quero aumentar as vendas</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <Image src={ArrowDown} alt="seta" />
                  </div>
                </div>
                <div className="relative">
                  <select name="options" id="" value={selectedOption} onChange={handleSelectChange} className={` lg:py-3 py-4 border-[1px] border-[#C8C8C8] lg:text-[1rem] text-[0.875rem] px-3 lg:px-5 leading-7 rounded-lg w-full pr-4 appearance-none ${selectedOption === '' ? 'text-[#666]' : 'text-black'
                    }`} >
                    <option value="" disabled>Qual dessas opções identifica você?</option>
                    <option value="option1_1">Estrategista digital</option>
                    <option value="option2_1">Lançador</option>
                    <option value="option3_1">Expert</option>
                    <option value="option4_1">Copywriter</option>
                    <option value="option5_1">Gestor de tráfego</option>
                    <option value="option6_1">Gestor de projetos</option>
                    <option value="option7_1">Empreendedor</option>
                    <option value="option8_1">Servidor público</option>
                    <option value="option9_1">Autônomo ou prestador de serviços</option>
                    <option value="option10_1">Desempregado</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <Image src={ArrowDown} alt="seta" />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className={`bg-[#04C8B6] text-[#FEFEFF] w-full py-6 px-8 rounded-lg lg:text-[1.5rem]  font-bold hover:scale-105 transition-all flex items-center justify-center `}
              >
                Solicitar consultoria
              </button>
            </form>
          </div>
        </div>
        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title="A sua solicitação foi enviada!"
        >
          <p>Em instantes o nosso consultor vai entrar em contato com você por WhatsApp.</p>
        </Modal>
      </section>
    </>
  );
}
