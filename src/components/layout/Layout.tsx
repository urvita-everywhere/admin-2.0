import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "@/app/globals.css";
import Aside from "./Aside";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [openMenu, setOpenMenu] = useState(false);

  const onHandleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <Navbar setOpenMenu={onHandleOpenMenu} />
      <main className="flex relative min-h-[80vh] bg-backgroundApp">
        <Aside openMenu={openMenu} />
        <div className="w-full overflow-auto px-5 py-5 ">{children}</div>
      </main>
      <Footer />
    </>
  );
}
