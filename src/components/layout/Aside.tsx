import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const links = [
  {
    path: "/",
    text: "Inicio",
  },
  {
    path: "/usuarios",
    text: "Usuarios",
  },
  {
    path: "/edificios",
    text: "Edificios",
  },
  {
    path: "/ordenes",
    text: "Ordenes",
  },
  {
    path: "/administrador",
    text: "Administrador",
  },
  {
    path: "/ayuda",
    text: "Ayuda",
  },
];

export default function Aside({ openMenu }: { openMenu: boolean }) {
  const router = useRouter();

  return (
    <aside
      className={` bg-white ${
        openMenu
          ? "z-40 left-0 bottom-0 top-[73px] shadow-md w-64 fixed"
          : "hidden"
      } 
        lg:w-64 xl:w-96 px-10 py-10 lg:block lg:static`}
    >
      <ul className="flex flex-col sticky top-20 lg:gap-4">
        {links.map((link) => (
          <Link
            href={link.path}
            key={link.text}
            className={`cursor-pointer font-bold text-base pl-4 py-2 hover:text-orangeApp ${
              router.pathname.includes(link.text.toLocaleLowerCase()) ||
              router.pathname === link.path
                ? "text-orangeApp border-l-4 border-orangeApp "
                : "text-darkGreenApp"
            }`}
          >
            {link.text}
          </Link>
        ))}
      </ul>
    </aside>
  );
}
