import React from "react";
import ScrollButton from "./ScrollButton";
import Link from "next/link";
import Navbar from "./BurgerNav";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 shadow shadow-[#ff4d00] hover:shadow-md hover:shadow-[#ff4d00] background-gradient">
      <img className="w-44" src="/header/Devinci AI.png" alt="" />

      <div className="border-t-4 border-[#ff4d00] w-[15%] -ml-12 max-[1150px]:w-[10%] max-[1015px]:w-[5%] max-[915px]:w-[0%]" />

      <div className="flex justify-center items-center -ml-7 max-[825px]:hidden">
        <ScrollButton targetId="Services">
          <p className="mr-10 text-lg underline cursor-pointer">Services</p>
        </ScrollButton>
        <ScrollButton targetId="Benefits">
          <p className="mr-10 text-lg underline cursor-pointer">Benefits</p>
        </ScrollButton>
        <ScrollButton targetId="Studies">
          <p className="mr-10 text-lg underline cursor-pointer">Case Studies</p>
        </ScrollButton>
        <ScrollButton targetId="Try">
          <p className="text-lg underline cursor-pointer">Try it!</p>
        </ScrollButton>
      </div>

      <div className="border-t-4 border-[#ff4d00] w-[15%] max-[1150px]:w-[10%] max-[1015px]:w-[5%] max-[915px]:w-[0%]" />

      <div className="flex justify-center items-center max-[825px]:hidden">
        <Link
          href="https://www.instagram.com/devinciaaa/"
          rel="noreferrer"
          target="_blank"
        >
          <img className="w-8 mr-6" src="/header/instagram.png" alt="" />
        </Link>
        <Link
          href="https://twitter.com/DevinciAAA"
          rel="noreferrer"
          target="_blank"
        >
          <img className="w-9" src="/header/twitter.svg" alt="" />
        </Link>
      </div>

      <Navbar />
    </div>
  );
}

export default Header;
