import { useEffect, useState } from "react";
import useNewCandidate from "../../hooks/useNewCandidate";
import { getCandidates } from "../../services/candidateApi";
import { Title, Wrapper } from "./styles";
import { candidateData } from "../../services/api/index";

export default function Lista() {
  const { newCandidate } = useNewCandidate();
  const [candidates, setCandidates] = useState<candidateData[]>([]);
  console.log(candidates);

  useEffect(() => {
    fetchData();
  }, [newCandidate]);

  async function fetchData() {
    try {
      const response = await getCandidates();
      setCandidates(response);
    } catch (e) {
      alert(e);
    }
  }

  if (candidates.length === 0) {
    return (
      <Wrapper>
        <Title>LISTA DE CADASTRO</Title>
        <table>
          <thead>
            <th>NOME</th>
            <th>E-MAIL</th>
            <th>NASCIMENTO</th>
            <th>TELEFONE</th>
          </thead>
          <tbody></tbody>
        </table>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Title>LISTA DE CADASTRO</Title>
        <table>
          <thead>
            <th>NOME</th>
            <th>E-MAIL</th>
            <th>NASCIMENTO</th>
            <th>TELEFONE</th>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr>
                <td>{candidate.name}</td>
                <td>{candidate.email}</td>
                <td>{candidate.birth}</td>
                <td>{candidate.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Wrapper>
    );
  }
}
