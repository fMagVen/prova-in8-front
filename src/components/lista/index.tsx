import { useEffect, useState } from "react";
import { getCandidates } from "../../services/userApi";
import { Title, Wrapper } from "./styles";

export default function Lista() {
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await getCandidates();
      console.log(response);
    } catch (e) {
      alert(e);
    }
  }

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
}
