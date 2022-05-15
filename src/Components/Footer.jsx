import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Footer = (props) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1.5rem",
        minWidth: "100%",
        margin: "0 auto",
        justifyContent: "center"
      }}
    >
      <Button
        href={props.previous}
        variant="contained"
        disabled={props.previous === "" && false}
        style={{
          backgroundColor: "#e32222",
          borderRadius: 48
        }}
        startIcon={<ArrowBackIosNewIcon />}
      >
        Anterior
      </Button>
      <Button
        variant="contained"
        href={props.next}
        style={{
          backgroundColor: "#e32222",
          borderRadius: 48
        }}
        endIcon={<ArrowForwardIosIcon />}
      >
        Siguiente
      </Button>
    </div>
  );
};
export default Footer;
