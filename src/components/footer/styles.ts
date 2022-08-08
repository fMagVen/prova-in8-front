import styled from "styled-components";
import footer from "../../assets/images/rodape-desktop.jpg";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background-image: url(${footer});
  background-repeat: no-repeat;
  background-size: cover;
  p {
    color: #fff;
  }
`;
