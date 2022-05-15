import React from "react";
import { Slide } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import "../styles.css";
import Footer from "./Footer";
const objetivos = () => {
  const objetivos = [
    {
      id: 0,
      title:
        "Aprender más acerca de los sistemas de información geográfica mediante su aplicación."
    },
    {
      id: 1,
      title:
        "Conocer las capacidades del software SPRING GIS y del servidor de mapas GeoServer"
    },
    {
      id: 2,
      title:
        "Crear un GIS útil basado en mapas que den una alternativa a los usuarios para obtener la información que necesitan."
    },
    {
      id: 3,
      title: "Especificar el funcionamiento y utilización de SPRING GIS."
    },
    {
      id: 4,
      title:
        "Utilizar el SGBD postgreSQL en conjunto con SPRING SQL para guardar la información de cada entidad geográfica."
    }
  ];

  return (
    <Slide in={true} direction="left">
      <div>
        <h1>Objetivos</h1>
        <div className="rootObjetivos">
          <h3>Objetivos general</h3>
          <div className="containerObjetivos">
            <div style={{ display: "flex", gap: "20px" }}>
              <p>
                Aplicar todos los conocimientos aprendidos en la realización del
                proyecto, destacando sus puntos principales, características y
                utilidades sobre los sistemas de información geográficos en un
                entorno real, como lo es la sociedad actual , empleando las
                tecnologías asignadas, sacándole el mayor provecho para que el
                GIS que desarrollemos pueda ayudar a las personas para poder
                encontrar clínicas y centros ginecológicos cercanos a ellos
                brindándoles la información que necesitan.
              </p>
            </div>
          </div>
          <h3>Objetivos especificos</h3>
          {objetivos.map((item) => {
            return (
              <div key={item.id}>
                <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon style={{ fontSize: "10px" }} />
                    </ListItemIcon>
                    <ListItemText
                      id="switch-list-label-wifi"
                      primary={item.title}
                    />
                  </ListItem>
                </List>
              </div>
            );
          })}
        </div>

        <Footer previous="/" next="/alcances" />
      </div>
    </Slide>
  );
};

export default objetivos;
