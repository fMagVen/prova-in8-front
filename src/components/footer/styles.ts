import styled from "styled-components";
import footer from "../../assets/images/rodape-desktop.jpg";
import footerMobile from "../../assets/images/rodape-mobile.jpg";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background-image: url(${footer});
  background-repeat: no-repeat;
  background-size: cover;
  div {
    color: #fff;
    font-family: "RobotoLight";
    gap: 20px;
    @media screen and (max-width: 600px) {
      position: absolute;
      top: 10%;
      left: 50%;
      gap: 10px;
    }
  }
  @media screen and (max-width: 600px) {
    background-image: url(${footerMobile});
    background-size: contain;
    padding-top: 70%;
    position: relative;
  }
`;
