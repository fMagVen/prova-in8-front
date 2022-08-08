import { HeaderWrapper, Logo, Menu } from "./styles";
import { MenuMobile } from "./menuMobile";
import logo from "../../assets/images/logos/logo-in8-dev.svg";

export default function Header() {
  return (
    <HeaderWrapper>
      <MenuMobile />
      <Logo src={logo} />
      <Menu>cadastro . lista . sobre mim</Menu>
    </HeaderWrapper>
  );
}
