import React, { useEffect, useState } from "react";
import LogoWhite from "../assets/img/logo-white.svg";
import LogoDark from "../assets/img/logo-dark.svg";

function Header() {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? " bg-white py-6 shadow-lg" : " bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-300`}
    >
      <div className=" container mx-auto flex flex-col items-center gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between">
        <a href="/">
          {header ? (
            <img src={LogoDark} className="w-[160px]" />
          ) : (
            <img src={LogoWhite} className="w-[160px]" />
          )}
        </a>
        <nav
          className={`${
            header ? " text-slate-900" : "text-white"
          } flex gap-x-4 lg:gap-x-8 uppercase items-center`}
        >
          <a href="" className="hover:text-[#a37b49] transition">
            home
          </a>
          <a href="" className="hover:text-[#a37b49] transition">
            Rooms
          </a>
          <a href="" className="hover:text-[#a37b49] transition">
            Restaurant
          </a>
          <a href="" className="hover:text-[#a37b49] transition">
            spa
          </a>
          <a href="" className="hover:text-[#a37b49] transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
