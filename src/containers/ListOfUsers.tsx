import "@/app/globals.css";
import Layout from "@/components/layout/Layout";
import RowUser from "@/components/users/ListOfUsers/RowUser";
import { useGetUsers } from "@/hooks/useGetUsers";
import { ExportIcon } from "@/utils/icons";
import Link from "next/link";
import React from "react";

export default function ListOfUsers() {
  const { users } = useGetUsers();
  const arrayDemo = new Array(20).fill(1);

  return (
    <Layout>
      <header className="flex justify-between pt-5 items-center">
        <ul className="flex items-center gap-2">
          <li className="font-bold text-xl text-darkGreenApp lg:text-2xl xl:text-4xl ">
            Usuarios
          </li>
          <ExportIcon />
        </ul>
        <ul>
          <button className="px-5 text-white uppercase text-sm rounded-lg py-2 bg-softGreenApp">
            Crear usuario
          </button>
        </ul>
      </header>
      <section className="h-20 px-3 flex gap-5 items-center rounded-md bg-white mt-5 overflow-x-auto lg:px-6  list-none">
        <li>
          <input
            type="radio"
            id="general-data-option"
            name="plan"
            value="general-data-option"
            className="hidden peer"
            defaultChecked
            required
          />
          <label
            htmlFor="general-data-option"
            className="flex items-center justify-center text-sm  w-40  py-3 px-2 text-green-900 bg-white border rounded-lg cursor-pointer  peer-checked:bg-softGreenApp  peer-checked:text-white hover:bg-gray-50"
          >
            <p className="font-semibold">Datos generales</p>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="tokens-option"
            name="plan"
            value="tokens-option"
            className="hidden peer"
            required
          />
          <label
            htmlFor="tokens-option"
            className="flex items-center justify-center text-sm  w-40  py-3 px-2 text-green-900 bg-white border rounded-lg cursor-pointer  peer-checked:bg-softGreenApp  peer-checked:text-white hover:bg-gray-50"
          >
            <p className="font-semibold">Tokens</p>
          </label>
        </li>

        <li>
          <input
            type="radio"
            id="transactions-option"
            name="plan"
            value="transactions-option"
            className="hidden peer"
            required
          />
          <label
            htmlFor="transactions-option"
            className="flex items-center justify-center text-sm  w-40  py-3 px-2 text-green-900 bg-white border rounded-lg cursor-pointer  peer-checked:bg-softGreenApp  peer-checked:text-white hover:bg-gray-50"
          >
            <p className="font-semibold">Transacciones</p>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="legal-option"
            name="plan"
            value="legal-option"
            className="hidden peer"
            required
          />
          <label
            htmlFor="legal-option"
            className="flex items-center justify-center text-sm  w-40  py-3 px-2 text-green-900 bg-white border rounded-lg cursor-pointer  peer-checked:bg-softGreenApp  peer-checked:text-white hover:bg-gray-50"
          >
            <p className="font-semibold">Legal</p>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="pay-option"
            name="plan"
            value="pay-option"
            className="hidden peer"
            required
          />
          <label
            htmlFor="pay-option"
            className="flex items-center justify-center text-sm  w-40  py-3 px-2 text-green-900 bg-white border rounded-lg cursor-pointer  peer-checked:bg-softGreenApp  peer-checked:text-white hover:bg-gray-50"
          >
            <p className="font-semibold">Métodos de pago</p>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="booking-option"
            name="plan"
            value="booking-option"
            className="hidden peer"
            required
          />
          <label
            htmlFor="booking-option"
            className="flex items-center justify-center text-sm  w-40  py-3 px-2 text-green-900 bg-white border rounded-lg cursor-pointer  peer-checked:bg-softGreenApp  peer-checked:text-white hover:bg-gray-50"
          >
            <p className="font-semibold">Reservas</p>
          </label>
        </li>
      </section>
      <div className=" flex flex-col gap-3  overflow-x-auto mt-5  ">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                User ID
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Fecha de nacimiento
              </th>
              <th scope="col" className="px-6 py-3">
                Antigüedad
              </th>
              <th scope="col" className="px-6 py-3">
                RFC
              </th>
              <th scope="col" className="px-6 py-3">
                País de origen
              </th>
              {/* <th scope="col" className="px-6 py-3">
                Suscripción
              </th>
              <th scope="col" className="px-6 py-3">
                Monto de suscripción
              </th>
              <th scope="col" className="px-6 py-3">
                Meses activos
              </th>
              <th scope="col" className="px-6 py-3">
                Meses en pausa
              </th> */}
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <RowUser key={index} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
