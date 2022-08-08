import styled from "styled-components";
import background from "../../assets/images/index-image.jpg";
import backgroundMobile from "../../assets/images/index-image-mobile.jpg";

export const Background = styled.div`
  height: 0;
  padding-top: 49%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  @media screen and (max-width: 425px) {
    background-image: url(${backgroundMobile});
    padding-top: 151.5%;
  }
`;

export const Title = styled.h1`
  font-family: "HelveticaUltraLightRegular";
  color: #fff;
  font-size: 180%;
  position: absolute;
  bottom: 40%;
  left: 30%;
  @media screen and (max-width: 425px) {
    top: 10%;
    left: 10%;
  }
`;
