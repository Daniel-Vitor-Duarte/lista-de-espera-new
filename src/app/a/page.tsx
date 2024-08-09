import Image from "next/image";
import Check from "public/Icons/check.svg"
import Gift from "public/Icons/gift.svg"
import Team from "public/Icons/team.svg"
import Star from "public/Icons/star.svg"
import { Suspense } from "react";
import Form from "@/app/components/Form";
import Pessoas from "public/Images/pessoas-comuns.png"
import Leandro from "public/Images/leandro.webp";
import LeandroM from "public/Images/leandro-mobile.webp";
import Rtg from "public/icons/Rtg.svg"


import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function ListaB() {
    return (
        <main className='bg-[#F2F2F2] lg:pt-[5.5rem] pt-[4.5rem]'>

            <section className='text-[#353639] lg:max-w-[76rem] flex lg:flex-row lg:items-end flex-col mx-auto px-4'>
                <div>
                    <h1 className='lg:text-[3rem] text-[1.75rem] font-bold lg:leading-[4rem] leading-[2.25rem] lg:max-w-[42.8125rem] max-w-[19.4375rem] lg:mx-0  mx-auto'>
                        Entre para a lista de interessados do curso VTSD {" "}<span className='text-[#04C8B6]'> e ganhe uma consultoria individual.</span>
                    </h1>
                    <div className={`${inter.className} font-medium lg:mt-6 mt-8`}>
                        <p className="max-w-[25.875rem]  lg:block hidden">
                            Nessa conversa individual você vai ser orientado sobre as seguintes questões:
                        </p>
                        <div className="lg:max-w-[30.75rem] max-w-[21.4375rem] lg:mx-0 mx-auto lg:text-[1rem] text-[0.875rem] flex flex-col gap-4 lg:mt-6">
                            <div className="flex items-center gap-4 border-2 border-[rgba(215,214,214,0.64)] w-full rounded-lg px-4 lg:py-3 py-4">
                                <Image src={Check} alt="visto" />
                                <p>
                                    Alinhamento do seu momento atual;
                                </p>
                            </div>
                            <div className="flex items-center gap-4 border-2 border-[rgba(215,214,214,0.64)] w-full rounded-lg px-4 lg:py-3 py-4">
                                <Image src={Check} alt="visto" />
                                <p>
                                    Validação de ideias de negócio;
                                </p>
                            </div>
                            <div className="flex items-center gap-4 border-2 border-[rgba(215,214,214,0.64)] w-full rounded-lg px-4 lg:py-3 py-4">
                                <Image src={Check} alt="visto" />
                                <p>
                                    Esclarecimento de eventuais dúvidas;
                                </p>
                            </div>
                            <div className="flex items-center gap-4 border-2 border-[rgba(215,214,214,0.64)] w-full rounded-lg px-4 lg:py-3 py-4">
                                <Image src={Check} alt="visto" />
                                <p>
                                    Criação de plano de ação;
                                </p>
                            </div>
                            <div className="flex items-center gap-4 border-2 border-[#04C8B6] w-full rounded-lg px-4 lg:py-3 py-4 bg-[#F2F2F2] shadow-[0px_0px_20px_1px_rgba(4,200,182,0.32)]">
                                <Image src={Gift} alt="presente" />
                                <p>
                                    Presente surpresa para te incentivar a entrar em ação.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FCFCFC] lg:py-12 py-6 lg:px-6 px-4 border border-[#F2F2F2] rounded-lg lg:mt-0 mt-[4.5rem]">
                    <p className={`${inter.className} lg:text-[1.5rem] lg:leading-8 leading-7 text-[#666666] lg:mb-12 mb-4 font-bold lg:text-left text-center lg:max-w-[24rem]`}>
                        Solicitar a <br className="lg:block hidden" />
                        consultoria gratuita:
                    </p>
                    <Suspense>
                        <Form typeredirect="" urlredirect="" xid="" />
                    </Suspense>
                </div>
            </section>

            <section className="overflow-x-hidden lg:mt-[5.5rem] mt-[4.5rem]">
                <Image className="min-w-[360rem] lg:animate-none  animate-rm" src={Pessoas} alt="" />

                <div className="w-fit relative mx-auto lg:mt-[5.61rem] mt-[3.79rem] ">
                    <div className="w-12 h-12 -rotate-45 bg-[#FCFCFC] border-t border-t-[#E9E9E9] border-r border-r-[#E9E9E9] absolute -top-[1.5rem] lg:left-[50%] left-[40%]"></div>
                    <div className="flex items-center lg:gap-8 gap-4 bg-[#FCFCFC] border border-[#E9E9E9] w-fit mx-auto lg:py-10 py-6 lg:px-14 px-4 rounded-[2rem] lg:text-[1.5rem] font-semibold lg:leading-[2.25rem] ">
                        <Image className="lg:w-auto w-12" src={Team} alt="" />
                        <p className="lg:max-w-[31.375rem] max-w-[14.5rem]">
                            Essas são pessoas reais <br className="lg:hidden" /> que tinham uma vida normal e hoje vivem da internet.
                        </p>
                    </div>
                </div>
                <section className="lg:max-w-[76rem] max-w-full mx-auto mm:px-5 lg:pt-[5rem] pt-[3.5rem] border-t border-t-[#D7D6D6] lg:mt-[5rem] mt-[3.5rem]">
                    <div className="lg:max-w-[76rem] max-w-[19.4375rem] mx-auto flex lg:flex-row flex-col items-center justify-center lg:gap-[8rem] gap-8">
                        <h1 className="text-[#363636] text-[1.75rem] font-bold block lg:hidden text-center">
                            <span className="text-[#00A99D]">Quem é</span> <br /> Leandro Ladeira?
                        </h1>
                        <Image className="lg:block hidden" src={Leandro} alt="" />
                        <Image className="block lg:hidden" src={LeandroM} alt="" />
                        <div className="lg:w-[31.81rem] w-full">
                            <h1 className="text-[#363636] text-[3rem]  font-bold lg:block hidden leading-[4rem]">
                                Quem é <br /> Leandro Ladeira?
                            </h1>
                            <div className="lg:flex hidden items-center px-4 py-1 bg-[#FCFCFC] border border-[#E9E9E9] rounded-[1.5rem] w-fit gap-1">
                                <Image src={Star} alt="estrela" />
                                <p>Criador do Método VTSD</p>
                            </div>
                            <div className={`${inter.className} text-[#353639] lg:text-[1rem] text-[0.875rem] lg:leading-[1.trem] leading-[1.5rem] lg:mt-12 mt-0 max-w-[30.125rem]`}>
                                <p >
                                    Leandro Ladeira é uma das mentes por trás de um dos maiores negócios digitais do Brasil. Tudo começa em 2014, quando iniciou um negócio despretensiosamente para lançar o curso online da fisioterapeuta pélvica Cátia Damasceno.
                                </p>
                                <p className="lg:mt-4 mt-2">
                                    Começaram do zero, sem audiência, sem dinheiro e sem recursos. De lá para cá, criaram o maior canal de relacionamento do mundo no Youtube, com mais de 10 milhões de inscritos, e fizeram mais de 200 mil vendas do curso. É o único desse nicho "pouco convencional" que está entre os 30 maiores da Hotmart no mundo.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <footer className="bg-[#E9E9E9] lg:pt-8 pt-4 lg:pb-8 pb-6 mt-[5rem]">
                <div className={`${inter.className} lg:text-[.75rem] text-[0.625rem] text-[#363636] font-semibold lg:max-w-[76rem] mx-auto  lg:text-left text-center flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-4`}>
                    <p>
                        Todos os direitos reservados. Ready To Go. CNPJ: 37.643.030/0001-26
                    </p>
                    <div className="flex items-center lg:gap-4 gap-2 text-[.875rem]">
                        <p>
                            Designed by
                        </p>
                        <Image src={Rtg} alt="logo rtg" />
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default ListaB