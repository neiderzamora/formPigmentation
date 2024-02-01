// excelHandler.ts
import * as ExcelJS from 'exceljs';

interface Datos {
  fullname: string;
  email: string;
  whatsappNumber: string;
  documentNumber: string;
  occupation: string;
  termsConditions: string;
  privacity: string;
}

async function agregarDatosAExcel(datos: Datos): Promise<void> {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Datos');

  // Leer datos existentes si el archivo ya existe
  try {
    await workbook.xlsx.readFile('datos.xlsx');
  } catch (error) {
    // El archivo no existe, lo crearemos
  }

  // Agregar nuevos datos
  sheet.addRow(Object.values(datos));

  // Guardar el archivo
  await workbook.xlsx.writeFile('datos.xlsx');
}

export { agregarDatosAExcel };
