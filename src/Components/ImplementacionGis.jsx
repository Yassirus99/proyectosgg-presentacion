import { Slide } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import Footer from "./Footer";

const ImplementacionGis = () => {
  const ListObEspe = [
    "Brindar información relevante y servicios ofrecidos en cada centro ginecológico.",
    "Definir rutas para facilitar el desplazamiento del usuario, a partir de puntos de referencia específicos."
  ];

  const ListAlcance = [
    "El SIG contempla los centros y clínicas ginecológicas públicos y privados que se encuentran dentro del departamento de San Salvador en base a la recopilación de datos obtenidos desde distintas fuentes de internet y personas allegadas a estos centros de la salud.",
    "El SIG pretende generar diversas opciones para que los usuarios puedan encontrar centros y clínicas ginecológicas, proporcionando la información necesaria para que en dado caso se interesen por un lugar en específico ellos puedan contactarse con el centro o clínica ginecológico."
  ];

  const ListLimitaciones = [
    "Spring GIS presenta muchos problemas de congelamiento y de cierres inesperados al intentar cargar los planos de información ",
    "La poca información que se encuentra sobre los centros y clínicas ginecológicas",
    "La mayoría de centros ginecológicos se encuentran en el municipio de San Salvador, por lo que casi no hay opciones o ninguna para los usuarios que sean de otros municipios"
  ];

  return (
    <Slide in={true} direction="left">
      <div>
        <h1>Implementación del GIS de los Centros Ginecológicos.</h1>
        <div style={{ display: "block" }}>
          <h3>Objetivo general: </h3>
          <p>
            Identificar centros ginecológicos públicos y privados mediante la
            aplicación de un sistema de información geográfico.
          </p>
        </div>
        <div style={{ display: "block" }}>
          <h3>Objetivos específicos: </h3>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {ListObEspe.map((value, index) => (
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
          <h3>Objetivos específicos: </h3>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {ListAlcance.map((value, index) => (
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
          <h3>Objetivos específicos: </h3>
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
        </div>
        <div style={{ display: "block" }}>
          <h3>Descripción: </h3>
          <p>
            El sistema consistirá en marcar y reconocer los centros
            ginecológicos que se encuentran dentro del área de San Salvador.
            Mostrando información relevante de cada centro como nombre,
            contacto, y dirección. De igual manera, definir una ruta desde un
            punto de referencia conocido como centros comerciales, etc. hacia el
            centro ginecológico para facilitar la ubicación al usuario.
          </p>
        </div>
        <Footer previous="/soft" next="/compatibilidad" />
      </div>
    </Slide>
  );
};

export default ImplementacionGis;
