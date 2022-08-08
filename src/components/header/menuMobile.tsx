import { useState } from "react";
import { MenuMobileOpen, Dropdown } from "./styles";
import openHamburger from "../../assets/icons/hamburguer-aberto0.svg";
import closedHamburger from "../../assets/icons/hamburguer.svg";

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(true);

  if (isOpen) {
    return (
      <MenuMobileOpen>
        <Dropdown src={openHamburger} alt="" onClick={() => setIsOpen(false)} />
        <p>lista</p>
        <br />
        <p>sobre mim</p>
        <br />
        <p>cadastro</p>
        <br />
      </MenuMobileOpen>
    );
  } else
    return (
      <Dropdown src={closedHamburger} alt="" onClick={() => setIsOpen(true)} />
    );
}
