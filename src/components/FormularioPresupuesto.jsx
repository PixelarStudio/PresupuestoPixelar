/* // src/components/FormularioPresupuesto.jsx
import React, { useState } from 'react';
import servicios from '../data/servicios.json';

function FormularioPresupuesto({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    servicio: '',
    detalles: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded bg-black-lg">
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Nombre</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Apellido</label>
        <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Correo</label>
        <input type="email" name="correo" value={formData.correo} onChange={handleChange} className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Teléfono</label>
        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Servicio</label>
        <select name="servicio" value={formData.servicio} onChange={handleChange} className="w-full px-3 py-2 border rounded bg-black">
          <option value="">Seleccione un servicio</option>
          {servicios.map(servicio => (
            <option key={servicio.id} value={servicio.id}>{servicio.nombre} - ${servicio.precio}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Detalles</label>
        <textarea name="detalles" value={formData.detalles} onChange={handleChange} className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded bg-black">Crear Presupuesto</button>
    </form>
  );
}

export default FormularioPresupuesto;
 */

/* import React, { useState } from 'react';

function FormularioPresupuesto({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    tipoServicio: '',
    descripcionProyecto: '',
    presupuestoEstimado: '',
    plazoEntrega: '',
    funcionalidades: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded bg-black-lg">
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Nombre</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Apellido</label>
        <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Correo</label>
        <input type="email" name="correo" value={formData.correo} onChange={handleChange} className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Teléfono</label>
        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Tipo de Servicio</label>
        <input type="text" name="tipoServicio" value={formData.tipoServicio} onChange={handleChange} className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Descripción del Proyecto</label>
        <textarea name="descripcionProyecto" value={formData.descripcionProyecto} onChange={handleChange} className="w-full px-3 py-2 border rounded bg-black"></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Presupuesto Estimado</label>
        <input type="number" name="presupuestoEstimado" value={formData.presupuestoEstimado} onChange={handleChange} className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Plazo de Entrega</label>
        <input type="text" name="plazoEntrega" value={formData.plazoEntrega} onChange={handleChange} className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Funcionalidades Requeridas</label>
        <textarea name="funcionalidades" value={formData.funcionalidades} onChange={handleChange} className="w-full px-3 py-2 border rounded bg-black"></textarea>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded bg-black">Crear Presupuesto</button>
    </form>
  );
}

export default FormularioPresupuesto;
 */

/* import React, { useState } from 'react';

function FormularioPresupuesto({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    tipoServicio: '',
    descripcionProyecto: '',
    presupuestoEstimado: '',
    plazoEntrega: '',
    funcionalidades: '',
    plataformaPreferida: '',
    seoMarketing: '',
    mantenimientoSoporte: '',
    integracionesTerceros: '',
    numeroPaginas: '',
    contenidoProporcionado: '',
    fechaInicioDeseada: '',
    presupuestoMaximo: '',
    referenciasWeb: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full h-full p-6 bg-white shadow-md rounded bg-black-lg">
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Nombre</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ingrese su nombre"  className="w-full px-3 py-2 border rounded bg-black bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Apellido</label>
        <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} placeholder="Ingrese su apellido " className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Correo</label>
        <input type="email" name="correo" value={formData.correo} onChange={handleChange}  placeholder="Ingrese su correo Electrónico " className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Teléfono</label>
        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Ingrese su Teléfono " className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Tipo de Servicio</label>
        <input type="text" name="tipoServicio" value={formData.tipoServicio} onChange={handleChange} placeholder="Que tipo de servicio desea contratar. " className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Descripción del Proyecto</label>
        <textarea name="descripcionProyecto" value={formData.descripcionProyecto} onChange={handleChange} placeholder="Ingresar la descripcion breve del proyecto, que necesita, que te gustaria tener. Explicanos o danos ejemplos de otros sitios para que veamos." className="w-full px-3 py-2 border rounded bg-black"></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Precio del Servicio elegido</label>
        <input type="number" name="presupuestoEstimado" value={formData.presupuestoEstimado} onChange={handleChange} placeholder="Presupuesto del sitio en relacion a las funciones solicitadas" className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Plazo de Entrega</label>
        <input type="text" name="plazoEntrega" value={formData.plazoEntrega} onChange={handleChange} placeholder="Plazos estimados de entrega del proyecto final" className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Funcionalidades Requeridas</label>
        <textarea name="funcionalidades" value={formData.funcionalidades} onChange={handleChange} placeholder="En caso de querer funciones, cuales desea el cliente. " className="w-full px-3 py-2 border rounded bg-black"></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Plataforma Preferida</label>
        <input type="text" name="plataformaPreferida" value={formData.plataformaPreferida} onChange={handleChange} placeholder="Aqui debera expresar si desea el sitio con WordPress, Programacion a medida, o sitio simple con hmtl, css y javascript " className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">SEO y Marketing Digital</label>
        <input type="text" name="seoMarketing" value={formData.seoMarketing} onChange={handleChange} placeholder="Si el cliente lo desea, podra optar por los servicios de Marketing.  " className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Mantenimiento y Soporte</label>
        <input type="text" name="mantenimientoSoporte" value={formData.mantenimientoSoporte} onChange={handleChange} placeholder=" Ingresar si el cliente desea o no soporte y mantenimiento del sitio. " className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Integraciones de Terceros</label>
        <input type="text" name="integracionesTerceros" value={formData.integracionesTerceros} onChange={handleChange} placeholder="Integraciones o Plugins en el caso de WordPress, dado el caso poner cuales" className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Número de Páginas</label>
        <input type="number" name="numeroPaginas" value={formData.numeroPaginas} onChange={handleChange} placeholder="Cantidad de Secciones que desea el cliente.  " className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Contenido Proporcionado</label>
        <input type="text" name="contenidoProporcionado" value={formData.contenidoProporcionado} onChange={handleChange} placeholder="Ingrese si recibe docuemntacion, imagenes o textos relacionados con el proyecto" className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Fecha de Inicio Deseada</label>
        <input type="date" name="fechaInicioDeseada" value={formData.fechaInicioDeseada} onChange={handleChange} className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Entrega del 50% del Proyecto</label>
        <input type="number" name="presupuestoMaximo" value={formData.presupuestoMaximo} onChange={handleChange} placeholder="Ingresar el monto que dispone para abonar" className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Referencias de Sitios Web</label>
        <textarea name="referenciasWeb" value={formData.referenciasWeb} onChange={handleChange} placeholder="Ingrese Referencias de su agrado para su sitio " className="w-full px-3 py-2 border rounded bg-black"></textarea>
      </div>
      <button type="submit" className="mt-4 bg-slate-800 text-white py-2 px-4 rounded mx-auto w-full">Crear Presupuesto</button>
    </form>
  );
}

export default FormularioPresupuesto;
 */

import React, { useState } from 'react';

function FormularioPresupuesto({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    tipoServicio: '',
    descripcionProyecto: '',
    presupuestoEstimado: '',
    plazoEntrega: '',
    funcionalidades: '',
    plataformaPreferida: '',
    seoMarketing: '',
    mantenimientoSoporte: '',
    integracionesTerceros: '',
    numeroPaginas: '',
    contenidoProporcionado: '',
    fechaInicioDeseada: '',
    presupuestoMaximo: '',
    referenciasWeb: '',
    nombreProyecto: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-10/12 p-6 bg-slate-900 text-white shadow-md rounded-lg">
        <div className="mb-4">
        <label className="block text-white font-bold mb-2">Nombre Proyecto</label>
        <input type="text" name="nombreProyecto" value={formData.nombreProyecto} onChange={handleChange} placeholder="Ingrese del Proyecto" className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Nombre y apellido del cliente</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ingrese su nombre y apellido" className="w-full px-3 py-2 border rounded bg-black" />
      </div>

      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Correo</label>
        <input type="email" name="correo" value={formData.correo} onChange={handleChange} placeholder="Ingrese su correo Electrónico" className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Teléfono</label>
        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Ingrese su Teléfono" className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Tipo de Servicio</label>
        <input type="text" name="tipoServicio" value={formData.tipoServicio} onChange={handleChange} placeholder="Qué tipo de servicio desea contratar." className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Descripción del Proyecto</label>
        <textarea name="descripcionProyecto" value={formData.descripcionProyecto} onChange={handleChange} placeholder="Ingresar la descripción breve del proyecto, qué necesita, qué le gustaría tener. Explíquenos o dénos ejemplos de otros sitios para que veamos." className="w-full px-3 py-2 border rounded bg-black"></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Precio del Servicio Elegido</label>
        <input type="number" name="presupuestoEstimado" value={formData.presupuestoEstimado} onChange={handleChange} placeholder="Presupuesto del sitio en relación a las funciones solicitadas" className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Plazo de Entrega</label>
        <input type="text" name="plazoEntrega" value={formData.plazoEntrega} onChange={handleChange} placeholder="Plazos estimados de entrega del proyecto final" className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Funcionalidades Requeridas</label>
        <textarea name="funcionalidades" value={formData.funcionalidades} onChange={handleChange} placeholder="En caso de querer funciones, cuáles desea el cliente." className="w-full px-3 py-2 border rounded bg-black"></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Plataforma Preferida</label>
        <input type="text" name="plataformaPreferida" value={formData.plataformaPreferida} onChange={handleChange} placeholder="Aquí deberá expresar si desea el sitio con WordPress, programación a medida, o sitio simple con HTML, CSS y JavaScript." className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">SEO y Marketing Digital</label>
        <input type="text" name="seoMarketing" value={formData.seoMarketing} onChange={handleChange} placeholder="Si el cliente lo desea, podrá optar por los servicios de Marketing." className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Mantenimiento y Soporte</label>
        <input type="text" name="mantenimientoSoporte" value={formData.mantenimientoSoporte} onChange={handleChange} placeholder="Ingresar si el cliente desea o no soporte y mantenimiento del sitio." className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Integraciones de Terceros</label>
        <input type="text" name="integracionesTerceros" value={formData.integracionesTerceros} onChange={handleChange} placeholder="Integraciones o plugins en el caso de WordPress, dado el caso poner cuáles." className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Número de Páginas</label>
        <input type="number" name="numeroPaginas" value={formData.numeroPaginas} onChange={handleChange} placeholder="Cantidad de secciones que desea el cliente." className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Contenido Proporcionado</label>
        <input type="text" name="contenidoProporcionado" value={formData.contenidoProporcionado} onChange={handleChange} placeholder="Ingrese si recibe documentación, imágenes o textos relacionados con el proyecto." className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Fecha de Inicio Deseada</label>
        <input type="date" name="fechaInicioDeseada" value={formData.fechaInicioDeseada} onChange={handleChange} className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Entrega del 50% del Proyecto</label>
        <input type="number" name="presupuestoMaximo" value={formData.presupuestoMaximo} onChange={handleChange} placeholder="Ingresar el monto que dispone para abonar." className="w-full px-3 py-2 border rounded bg-black" />
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2">Referencias de Sitios Web</label>
        <textarea name="referenciasWeb" value={formData.referenciasWeb} onChange={handleChange} placeholder="Ingrese referencias de su agrado para su sitio." className="w-full px-3 py-2 border rounded bg-black"></textarea>
      </div>
      <button type="submit" className="mt-4 bg-slate-600 text-white py-2 px-4 rounded w-full">Crear Presupuesto</button>
    </form>
  );
}

export default FormularioPresupuesto;
