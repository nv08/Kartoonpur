import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";
import { COLOR } from "../contants";
const NavbarComp = () => {
  const props = {
    items: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Characters",
        link: "characters",
      },
      {
        text: "Videos",
        link: "videos",
      },
      {
        text: "Merch",
        link: "merchandise",
      },
      {
        text: "Contact",
        link: "contact",
      },
    ],
    logo: {
      text: "",
    },
    style: {
      barStyles: {
        background: COLOR.BLUE,
        fontSize: "20px",
        boxShadow: "none",
        padding: "1.5rem",
        display: "flex",
      },
      linkStyles: {
        color: COLOR.WHITE,
        margin: "0 3rem",
      },
      sidebarStyles: {
        background: COLOR.BLUE,
        buttonColor: COLOR.YELLOW,
      },
    },
  };
  return <Navbar {...props} />;
};

export default NavbarComp;
