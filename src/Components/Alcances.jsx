import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import { Slide } from "@mui/material";
import Footer from "./Footer";

const Alcances = () => {
  const ListAlcances = [
    "La investigación realizada es sobre el software SPRING GIS.",
    "El GIS a implementar se desarrollará en SPRING GIS y en el servidor de mapas Geoserver.",
    "La presentación del proyecto se realizará según lo indicado en la materia Sistemas de Información Geográficos(SGG115).",
    "La información recolectada será sobre fuentes de internet.",
    "El proyecto hará uso de dos capas raster, tres capas de polígonos, dos capas de línea y una de puntos. "
  ];

  const ListLimitaciones = [
    "La investigación no se extenderá a otros software que no sean SPRING GIS.",
    "La poca documentación que existe sobre SPRING GIS.",
    "La poca capacidad del software asignado comparado con otras opciones como QGIS, ArcGIS o gvSIG."
  ];

  return (
    <Slide in={true} direction="left">
      <div>
        <h1>Alcances y limitaciones</h1>
        <h3>Limitaciones</h3>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {ListAlcances.map((value, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CircleIcon style={{ fontSize: "10px" }} />
              </ListItemIcon>
              <ListItemText id="switch-list-label-wifi" primary={value} />
            </ListItem>
          ))}
        </List>
        <h3>Limitaciones</h3>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {ListLimitaciones.map((value, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CircleIcon style={{ fontSize: "10px" }} />
              </ListItemIcon>
              <ListItemText id="switch-list-label-wifi" primary={value} />
            </ListItem>
          ))}
        </List>
        <Footer previous="/" next="/soft" />
      </div>
    </Slide>
  );
};

export default Alcances;
