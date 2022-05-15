import { Slide } from "@mui/material";
import Footer from "./Footer";

const Compatibilidad = () => {
  return (
    <Slide in={true} direction="left">
      <div>
        <h1>Compatibilidad con otros softwares</h1>
        <div className="containerCompatibilidad">
          <p>
            SPRING GIS es la evolución del Sistema Interactivo de Tratamiento de
            Imágenes(SITIM) y del Sistema Geográfico de Informaciones(SGI),
            desarrollados para microcomputadoras. El SPRING permite a los
            usuarios del SITIM y SGI una transición natural de todos los
            archivos de datos.
          </p>
        </div>
        <Footer previous="/capsoftware" next="/masurgente" />
      </div>
    </Slide>
  );
};
export default Compatibilidad;
