import useNewCandidate from "../../hooks/useNewCandidate";
import { Wrapper } from "./styles";

export default function Footer() {
  const { currentCandidate } = useNewCandidate();
  return (
    <Wrapper>
      <div>{currentCandidate.name}</div>
      <div>{currentCandidate.email}</div>
      <div>{currentCandidate.birth}</div>
      <div>{currentCandidate.phone}</div>
    </Wrapper>
  );
}
