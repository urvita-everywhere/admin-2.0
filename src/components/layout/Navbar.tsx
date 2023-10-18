import { MenuIcon } from "@/utils/icons";
import Image from "next/image";
import React from "react";

export default function Navbar({ setOpenMenu }: { setOpenMenu: () => void }) {
  return (
    <header className="sticky top-0 z-10 bg-white ">
      <nav className=" px-4 py-4 items-center border-b lg:pl-10">
        <ul className="flex justify-between">
          <li className="flex items-center gap-2">
            <div onClick={setOpenMenu} className="lg:hidden mt-1">
              <MenuIcon />
            </div>
            <Image
              src="/urvita-logo_dark-green.png"
              alt="Urvita logo"
              width={95}
              height={34.7}
              className="object-cover"
            />
          </li>

          <li className="hidden md:block">
            <input
              type="text"
              placeholder="Buscar..."
              className="h-full px-5 bg-[#F9FAFA] rounded-lg outline-orangeApp"
            />
          </li>
          <li>
            <img
              className="w-10 h-10 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
              alt="Jese image"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
