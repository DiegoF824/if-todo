import logo from "@/images/logo.png";
import Image from "next/image";
import { FaRegCalendarAlt, FaRegClock, FaRegUser } from "react-icons/fa";
import { LuBook } from "react-icons/lu";
import { CgBell } from "react-icons/cg";
import { AiOutlinePlus } from "react-icons/ai";

export default function Menu() {
  return (
    <>
      <div className="flex flex-col justify-between bg-white text-gray-700 w-16 h-screen">
        <div className="flex flex-col items-center">
          <Image src={logo} alt="if-todo" height={62} />
          <div className="bg-[#98C696] w-full h-0.5 mb-6"></div>
          <nav>
            <ul>
              <li className="flex justify-center mb-6"><FaRegCalendarAlt size={33} color="#666664"/></li>
              <li className="flex justify-center mb-6"><FaRegClock size={33} color="#666664" /></li>
              <li className="flex justify-center mb-6"><LuBook size={33} color="#666664" /></li>
              <li className="flex justify-center mb-6"><CgBell size={33} color="#666664" /></li>
              <li className="flex justify-center mb-6"><FaRegUser size={33} color="#666664" /></li>
              <li className="flex justify-center mb-6"><AiOutlinePlus size={33} color="#666664" /></li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col">
          <button>perfil</button>
          <button>sair</button>
        </div>
      </div>
    </>
  );
}
