import React, { useState, useEffect } from "react";
import Link from "next/link";
import ScrollButton from "./ScrollButton";

interface MobileNavProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function MobileNav({ open }: MobileNavProps) {
  const [shouldRender, setShouldRender] = useState(open);

  useEffect(() => {
    // Render the MobileNav component only after mounting on the client-side
    setShouldRender(true);
  }, []);

  return shouldRender ? (
    <div
      className={`fixed top-0 bottom-0 right-0 h-screen w-[35%] z-20 bg-black transform ${
        open ? "-translate-y-0" : "-translate-y-[1000px]"
      } transition-transform duration-300 ease-in-out filter  `}
    >
      <div className="flex flex-col justify-start items-start mt-10 p-5">
        <a className="my-4 border-b border-[#ff4d00] w-full">
          <ScrollButton targetId="Services">
            <p className="text-xl mb-4">Services</p>
          </ScrollButton>
        </a>
        <a className="my-4 border-b border-[#ff4d00] w-full">
          <ScrollButton targetId="Benefits">
            <p className="text-xl mb-4">Benefits</p>
          </ScrollButton>
        </a>
        <a className="my-4 border-b border-[#ff4d00] w-full">
          <ScrollButton targetId="Studies">
            <p className="text-xl mb-4">Case Studies</p>
          </ScrollButton>
        </a>
        <a className="my-4 border-b border-[#ff4d00] w-full">
          <ScrollButton targetId="Try">
            <p className="text-xl mb-4">Try it!</p>
          </ScrollButton>
        </a>

        <Link
          href="https://twitter.com/DevinciAAA"
          rel="noreferrer"
          target="_blank"
          className="my-4"
        >
          <img
            src="/header/twitter.svg"
            className="w-8 my-2 cursor-pointer"
            alt=""
          />
        </Link>
        <Link
          href="https://www.instagram.com/devinciaaa/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/header/instagram.png"
            className="w-8 my-2 cursor-pointer"
            alt=""
          />
        </Link>
      </div>
    </div>
  ) : null;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden max-[825px]:block">
      <MobileNav open={open} setOpen={setOpen} />
      <div>
        <div
          className="group z-50 relative w-10 h-6 mr-10 cursor-pointer flex-col justify-between items-center flex"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 bg-[#ff4d00] rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            } ${open ? "fixed" : ""} ${open ? "w-[37px]" : "w-full"}`}
          />
          <span
            className={`h-1 bg-[#ff4d00] rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 bg-[#ff4d00] rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            } ${open ? "fixed" : ""} ${open ? "w-[37px]" : "w-full"} ${
              open ? "mt-[19px]" : ""
            } ${open ? "mr-[2px]" : ""}`}
          />
        </div>
      </div>
    </div>
  );
}
