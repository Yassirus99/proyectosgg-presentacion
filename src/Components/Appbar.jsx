import React from "react";
import AppBarMuiBase from "@mui/material/AppBar";
import LunchDiningRounded from "@mui/icons-material/LunchDiningRounded";
import { alpha, IconButton, lighten, styled, useTheme } from "@mui/material";
import logoAssets from "./../../assets/img/logos/logox100.webp";

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

const MenuButton = styled(IconButton)({
  marginRight: 8,
  width: 55,
  height: 55,
  padding: 0,
  "& > svg": {
    width: 35,
    height: 35
  },
  "& > img": {
    width: "auto",
    height: "35px !important",
    margin: 0
  }
});

const AppBarMui = styled(AppBarMuiBase)(({ theme }) => ({
  backgroundColor: alpha(lighten(theme.palette.primary.main, 0.97), 0),
  boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
  padding: "0.25em 1em",
  transitionDuration: "0.3s",
  transitionTimingFunction: "ease",
  transitionProperty: "background-color, box-shadow, backdrop-filter",
  backdropFilter: "blur(0px)",
  "&.scroll": {
    backdropFilter: "blur(5px)",
    backgroundColor: alpha(lighten(theme.palette.primary.main, 0.97), 0.85),
    boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.15)"
  }
}));

const Logo = styled("img")({
  height: 40,
  marginRight: "1rem"
});

const LogoText = styled("div")({
  marginRight: "auto",
  fontWeight: 800,
  fontSize: "1.4rem",
  color: "#525252"
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

  React.useEffect(() => {
    const onScroll = () => {
      if (appbarElement !== null) {
        let height = appbarElement.getBoundingClientRect().height ?? 0;
        if (window.pageYOffset > height * 0.5) {
          appbarElement.classList.add("scroll");
        } else {
          appbarElement.classList.remove("scroll");
          let percent =
            Math.round((window.pageYOffset * 100) / (height * 0.5)) / 100;
          percent = percent > 1 ? 1 : percent;
          appbarElement.style.backgroundColor = alpha(
            lighten(theme.palette.primary.main, 0.97),
            percent * 0.85
          );
          appbarElement.style.boxShadow = `0px ${
            Math.round(percent * 4 * 10) / 10
          }px ${Math.round(percent * 7 * 10) / 10}px rgba(0, 0, 0, ${
            percent * 0.15
          }`;
        }
      }
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AppBarMui ref={refAppbar}>
      <Wrapper>
        <MenuButton edge="start" color="primary">
          <Logo src={logoAssets} alt="logo" />
        </MenuButton>
        <LogoText>The Bíg Burger</LogoText>
      </Wrapper>
    </AppBarMui>
  );
};

export default Appbar;
