"use client";
import React, { useEffect, useRef, useState } from "react";
import Countries from "@/app/paises.json";
import Image from "next/image";
import ArrowDown from "public/Icons/chevron-down.svg";

interface Props {
  handleDdi: (ddi: any) => void;
}

type Pais = {
  pais: string;
  img: string;
  ddi: number;
  continente: string;
};

function SelectCustom({ handleDdi }: Props) {
  const customSelect = useRef<HTMLDivElement>(null);
  const countries = Countries;
  const [toggleSelect, setToggleSelect] = useState(false);
  const [ddi, setDdi] = useState(55);
  const [paisActive, setPaisActive] = useState<Pais>({
    ddi: 55,
    img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
    continente: "América do Sul",
    pais: "Brasil",
  });

  const handleSelectDdi = (pais: Pais) => {
    setPaisActive(pais);
    setToggleSelect(false);
    handleDdi("+" + pais.ddi);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | any) {
      if (
        customSelect.current &&
        !customSelect.current.contains(event.target)
      ) {
        setToggleSelect(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [customSelect]);

  return (
    <div className="relative w-[8rem] " ref={customSelect}>
      <div
        className="w-[8rem] bg-gray-50 h-full border border-gray-300 text-black text-sm rounded-lg flex p-4 relative"
        onClick={() => setToggleSelect(!toggleSelect)}
      >
        <div className="flex justify-between items-center gap-4 ">
          +{paisActive.ddi}
          <img  src={paisActive.img} alt="" />
          <div className="relative w-[10px] h-[10px]">
            <Image src={ArrowDown} layout="fill" alt="" />
          </div>
        </div>
      </div>
      {toggleSelect && (
        <ul className="absolute lg:-top-12 -top-40 left-0 w-[8rem] bg-gray-50 rounded-lg max-h-96 text-black  overflow-y-scroll z-20">
          {countries.map((pais) => (
            <li
              key={pais.ddi}
              className="mt-2 hover:bg-[#0000003f] px-3 cursor-pointer flex justify-between items-center"
              onClick={() => handleSelectDdi(pais)}
            >
              +{pais.ddi}
              <img src={pais.img} alt="" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SelectCustom;
