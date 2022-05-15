import { Slide } from "@mui/material";
import Footer from "./Footer";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "IMPIMA",
    "Lectura de imágenes",
    "Permite transformar imágenes de tipo .spg"
  ),
  createData(
    "SPRING",
    "Módulo principal para entrada y manipulación de datos",
    "Permite el procesamiento de imágenes, análisis geográfica, consulta de banco de datos, Modelado digital de terreno e importadores y exportadores de datos"
  ),
  createData(
    "SCARTA",
    "Generación de cartas",
    "Generación interactiva de cartas, biblioteca de símbolos cartográficos, generación de leyendas y textos"
  ),
  createData(
    "IPLOT",
    "Impresión de archivos IPL",
    "Permite abrir un archivo IPL generado por scarta e imprime en un driver ya instalado o en un archivo PostScript"
  )
];

const Tercera = () => {
  return (
    <Slide in={true} direction="left">
      <div>
        <h1>Software Asignado </h1>
        <div className="containerSoftwareAsignado">
          <p>
            SPRING es un GIS (Sistema de Información Geográfica) y al mismo
            tiempo un sistema de tratamiento de imágenes obtenidas mediante
            percepción remota que realiza la integración de las representaciones
            de datos matriciales ("estructura raster") y datos con estructura
            vectorial en un único ambiente. SPRING es un producto desarrollado
            por el Instituto Nacional de Investigaciones Espaciales (INPE)/ DPI
            de Brasil
          </p>
          <br />
          <br />
          <br />
          <br />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>MÓDULO</TableCell>
                  <TableCell align="center">PROPÓSITO</TableCell>
                  <TableCell align="center">FUNCIONALIDAD</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.calories}</TableCell>
                    <TableCell align="left">{row.fat}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <br />
          <br />
          <br />
        </div>
        <Footer previous="/alcances" next="/capsoftware"></Footer>
      </div>
    </Slide>
  );
};

export default Tercera;
