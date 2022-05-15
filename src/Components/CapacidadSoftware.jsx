import { Slide } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import Footer from "./Footer";

const CapacidadSoftware = () => {
  const ListElemets = [
    "Un IBM-PC, con CPU de una velocidad de 500 megaciclos, o superior, compatible con mínimo de 512 MB de RAM.",
    "600 MB en el disco duro para la instalación de SPRING y 250MB para ejemplos",
    "Sistema operativo Windows 95/98/NT/2000/XP/Vista/7/8/10."
  ];

  const ListElemetsLinux = [
    "Mínimo de 512 MB de memoria RAM",
    "600 MB en el disco duro para la instalación de SPRING y 250 MB para ejemplos",
    "Sistemas Operativos: Linux Ubuntu 11, 12 o 14"
  ];

  const ListElemetsSpring = [
    "Procesamiento de imágenes",
    "Análisis geográfico",
    "Modelo digital del terreno",
    "Consulta a Bases de Datos Relacionales (Mapas de Objetos)",
    "Edición de Mapas",
    "Importación de múltiples tipos de archivos"
  ];

  return (
    <Slide in={true} direction="left">
      <div>
        <h1>Capacidades y Características de Software</h1>
        <div style={{ display: "block" }}>
          <p>
            <strong>SPRING</strong> puede ser ejecutado en el sistema operativo
            <strong>Windows</strong> y <strong>Linux</strong>. Los requisitos
            para el ambiente de microcomputadoras son los siguientes:
          </p>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {ListElemets.map((value, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CircleIcon style={{ fontSize: "10px" }} />
                </ListItemIcon>
                <ListItemText id="switch-list-label-wifi" primary={value} />
              </ListItem>
            ))}
          </List>
        </div>
        <div style={{ display: "block" }}>
          <p>
            Los requisitos para el ambiente <strong>Linux</strong> son:
          </p>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {ListElemetsLinux.map((value, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CircleIcon style={{ fontSize: "10px" }} />
                </ListItemIcon>
                <ListItemText id="switch-list-label-wifi" primary={value} />
              </ListItem>
            ))}
          </List>
        </div>
        <div style={{ display: "block" }}>
          <p>
            <strong>SPRING GIS</strong> es capaz de realizar las siguientes
            funciones:
          </p>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {ListElemetsSpring.map((value, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CircleIcon style={{ fontSize: "10px" }} />
                </ListItemIcon>
                <ListItemText id="switch-list-label-wifi" primary={value} />
              </ListItem>
            ))}
          </List>
        </div>
        <Footer previous="/soft" next="/compatibilidad" />
      </div>
    </Slide>
  );
};

export default CapacidadSoftware;
