import React from "react";
import AppBarMuiBase from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: 1280,
  minHeight: "50px",
  margin: "0 auto",
  padding: "0rem 0rem"
});

const AppBarMui = styled(AppBarMuiBase)(({ theme }) => ({
  backgroundColor: "#aa0000",
  boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
  padding: "0.25em 1em",
  transitionDuration: "0.3s",
  transitionTimingFunction: "ease",
  transitionProperty: "background-color, box-shadow, backdrop-filter",
  backdropFilter: "blur(0px)",
  "&.scroll": {
    backdropFilter: "blur(5px)",
    //backgroundColor: alpha(lighten(theme.palette.primary.main, 0.97), 0.85),
    boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.15)"
  }
}));

const LogoText = styled("div")({
  marginRight: "auto",
  fontWeight: 800,
  fontSize: "1.4rem",
  color: "#FFF"
});

const Appbar = () => {
  let appbarElement = null;

  const refAppbar = (element) => {
    appbarElement = element;
    if (appbarElement !== null && appbarElement !== undefined) {
      let height = appbarElement.getBoundingClientRect().height ?? 0;
      document.body.style.paddingTop = height + "px";
    }
  };

  const theme = useTheme();

  return (
    <AppBarMui position="fixed" ref={refAppbar}>
      <Wrapper>
        <LogoText>UES</LogoText>
        {/*<Tabs value={0}>
          <Tab label="Objetivos" />
  </Tabs> */}
      </Wrapper>
    </AppBarMui>
  );
};

export default Appbar;
