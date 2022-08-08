import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const MenuMobileOpen = styled.nav`
  position: relative;
  top: 100px;
  left: 0;
  gap: 12px;

  width: 300px;
  background-color: #29abe2;
  color: #fff;

  @media screen and (min-width: 769px) {
    display: none;
  } ;
`;

export const Dropdown = styled.img`
  height: 20px;
  width: 20px;
  padding: 20px 0 0 20px;
  @media screen and (min-width: 769px) {
    display: none;
  } ;
`;

export const Logo = styled.img`
  height: 25px;
  @media screen and (max-width: 768px) {
    margin-right: 25px;
  }
`;

export const Menu = styled.nav`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
