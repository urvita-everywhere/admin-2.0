import { UserInterface } from "@/types/user";
import { useRouter } from "next/navigation";
import React from "react";

export default function RowUser({ user }: { user: UserInterface }) {
  const router = useRouter();
  const onHandlePush = () => {
    router.push(`/usuarios/${user.id}`);
  };

  return (
    <tr
      onClick={onHandlePush}
      className="bg-white cursor-pointer hover:bg-orangeApp/5 odd:bg-white even:bg-transparent"
    >
      <td scope="row">
        <div className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap w-44">
          <img
            className="w-10 h-10 rounded-full"
            src={user.picture}
            alt="Jese image"
          />
          <p className="pl-3 w-36 overflow-hidden  ">{user.id}01010</p>
        </div>
      </td>
      <td className="px-6 py-4">
        <p className="w-40">
          {user.firstName} {user.lastName}
        </p>
      </td>
      <td className="px-6 py-4">
        <p className="w-40">Septiembre 20, 2023</p>
      </td>
      <td className="px-6 py-4">
        <p className="w-40">5 años</p>
      </td>
      <td className="px-6 py-4">
        <p className="w-40">FEZL210991GV5</p>
      </td>
      <td className="px-6 py-4">
        <p className="w-40">México</p>
      </td>
      {/* <td className="px-6 py-4">
        <div className="flex items-center justify-center bg-[#a4c9a3] rounded-md h-9">
        <span className="uppercase text-white">activa</span>
        </div>
        </td>
        <td className="px-6 py-4">
        <p className="w-44">MXN$10,000.00</p>
        </td>
        <td className="px-6 py-4">
        <p className="w-44">8</p>
        </td>
        <td className="px-6 py-4">
        <p className="w-44">8</p>
      </td> */}
    </tr>
  );
}
