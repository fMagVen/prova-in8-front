import useNewCandidate from "../../hooks/useNewCandidate";
import { Wrapper } from "./styles";

export default function Footer() {
  const { currentCandidate } = useNewCandidate();
  return (
    <Wrapper>
      <div>
        <p>{currentCandidate.name}</p>
        <br />
        <p>{currentCandidate.email}</p>
        <br />
        <p>{currentCandidate.birth}</p>
        <br />
        <p>{currentCandidate.phone}</p>
      </div>
    </Wrapper>
  );
}
