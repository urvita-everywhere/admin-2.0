import Layout from "@/components/layout/Layout";
import React from "react";

export default function HomePage() {
  return (
    <Layout>
      <div className="h-40 lg:h-80 w-full p-5 bg-[#f2f5f7] rounded-md animate-pulse">
        <div className="w-56 lg:w-96 h-full bg-[#e3e8ed] rounded-md"></div>
      </div>

      <div className="flex mt-10 gap-4 lg:gap-14 animate-pulse">
        <div className="w-60 h-48 rounded-md bg-[#e3e8ed]"></div>
        <div className="w-60 h-48 rounded-md bg-[#e3e8ed]"></div>
        <div className="w-60 h-48 rounded-md bg-[#e3e8ed]"></div>
        <div className=" lg:w-60 h-48 rounded-md bg-[#e3e8ed]"></div>
      </div>
    </Layout>
  );
}
