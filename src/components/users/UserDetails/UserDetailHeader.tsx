import { useParams } from "next/navigation";
import React from "react";

export default function UserDetailHeader({ userId }: { userId: string }) {
  const params = useParams();
  return (
    <header className="flex flex-col gap-7">
      <ul className="flex justify-between items-center">
        <li className="text-xl font-bold text-darkGreenApp lg:text-2xl xl:text-3xl">
          Usuarios {">"} <span className="text-orangeApp">User {userId}</span>
        </li>
        <li>
          <button className="bg-softGreenApp text-white px-4 py-2 rounded-md lg:px-10">
            Editar perfil
          </button>
        </li>
      </ul>

      <div className="flex flex-col gap-3">
        <h1 className="text-orangeApp font-bold text-base bg-white py-2 px-1 lg:text-xl">
          Información básica
        </h1>
        <p className="text-sm text-darkGreenApp lg:text-base">
          Es posible que cierta información sea editable para usuarios con
          permisos de edición.
        </p>
      </div>
    </header>
  );
}
