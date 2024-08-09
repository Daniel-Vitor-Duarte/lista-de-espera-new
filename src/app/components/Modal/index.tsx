import Image from "next/image";
import Check from "public/Icons/checked.webp"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 lg:px-0 px-4">
      <div className="bg-white p-6 rounded-[2rem] shadow-md flex flex-col items-center ">
        <Image src={Check} alt="" />
        <h2 className="text-[1.5rem] font-bold text-[#666] max-w-[22rem] text-center leading-[2rem]">{title}</h2>
        <div className="text-[#666] max-w-[20.125rem] text-center lg:mt-4 mt-3">
          {children}
        </div>
        <button
          onClick={onClose}
          className={`${inter.className} bg-[#363636] text-[#FEFEFF] px-10 py-4 rounded-md lg:mt-16 mt-10`}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;
