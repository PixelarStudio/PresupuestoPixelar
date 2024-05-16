/* // src/components/PresupuestoGenerado.jsx
import React, { forwardRef } from "react";
import servicios from "../data/servicios.json";

const PresupuestoGenerado = forwardRef(({ datos }, ref) => {
  const servicio = servicios.find((s) => s.id === parseInt(datos.servicio));
  const total = servicio ? servicio.precio : 0;

  return (
    <div
      ref={ref}
      className="xl:text7xl xl:w-auto xl:h-auto xl:p-3 w-auto h-auto mx-auto p-6 bg-[#363946] text-white  shadow-lg backdrop-blur-xl rounded-lg"
    >
      <div className="text-center">
        <img
          src="./public/logops.png"
          alt="Logo"
          className="h-20 p-1 w-auto mx-auto"
        />
      </div>
      <h2 className="text-2xl text-center py-7 font-bold">PRESUPUESTO</h2>
      <div className="text-left mb-16">
        <div className="mb-6">
          <p className="text-white text-2xl">
            <b>Cliente:</b> {datos.nombre} {datos.apellido}
          </p>
          <p className="text-white text-2xl">
            <b>Fecha:</b> {new Date().toLocaleDateString()}
          </p>
          <p className="text-white text-2xl">
            <strong>Correo:</strong> {datos.correo}
          </p>
          <p className="text-white text-2xl">
            <strong>Teléfono:</strong> {datos.telefono}
          </p>
          <p className="text-white text-2xl">
            <strong>Detalles:</strong> {datos.detalles}
          </p>
        </div>
      </div>
      <table className="w-full mb-6 border-collapse xl:text7xl xl:p-3 h-auto">
        <thead>
          <tr className="bg-black">
            <th className="border text-3xl mx-auto px-4 p-6 text-left">
              Producto
            </th>
            <th className="border text-3xl mx-auto px-4 p-6 text-left">
              Precio
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-800-600">
            <td className="border text-3xl mx-auto px-4 p-6">
              {servicio.nombre}
            </td>
            <td className="border text-3xl mx-auto px-4 p-6">
              $ {servicio.precio}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center items-center mb-6 text-center mx-auto">
        <p className="text-3xl font-bold ">Total: ${total}</p>
      </div>
      <div className="flex flex-col text-2xl justify-center items-center">
        <p className="font-bold">Información de Contacto</p>
        <p>Teléfono: +54 11 24025510</p>
        <p>Redes sociales: info@PixelarStudio.com</p>
        <p>Dirección: Almirante Brown, Buenos Aires</p>
      </div>
    </div>
  );
});

export default PresupuestoGenerado;
 */

/* import React, { forwardRef } from "react";

const PresupuestoGenerado = forwardRef(({ datos }, ref) => {
  return (
    <div
      ref={ref}
      className="xl:text-2xl xl:w-auto xl:h-auto xl:p-3 w-auto h-auto mx-auto p-6 bg-{../logops.png} text-white shadow-lg backdrop-blur-xl rounded-lg"
    >
      <div className="text-center rounded-lg">
        <img src="/logops.png" alt="Logo" className="h-20 p-1 w-auto mx-auto" />
      </div>
      <div className="text-center">
        <h2 className="text-2xl text-center py-7 font-bold">PRESUPUESTO</h2>
      </div>
      <div className="text-left mb-16">
        <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-cyan-700 border-2 m-3 p-2 flex justify-between rounded-lg shadow-slate-900 shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-white text-right flex flex-row ">Buenos Aires</p>
          <p className="text-white text-right flex flex-row ">
            Fecha: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-cyan-700 border-2 m-3 p-2 rounded-lg shadow-slate-900 shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl ">
          <p className="text-white">
            <b className="text-[#ffa500]  ">Cliente: </b>
            {datos.apellido} {datos.nombre}{" "}
          </p>
          <p className="text-white">
            <b className="text-[#ffa500]   ">Correo:</b> {datos.correo}
          </p>
          <p className="text-white text-2xl">
            <b className="text-[#ffa500] ">Teléfono:</b> {datos.telefono}
          </p>
        </div>

        <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-cyan-700 border-2 m-3 p-2 flex-col flex-wrap flex overflow-hidden rounded-lg shadow-slate-900 shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-white text-2xl ">
            <b className="text-[#ffa500]  ">Tipo de Servicio:</b>{" "}
            {datos.tipoServicio}
          </p>
        </div>

        <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-cyan-700 border-2 m-3 p-2 flex-col flex-wrap flex overflow-hidden rounded-lg shadow-slate-900 shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="max-w-6xl h-auto mx-auto text-white flex flex-row px-1 gap-3 ">
            <b className="text-[#ffa500]">Descripción del Proyecto:</b>{" "}
            {datos.descripcionProyecto}
          </p>
        </div>
        <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-cyan-700 border-2 m-3 p-2 rounded-lg shadow-slate-900 shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <div className="flex flex-row px-1 gap-3 ">
            <b className="text-[#ffa500]">Funcionalidades:</b>
            {datos.funcionalidades}
          </div>
        </div>

        <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-cyan-700 border-2 m-3 p-2 rounded-lg shadow-slate-900 shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-white text-2xl">
            <b className="text-[#ffa500] text-2xl">Plazo de Entrega:</b> {datos.plazoEntrega}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mb-6 text-center mx-auto rounded-lg mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
        <p className="text-3xl font-bold  shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl p-3">
          Presupuesto Total: ${datos.presupuestoEstimado}
        </p>
      </div>

      <div className="flex flex-col text-2xl justify-center items-center rounded-lg">
        <p className="font-bold">Información de Contacto</p>
        <p>Teléfono: +54 11 24025510</p>
        <p>Redes sociales: info@PixelarStudio.com</p>
        <p>Dirección: Almirante Brown, Buenos Aires</p>
      </div>
    </div>
  );
});

export default PresupuestoGenerado;
 */

/* import React, { forwardRef } from 'react';

const PresupuestoGenerado = forwardRef(({ datos }, ref) => {
  return (
    <div
      ref={ref}
      className="xl:text-2xl xl:w-auto xl:h-auto xl:p-3 w-auto h-auto mx-auto p-6 bg-[#363946] text-white shadow-lg backdrop-blur-xl rounded-lg"
    >
      <div className="text-center">
        <img
          src="/logops.png"
          alt="Logo"
          className="h-20 p-1 w-auto mx-auto"
        />
      </div>
      <h2 className="text-2xl text-center py-7 font-bold">PRESUPUESTO</h2>
      <div className="text-left mb-16">
        <div className="mb-6">
          <p className="text-white text-2xl">
            <b>Cliente:</b> {datos.nombre} {datos.apellido}
          </p>
          <p className="text-white text-2xl">
            <b>Fecha:</b> {new Date().toLocaleDateString()}
          </p>
          <p className="text-white text-2xl">
            <strong>Correo:</strong> {datos.correo}
          </p>
          <p className="text-white text-2xl">
            <strong>Teléfono:</strong> {datos.telefono}
          </p>
          <p className="text-white text-2xl">
            <strong>Tipo de Servicio:</strong> {datos.tipoServicio}
          </p>
          <p className="text-white text-2xl">
            <strong>Descripción del Proyecto:</strong> {datos.descripcionProyecto}
          </p>
          <p className="text-white text-2xl">
            <strong>Presupuesto Estimado:</strong> ${datos.presupuestoEstimado}
          </p>
          <p className="text-white text-2xl">
            <strong>Plazo de Entrega:</strong> {datos.plazoEntrega}
          </p>
          <p className="text-white text-2xl">
            <strong>Funcionalidades Requeridas:</strong> {datos.funcionalidades}
          </p>
          <p className="text-white text-2xl">
            <strong>Plataforma Preferida:</strong> {datos.plataformaPreferida}
          </p>
          <p className="text-white text-2xl">
            <strong>SEO y Marketing Digital:</strong> {datos.seoMarketing}
          </p>
          <p className="text-white text-2xl">
            <strong>Mantenimiento y Soporte:</strong> {datos.mantenimientoSoporte}
          </p>
          <p className="text-white text-2xl">
            <strong>Integraciones de Terceros:</strong> {datos.integracionesTerceros}
          </p>
          <p className="text-white text-2xl">
            <strong>Número de Páginas:</strong> {datos.numeroPaginas}
          </p>
          <p className="text-white text-2xl">
            <strong>Contenido Proporcionado:</strong> {datos.contenidoProporcionado}
          </p>
          <p className="text-white text-2xl">
            <strong>Fecha de Inicio Deseada:</strong> {datos.fechaInicioDeseada}
          </p>
          <p className="text-white text-2xl">
            <strong>Presupuesto Máximo:</strong> ${datos.presupuestoMaximo}
          </p>
          <p className="text-white text-2xl">
            <strong>Referencias de Sitios Web:</strong> {datos.referenciasWeb}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mb-6 text-center mx-auto">
        <p className="text-3xl font-bold text-white">Total Estimado: ${datos.presupuestoEstimado}</p>
      </div>
      <div className="flex flex-col text-2xl justify-center items-center">
        <p className="font-bold text-white">Información de Contacto</p>
        <p className="text-white">Teléfono: +54 11 24025510</p>
        <p className="text-white">Redes sociales: info@PixelarStudio.com</p>
        <p className="text-white">Dirección: Almirante Brown, Buenos Aires</p>
      </div>
    </div>
  );
});

export default PresupuestoGenerado;
 */

/* import React, { forwardRef } from "react";
import "../components/presugen.css";
import { MdAlternateEmail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa6";

const PresupuestoGenerado = forwardRef(({ datos }, ref) => {
  const fecha = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      ref={ref}
      className="xl:text-2xl xl:w-auto xl:h-auto xl:p-3 w-full h-auto mx-auto p-6 text-white shadow-lg backdrop-blur-xl bg py-4 mb-10 box-border"
    >
      <div className="text-center  ">
        <img
          src="/logops.png"
          alt="Logo"
          className="h-32 mt-12 p-1 w-auto mx-auto"
        />
      </div>
      <div className="text-center ">
        <h2 className="text-3xl text-center py-20 font-bold text-white">
          PRESUPUESTO WEB
        </h2>
      </div>
      <div className="text-left mb-16">
        <div className="max-w-6xl h-auto mx-auto  m-3 p-2 flex justify-between rounded-lg shadow-slate-900 ">
          <div className="w-full flex flex-row-reverse ">
            Buenos Aires, {fecha}
          </div>
        </div>

        <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-cyan-700 border-2 p-4 rounded-lg shadow-slate-900 shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl ">
          <p className="text-white">
            <b className="text-[#ffa500]">Cliente: </b>
            {datos.apellido} {datos.nombre}
          </p>
          <p className="text-white">
            <b className="text-[#ffa500]">Correo:</b> {datos.correo}
          </p>
          <p className="text-white text-2xl">
            <b className="text-[#ffa500]">Teléfono:</b> {datos.telefono}
          </p>
        </div>

        <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-cyan-700 border-2 p-4 flex-col flex-wrap flex overflow-hidden rounded-lg shadow-slate-900 shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-white text-2xl">
            <b className="text-[#ffa500]">Tipo de Servicio:</b>{" "}
            {datos.tipoServicio}
          </p>
        </div>

        <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-cyan-700 border-2  p-4 flex-col flex-wrap flex overflow-hidden rounded-lg shadow-slate-900 shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-white text-2xl">
            <b className="text-[#ffa500]">Descripción del Proyecto:</b>{" "}
            {datos.descripcionProyecto}
          </p>
        </div>

        <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-cyan-700 border-2 p-4 rounded-lg shadow-slate-900 shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <div className="text-white text-2xl">
            <b className="text-[#ffa500]">Funcionalidades: </b>
            {datos.funcionalidades}
          </div>
        </div>

        <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-cyan-700 border-2  p-4 rounded-lg shadow-slate-900 shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-white text-2xl">
            <b className="text-[#ffa500] text-2xl">Plazo de Entrega:</b>{" "}
            {datos.plazoEntrega}
          </p>
        </div>

        <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-cyan-700 border-2 p-4 rounded-lg shadow-slate-900 shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-white text-2xl">
            <b className="text-[#ffa500] text-2xl">Plataforma Preferida:</b>{" "}
            {datos.plataformaPreferida}
          </p>
        </div>

        <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-cyan-700 border-2 p-4 rounded-lg shadow-slate-900 shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-white text-2xl">
            <b className="text-[#ffa500] text-2xl">SEO y Marketing Digital:</b>{" "}
            {datos.seoMarketing}
          </p>
        </div>

        <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-cyan-700 border-2 p-4 rounded-lg shadow-slate-900 shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-white text-2xl">
            <b className="text-[#ffa500] text-2xl">Mantenimiento y Soporte:</b>{" "}
            {datos.mantenimientoSoporte}
          </p>
        </div>

        <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-cyan-700 border-2 p-4 rounded-lg shadow-slate-900 shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-white text-2xl">
            <b className="text-[#ffa500] text-2xl">
              Integraciones de Terceros:
            </b>{" "}
            {datos.integracionesTerceros}
          </p>
        </div>

        <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-cyan-700 border-2 p-4 rounded-lg shadow-slate-900 shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-white text-2xl">
            <b className="text-[#ffa500] text-2xl">Número de Páginas:</b>{" "}
            {datos.numeroPaginas}
          </p>
        </div>

        <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-cyan-700 border-2 p-4 rounded-lg shadow-slate-900 shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-white text-2xl">
            <b className="text-[#ffa500] text-2xl">Contenido Proporcionado:</b>{" "}
            {datos.contenidoProporcionado}
          </p>
        </div>
        <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-cyan-700 border-2 p-4 rounded-lg shadow-slate-900 shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-white text-2xl">
            <b className="text-[#ffa500] text-2xl">Entrega del 50% del Proyecto:</b>{" "}
            {datos.presupuestoMaximo}
          </p>
        </div>

        <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-cyan-700 border-2 p-4 rounded-lg shadow-slate-900 shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-white text-2xl">
            <b className="text-[#ffa500] text-2xl">Fecha de Inicio Deseada:</b>{" "}
            {datos.fechaInicioDeseada}
          </p>
        </div>

        <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-cyan-700 border-2 p-4 rounded-lg shadow-slate-900 shadow-lg backdrop-blur-xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-white text-2xl">
            <b className="text-[#ffa500] text-2xl">
              Referencias de Sitios Web:
            </b>{" "}
            {datos.referenciasWeb}
          </p>
        </div>
      </div>

      <div className="max-w-6xl h-auto mx-auto bg-gray-800 border-yellow-400 border-2 p-4 rounded-lg shadow-slate-900 shadow-4xl mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl ">
        <p className="text-2xl text-center font-bold  mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl p-3 text-[#ffa500]">
          Total:{" "}
          <strong className="text-white "> $ {datos.presupuestoEstimado}</strong>
        </p>
        <p className="text-[20px] text-center ">
          <em>
            El presente presupuesto sera valido por 48hs y quedará sujeto a
            modificaciones según sean necesarias.{" "}
          </em>{" "}
        </p>
      </div>

      <div className="w-full h-full flex flex-row gap-10 text-2xl justify-between items-center rounded-lg bg-[#273335] text-[#ffffff] py-3 mt-20">
        <div className="flex gap-3 m-3 px-3 flex-row justify-center place-content-center mx-auto">
          <FaWhatsapp className="FaWhatsapp" size={25} />
          <p className="text-xl px-6">+54 11 24025510</p>
        </div>
        <div className="flex gap-3 m-3 px-3 flex-row justify-center place-content-center mx-auto">
          {" "}
          <MdAlternateEmail className="MdAlternateEmail" size={25} />
          <p className="text-xl px-6">INFO@PIXELARSTUDIO.COM</p>
        </div>
        <div className="flex gap-3 m-3 px-3 flex-row justify-center place-content-center mx-auto">
          {" "}
          <TbWorldWww className="TbWorldWww" size={25} />
          <p className="text-xl px-6">WWW.PIXELARSTUDIO.COM</p>
        </div>
      </div>
    </div>
  );
});

export default PresupuestoGenerado;
 */

import React, { forwardRef } from "react";
import "../components/presugen.css";
import Footer from "./Footer";
const PresupuestoGenerado = forwardRef(({ datos }, ref) => {
  const fecha = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div ref={ref} className="w-full h-auto mx-auto p-6 text-white bg-gray-800 bg">

      <div class="text-center mb-8">
        <img src="/logops.png" alt="Logo" class="h-40 mt-12 p-1 w-auto mx-auto" />
      </div>
      <h2 className="text-5xl text-center py-14 font-bold text-white ">PRESUPUESTO WEB</h2>
      <div className="text-left mb-8 max-w-7xl place-content-center mx-auto">
        <div className="border-b-2 text-2xl border-cyan-700 pb-2">
        

          <div className="flex py-4 m-2 justify-between">
          <p className="text-2xl"><b className="text-orange-300 py-1 text-2xl">Nombre Proyecto:</b> {datos.nombreProyecto}</p>
            Buenos Aires, {fecha}
          </div>
        </div>
        <div className="border-2 border-cyan-700 p-4 rounded-lg mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p  className="text-2xl"><b className="text-orange-300 py-1 text-2xl">Cliente:</b> {datos.apellido} {datos.nombre}</p>
          <p  className="text-2xl"><b className="text-orange-300 py-1 text-2xl">Correo:</b> {datos.correo}</p>
          <p className="text-2xl"><b className="text-orange-300 py-1">Teléfono:</b> {datos.telefono}</p>
        </div>
        <div className="border-2 border-cyan-700 p-4 rounded-lg mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-2xl"><b className="text-orange-300 py-1">Tipo de Servicio:</b> {datos.tipoServicio}</p>
        </div>
        <div className="border-2 border-cyan-700 p-4 rounded-lg mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-2xl"><b className="text-orange-300 py-1">Descripción del Proyecto:</b> {datos.descripcionProyecto}</p>
        </div>
        <div className="border-2 border-cyan-700 p-4 rounded-lg mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-2xl"><b className="text-orange-300 py-1">Funcionalidades:</b> {datos.funcionalidades}</p>
        </div>
        <div className="border-2 border-cyan-700 p-4 rounded-lg mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-2xl"><b className="text-orange-300 py-1">Plazo de Entrega:</b> {datos.plazoEntrega}</p>
        </div>
        <div className="border-2 border-cyan-700 p-4 rounded-lg mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-2xl"><b className="text-orange-300 py-1">Plataforma Preferida:</b> {datos.plataformaPreferida}</p>
        </div>
        <div className="border-2 border-cyan-700 p-4 rounded-lg mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-2xl"><b className="text-orange-300 py-1">SEO y Marketing Digital:</b> {datos.seoMarketing}</p>
        </div>
        <div className="border-2 border-cyan-700 p-4 rounded-lg mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-2xl"><b className="text-orange-300 py-1">Mantenimiento y Soporte:</b> {datos.mantenimientoSoporte}</p>
        </div>
        <div className="border-2 border-cyan-700 p-4 rounded-lg mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-2xl"><b className="text-orange-300 py-1">Integraciones de Terceros:</b> {datos.integracionesTerceros}</p>
        </div>
        <div className="border-2 border-cyan-700 p-4 rounded-lg mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-2xl"><b className="text-orange-300 py-1">Número de Páginas:</b> {datos.numeroPaginas}</p>
        </div>
        <div className="border-2 border-cyan-700 p-4 rounded-lg mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-2xl"><b className="text-orange-300 py-1">Contenido Proporcionado:</b> {datos.contenidoProporcionado}</p>
        </div>
        <div className="border-2 border-cyan-700 p-4 rounded-lg mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-2xl"><b className="text-orange-300 py-1">Entrega del 50% de adelanto del Proyecto:</b> {datos.presupuestoMaximo}</p>
        </div>
        <div className="border-2 border-cyan-700 p-4 rounded-lg mt-5 shadow-slate-800 shadow-3xl backdrop-blur-xl">
          <p className="text-2xl"><b className="text-orange-300 py-1">Fecha de Inicio Deseada:</b> {datos.fechaInicioDeseada}</p>
        </div>
        <div className="border-2 border-cyan-700 p-4 rounded-lg mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl">
          <p className="text-2xl"><b className="text-orange-300 py-1 ">Referencias de Sitios Web:</b> {datos.referenciasWeb}</p>
        </div>
      </div>
      <div className="border-2 border-yellow-400 p-4 rounded-lg mt-5 shadow-slate-800 shadow-lg backdrop-blur-xl ">
        <p className="text-5xl py-8 text-center font-semibold text-orange-300 ">
          Total: <strong className="text-white font-semibold">$ {datos.presupuestoEstimado}</strong>
        </p>
        <p className="text-2xl text-center">
          <em>El presente presupuesto será válido por 48 horas y quedará sujeto a modificaciones según sean necesarias.</em>
      
        </p>
      </div>
      <Footer />
    </div>
  );
});

export default PresupuestoGenerado;
