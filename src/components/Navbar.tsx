
import Image from "next/image";
import logoImage from "../assets/images/White-logo.png"
import MenuIcon from "../assets/icons/menu.svg"

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container ">
        <div className="py-4 px-4 items-center flex justify-between">
        <div className="relative">
          <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
        <Image className=" h-[35px] w-[180px] relative " src={logoImage} alt="innerlogic-logo" />
        </div>
        <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
          <MenuIcon className="text-white"/>
        </div>
        <nav className=" gap-6 items-center hidden sm:flex ">
          <a href="#" className="text-white text-opacity-65 hover:text-opacity-100 transition">About Us</a>
          <a href="#" className="text-white text-opacity-65 hover:text-opacity-100 transition">Resources</a>
          <a href="#" className="text-white text-opacity-65 hover:text-opacity-100 transition">Contact</a>
          <button className="bg-white py-2 px-4 rounded-lg">Sign-in</button>
        </nav>
        </div>
      </div>
    </div>
  );
};


