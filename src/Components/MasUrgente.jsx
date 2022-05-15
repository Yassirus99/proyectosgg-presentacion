import { Slide } from "@mui/material";
import Footer from "./Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const MasUrgente = () => {
  return (
    <Slide in={true} direction="left">
      <div>
        <h1>Capas </h1>
        <br />
        <br />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem"
          }}
        >
          <Card sx={{ maxWidth: 500 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 40 }}
                color="text.primary"
                gutterBottom
              >
                Capas de tipo ráster:
              </Typography>

              <Typography variant="body2">
                En forma de mapas base (ortofotografía): Soyapango, Apopa, San
                Salvador, Aguilares y Mexicanos
              </Typography>
              <br />
              <Typography variant="body2">
                Una capa de relieve de todo El Salvador
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 500 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 40 }}
                color="text.primary"
                gutterBottom
              >
                Capas de polígono:
              </Typography>

              <Typography variant="body2">
                Capa de departamentos: Se muestran todos los departamentos de El
                Salvador.
              </Typography>
              <br />
              <Typography variant="body2">
                Capa de municipios: Se muestran todos los municipios de San
                Salvador.
              </Typography>
              <br />
              <Typography variant="body2">
                Capa de concentraciones: Es un grupo de centros ginecológicos
                que se encuentran cerca.
              </Typography>
              <br />
              <Typography variant="body2">
                Capa de los lugares de referencia: Para ubicar especialmente los
                puntos de referencia cercanos a los centros ginecológicos
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 500 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 40 }}
                color="text.primary"
                gutterBottom
              >
                Capas de líneas:
              </Typography>

              <Typography variant="body2">
                Ruta desde un punto de referencia conocido.
              </Typography>
              <br />
              <Typography variant="body2">
                Vías de acceso a los centros ginecológicos.
              </Typography>
              <br />
              <Typography variant="body2">Calles de San Salvador</Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 500 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 40 }}
                color="text.primary"
                gutterBottom
              >
                Capas de puntos:
              </Typography>

              <Typography variant="body2">Centros ginecológicos.</Typography>
              <br />
              <Typography variant="body2">Puntos de referencia</Typography>
            </CardContent>
          </Card>
        </div>

        <br />
        <br />
        <br />

        <Footer previous="/compatibilidad" next="/" />
      </div>
    </Slide>
  );
};
export default MasUrgente;
