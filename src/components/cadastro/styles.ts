import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 30px;
  background-color: #29abe2;
  h2 {
    font-family: "HelveticaUltraLightRegular";
    color: #fff;
    font-size: 40px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Form = styled.form`
  width: 500px;
  label {
    font-family: "RobotoRegular";
    color: #fff;
  }
  input {
    all: unset;
    border-bottom: 1px solid white;
    margin-bottom: 15px;
  }
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #012d51;
  color: #29abe2;
  font-family: "HelveticaUltraLightRegular";
  font-size: 25px;
  width: 300px;
  height: 50px;
  margin: 50px 0 50px 0;
`;
