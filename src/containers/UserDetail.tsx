import Layout from "@/components/layout/Layout";
import UserDetailHeader from "@/components/users/UserDetails/UserDetailHeader";
import { useGetUsers } from "@/hooks/useGetUsers";
import {
  ArrowDownIcon,
  CreditCardIcon,
  EditIcon,
  IntercomIcon,
} from "@/utils/icons";
import { useParams } from "next/navigation";
import React from "react";

export default function UserDetail() {
  const { users } = useGetUsers();
  const params = useParams();

  const userToShow = users.find((user) => user?.id === params?.id);

  return (
    <Layout>
      <UserDetailHeader userId={`${params?.id}`} />
      <section className="flex flex-col  gap-5 mt-10 md:flex-row">
        <div className=" bg-white w-full md:w-1/2 rounded-md gap-5 shadow-md px-5 lg:px-10 py-5 flex flex-col">
          <p className="self-end">
            <EditIcon />
          </p>
          <div className="flex items-center gap-5">
            <img
              className="w-20 h-20 rounded-full"
              src={userToShow?.picture}
              alt="Jese image"
            />
            <p className="text-xl font-semibold">
              {userToShow?.firstName} {userToShow?.lastName}
            </p>
          </div>
          <div className="flex flex-col gap-5 text-sm">
            <div className="flex justify-between">
              <p>Correo electrónico</p>
              <p>Correo electrónico</p>
            </div>
            <div className="flex justify-between">
              <p>Teléfono</p>
              <p>Teléfono</p>
            </div>
            <div className="flex justify-between">
              <p>País</p>
              <p>País</p>
            </div>
            <div className="flex justify-between">
              <p>Regimen</p>
              <p>Regimen</p>
            </div>
          </div>
        </div>

        <div className="  w-full md:w-1/2 rounded-md  justify-between flex flex-col gap-4">
          <div className="flex flex-col justify-around gap-4 text-sm h-2/3 rounded-md bg-white shadow-md px-5 lg:px-10 py-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <IntercomIcon />
                <p>Intercom ID</p>
              </div>

              <EditIcon />
            </div>
            <div className="flex justify-between items-center">
              <p>External ID</p>
              <p>External ID</p>
            </div>
            <p className="font-bold">SAI</p>
            <div className="flex justify-between items-center">
              <p>ID de proveedor</p>
              <p>ID de proveedor</p>
            </div>
            <div className="flex justify-between items-center">
              <p>ID de cliente</p>
              <p>ID de cliente</p>
            </div>
          </div>
          <div className="flex [&>div]:w-1/2 gap-4 [&>div]:h-auto flex-1 ">
            <div className="flex flex-col gap-2 justify-center items-center bg-white shadow-md rounded-md p-4">
              <p className="text-2xl font-bold">0</p>
              <p>Tokens</p>
            </div>
            <div className="flex flex-col  gap-2 justify-center items-center bg-white shadow-md rounded-md p-4">
              <p className="text-orangeApp font-bold text-2xl">$ 2,000.000</p>
              <p>Valor Total</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <h2 className="flex items-center text-orangeApp font-bold text-xl mt-10">
          Datos generales <ArrowDownIcon />
        </h2>
        <div className="w-full flex flex-col gap-5 text-sm  bg-white rounded-md shadow-md [&>div]:flex [&>div]:justify-between p-5 lg:px-10">
          <h3 className="font-bold text-base flex items-center gap-3">
            Datos generales <EditIcon />
          </h3>
          <div>
            <p>Fecha de nacimiento</p>
            <p>Octubre 28, 2003</p>
          </div>
          <div>
            <p>Género</p>
            <p>Masculino</p>
          </div>
          <div>
            <p>Nacionalidad</p>
            <p>Mexicana</p>
          </div>
          <div>
            <p>País de residencia</p>
            <p>Colombia</p>
          </div>
          <div>
            <p>Número de ID oficial</p>
            <p>1234567</p>
          </div>
          <div>
            <p>Antigüedad</p>
            <p>24 meses</p>
          </div>
          <div>
            <p>RFC</p>
            <p>1234567</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 text-sm  bg-white rounded-md shadow-md [&>div]:flex [&>div]:justify-between p-5 lg:px-10">
          <h3 className="font-bold text-base flex items-center gap-3">
            Datos de facturación <EditIcon />
          </h3>
          <div>
            <p>Dirección</p>
            <p>Dirección</p>
          </div>
          <div>
            <p>Colonia</p>
            <p>Colonia</p>
          </div>
          <div>
            <p>Delegación / Municipio</p>
            <p>Delegación / Municipio</p>
          </div>
          <div>
            <p>Código postal</p>
            <p>Código postal</p>
          </div>
          <div>
            <p>Estado</p>
            <p>Estado</p>
          </div>
          <div>
            <p>País</p>
            <p>País</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <h2 className="flex items-center text-orangeApp font-bold text-xl mt-10">
          Legal <ArrowDownIcon />
        </h2>
        <div className="flex justify-between items-center shadow-md bg-white px-5 lg:px-10 py-5 rounded-md">
          <div className="flex items-center gap-4">
            <img
              className="w-10 h-10"
              src="/logo-urvita-min-light.png"
              alt="logo-urvita"
            />
            <div>
              <h3 className="flex font-bold items-center gap-2">
                Contrato <EditIcon />
              </h3>
              <p>Estado de contrato</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button className="px-3 py-1 rounded-md text-white bg-lightGreen uppercase">
              Firmado
            </button>
            <button className="px-3 py-1 rounded-md border border-darkGreenApp uppercase">
              Revisar
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <h2 className="flex items-center text-orangeApp font-bold text-xl mt-10">
          Métodos de pago <ArrowDownIcon />
        </h2>
        <div className="flex flex-col gap-4  shadow-md bg-white px-5 lg:px-10 py-5 rounded-md">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <CreditCardIcon />
              <p>Banorte</p>
            </div>
            <p>********12434</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <CreditCardIcon />
              <p>Banorte</p>
            </div>
            <p>********12434</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
