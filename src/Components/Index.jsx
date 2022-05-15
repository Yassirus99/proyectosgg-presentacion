import Zoom from "@mui/material/Zoom";
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
    "Inicio de la presentación",
    "Se proyectará la presentación que se elaboró y se mencionara quienes son los integrantes del grupo",
    "1 min"
  ),
  createData(
    "Explicación de la presentación",
    "Se explicará en base a lo que contiene la presentación ",
    "10 min"
  ),
  createData(
    "Videos de instalación ",
    "Se mostrará como se instala el software que se necesita para poder desarrollar el GIS",
    "8 min"
  ),
  createData(
    "Se presentará la solución desarrollada en el GIS versión de escritorio",
    "Se presentará la implementación del GIS desarrollado en SPRING GIS",
    "11 min"
  ),
  createData(
    "Se presentará la solución desarrollada en el GIS en la versión WEB",
    "Se presentará la implementación del GIS desarrollado en GeoServer",
    "10 min"
  )
];
const Index = () => {
  return (
    <Zoom in={true}>
      <div>
        <div className="containerIndex">
          <h1 id="title">
            Utilización de SPRING GIS para implementar el GIS sobre Centros
            Ginecológicos
          </h1>
          <h2>Presentación del GIS desarrollado en SPRING GIS</h2>
          <p style={{ textAlign: "left" }}>Elementos de la agenda:</p>
          <br />
          <br />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell align="center">Descripción</TableCell>
                  <TableCell align="center">Tiempo</TableCell>
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
        <Footer previous="" next="/objetivos" />
      </div>
    </Zoom>
  );
};

export default Index;
