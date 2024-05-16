/* // src/components/PresupuestoPage.jsx
import React, { useState, useRef } from 'react';
import FormularioPresupuesto from './FormularioPresupuesto';
import PresupuestoGenerado from './PresupuestoGenerado';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PresupuestoPage = () => {
  const [datos, setDatos] = useState(null);
  const componentRef = useRef();

  const handleFormSubmit = (formData) => {
    setDatos(formData);
  };

  const handlePrint = async () => {
    const input = componentRef.current;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4', 'legal', 'letter');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save("PresupuestoPixelar.pdf");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="xl:text7xl text-3xl font-bold mb-6 text-center">Generar Presupuesto - Pixelar Studio</h1>
      {datos ? (
        <div>
          <div ref={componentRef}>
            <PresupuestoGenerado datos={datos} />
          </div>
          <button onClick={handlePrint} className="mt-4 bg-slate-800 text-white hover:bg-slate-600 hover:text-yellow-400 py-2 px-4 rounded text-center align-middle place-content-center flex justify-center">
            Descargar PDF
          </button>
        </div>
      ) : (
        <FormularioPresupuesto onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default PresupuestoPage; */

/* import React, { useState, useRef } from 'react';
import FormularioPresupuesto from './FormularioPresupuesto';
import PresupuestoGenerado from './PresupuestoGenerado';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PresupuestoPage = () => {
  const [datos, setDatos] = useState(null);
  const componentRef = useRef();

  const handleFormSubmit = (formData) => {
    setDatos(formData);
  };

  const handlePrint = async () => {
    const input = componentRef.current;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('presupuesto.pdf');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Generar Presupuesto - Pixelar Studio</h1>
      {datos ? (
        <div>
          <div ref={componentRef}>
            <PresupuestoGenerado datos={datos} />
          </div>
          <button onClick={handlePrint} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Imprimir o Descargar PDF
          </button>
        </div>
      ) : (
        <FormularioPresupuesto onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default PresupuestoPage; */

/* 
import React, { useState, useRef } from 'react';
import FormularioPresupuesto from './FormularioPresupuesto';
import PresupuestoGenerado from './PresupuestoGenerado';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PresupuestoPage = () => {
  const [datos, setDatos] = useState(null);
  const componentRef = useRef();

  const handleFormSubmit = (formData) => {
    setDatos(formData);
  };

  const handlePrint = async () => {
    const input = componentRef.current;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('presupuesto.pdf');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Generar Presupuesto - Pixelar Studio</h1>
      {datos ? (
        <div>
          <div ref={componentRef}>
            <PresupuestoGenerado datos={datos} />
          </div>
          <button onClick={handlePrint} className="mt-4 bg-slate-800 text-white py-2 px-4 rounded">
            Imprimir o Descargar PDF
          </button>
        </div>
      ) : (
        <FormularioPresupuesto onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default PresupuestoPage; */

/* import React, { useState, useRef } from 'react';
import FormularioPresupuesto from './FormularioPresupuesto';
import PresupuestoGenerado from './PresupuestoGenerado';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PresupuestoPage = () => {
  const [datos, setDatos] = useState(null);
  const componentRef = useRef();

  const handleFormSubmit = (formData) => {
    setDatos(formData);
  };

  const handlePrint = async () => {
    const input = componentRef.current;
    const canvas = await html2canvas(input, { scale: 3 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const scaleFactor = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth * scaleFactor, imgHeight * scaleFactor);
    pdf.save('presupuesto.pdf');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Generar Presupuesto - Pixelar Studio</h1>
      {datos ? (
        <div>
          <div ref={componentRef}>
            <PresupuestoGenerado datos={datos} />
          </div>
          <button onClick={handlePrint} className="mt-4 bg-slate-800 text-white py-2 px-4 rounded">
            Imprimir o Descargar PDF
          </button>
        </div>
      ) : (
        <FormularioPresupuesto onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default PresupuestoPage;
 */

/* import React, { useState, useRef } from 'react';
import FormularioPresupuesto from './FormularioPresupuesto';
import PresupuestoGenerado from './PresupuestoGenerado';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PresupuestoPage = () => {
  const [datos, setDatos] = useState(null);
  const componentRef = useRef();

  const handleFormSubmit = (formData) => {
    setDatos(formData);
  };

  const handlePrint = async () => {
    const input = componentRef.current;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', "a4", "legal", "letter", "landscape", "portrait", "tabloid", "ledger", "a0", "a1", "a2", "a3", "a5", "a6", "a7", "a8", "a9", "a10", "b0", "b1", "b2", "b3", "b4", "b5", "arch-a", "arch-b", "arch-c", "arch-d", "arch-e", "flsa", "half-letter", "11x17", "17x11");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const width = imgWidth * ratio;
    const height = imgHeight * ratio;
    pdf.addImage(imgData, 'PNG', 0, 0, width, height);
    pdf.save('presupuesto.pdf');
  };

  return (
    <div className="container mx-auto p-6 bg-[#363946] flex flex-col justify-center items-center">
      <div className='w-full h-full flex flex-row gap-4 place-content-center relative mb-20'>
        
         <button onClick={handlePrint} className="mt-20 bg-slate-800 text-white hover:bg-slate-400 hover:text-orange py-2 px-4 rounded flex flex-wrap absolute border-8 border-gray-300">
           Descargar PDF
          </button> 
          
          <h1 className="text-3xl font-bold text-center mb-6 text-white">Generación de Presupuestos - Pixelar Studio</h1>
          
          </div>
        
    
      {datos ? (
        <div>
          <div ref={componentRef} className="w-full h-full">
            <PresupuestoGenerado datos={datos} />
          </div>
          <button onClick={handlePrint} className="mt-4 bg-slate-800 text-white py-2 px-4 rounded">
           Descargar PDF
          </button>
        </div>
      ) : (
        <FormularioPresupuesto onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default PresupuestoPage;
 */

/* import React, { useState, useRef } from 'react';
import FormularioPresupuesto from './FormularioPresupuesto';
import PresupuestoGenerado from './PresupuestoGenerado';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PresupuestoPage = () => {
  const [datos, setDatos] = useState(null);
  const componentRef = useRef();

  const handleFormSubmit = (formData) => {
    setDatos(formData);
  };

  const handlePrint = async () => {
    const input = componentRef.current;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const width = imgWidth * ratio;
    const height = imgHeight * ratio;
    pdf.addImage(imgData, 'PNG', 0, 0, width, height);
    pdf.save('presupuesto.pdf');
  };

  return (
    <div className="container mx-auto p-6 bg-gray-800 flex flex-col justify-center items-center text-white">
      <div className='w-full flex flex-col items-center relative mb-20'>
        <h1 className="text-3xl font-bold text-center mb-6">Generación de Presupuestos - Pixelar Studio</h1>
        <button onClick={handlePrint} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400">
          Descargar PDF
        </button>
      </div>

      {datos ? (
        <div className="w-full">
          <div ref={componentRef} className="w-full">
            <PresupuestoGenerado datos={datos} />
          </div>
          <button onClick={handlePrint} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400">
            Descargar PDF
          </button>
        </div>
      ) : (
        <FormularioPresupuesto onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default PresupuestoPage;
 */

import React, { useState, useRef } from 'react';
import FormularioPresupuesto from './FormularioPresupuesto';
import PresupuestoGenerado from './PresupuestoGenerado';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PresupuestoPage = () => {
  const [datos, setDatos] = useState(null);
  const componentRef = useRef();

  const imgLogo = "../public/logops.png";

  const handleFormSubmit = (formData) => {
    setDatos(formData);
  };

  const handlePrint = async () => {
    const input = componentRef.current;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const width = imgWidth * ratio;
    const height = imgHeight * ratio;
    pdf.addImage(imgData, 'PNG', 0, 0, width, height);
    pdf.save('presupuesto.pdf');
  };

  return (
    <div className="container mx-auto p-6 bg-gray-800 flex flex-col justify-center items-center text-white ">
      <div className='w-full flex flex-col items-center relative mb-20'>
     
     
        <h1 className="text-3xl font-bold text-center mb-6">Generación de Presupuestos - Pixelar Studio</h1>
        <h3 className="text-xl font-light text-center mb-6">Pagina para generacion de Presupuestos Web</h3>
     
      </div>

      {datos ? (
        <div className="w-full">
          <div ref={componentRef} className="w-full">
            <PresupuestoGenerado datos={datos} />
          </div>
          <button onClick={handlePrint} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400">
            Descargar PDF
          </button>
        </div>
      ) : (
        <FormularioPresupuesto onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default PresupuestoPage;
