import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  th {
    font-family: "RobotoRegular";
    color: #012d51;
    border-right: 1px solid #29abe2;
    border-bottom: 1px solid #29abe2;
    border-left: 1px solid #29abe2;
  }
  tr {
    border: 1px solid #29abe2;
  }
`;

export const Title = styled.h2`
  font-family: "HelveticaUltraLightRegular";
  font-size: 30px;
  color: #29abe2;
`;
