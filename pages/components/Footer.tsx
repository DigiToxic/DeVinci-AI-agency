import React from "react";
import Link from "next/link";
import ScrollButton from "./ScrollButton";

function Footer() {
  return (
    <div className="border-t-2 border-[#ff4d0053] flex justify-evenly items-center pt-5 pb-7 mt-24 max-[775px]:px-8 max-[775px]:justify-between max-[600px]:flex-col">
      <div className="mt-6 max-[600px]:mb-10 max-[600px]:text-center">
        <p className="font-bold text-4xl mt-3">Pages</p>
        <ScrollButton targetId="Services">
          <p className="text-lg mt-3 cursor-pointer hover:text-[rgb(168,168,168)]">
            Services
          </p>
        </ScrollButton>
        <ScrollButton targetId="Benefits">
          <p className="text-lg mt-3 cursor-pointer hover:text-[rgb(168,168,168)]">
            Benefits
          </p>
        </ScrollButton>
        <ScrollButton targetId="Studies">
          <p className="text-lg mt-3 cursor-pointer hover:text-[rgb(168,168,168)]">
            Case Studies
          </p>
        </ScrollButton>
        <ScrollButton targetId="Try">
          <p className="text-lg mt-3 cursor-pointer hover:text-[rgb(168,168,168)]">
            Try it!
          </p>
        </ScrollButton>
      </div>
      <div className="max-[600px]:mb-10 max-[600px]:text-center">
        <p className="font-bold text-4xl -mt-6 max-[600px]:mt-0">Contact Us</p>
        <Link
          href="https://twitter.com/DevinciAAA"
          rel="noreferrer"
          target="_blank"
        >
          <p className="text-lg mt-3 cursor-pointer hover:text-[rgb(168,168,168)]">
            Twitter
          </p>
        </Link>
        <Link
          href="https://www.instagram.com/devinciaaa/"
          rel="noreferrer"
          target="_blank"
        >
          <p className="text-lg mt-3 cursor-pointer hover:text-[rgb(168,168,168)]">
            Instagram
          </p>
        </Link>
        <p className="text-lg mt-3 cursor-pointer hover:text-[rgb(168,168,168)]">
  
        </p>
      </div>
      <div className="max-[600px]:text-center">
        <p className="font-bold text-4xl">Docs</p>
        <p className="text-lg mt-3 cursor-pointer hover:text-[rgb(168,168,168)]">
          Privacy Policy
        </p>
        <p className="text-lg mt-3 cursor-pointer hover:text-[rgb(168,168,168)]">
          Refund Policy
        </p>
        <p className="text-lg mt-3 cursor-pointer hover:text-[rgb(168,168,168)]">
          Terms and Conditions
        </p>
      </div>
    </div>
  );
}

export default Footer;
