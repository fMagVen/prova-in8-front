import { Button, Form, Wrapper } from "./styles";
import React, { useState } from "react";
import { signupCandidate } from "../../services/candidateApi";
import useNewCandidate from "../../hooks/useNewCandidate";

export default function Cadastro() {
  const { newCandidate, setNewCandidate, setCurrentCandidate } =
    useNewCandidate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birth: "",
    phone: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function cadastrar(e: React.FormEvent) {
    e.preventDefault();
    try {
      await signupCandidate(formData);
      setNewCandidate(!newCandidate);
      setCurrentCandidate(formData);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <Wrapper>
      <h2>CADASTRO</h2>
      <Form onSubmit={cadastrar}>
        <label htmlFor="nome">Nome</label>
        <input type="text" name="name" id="nome" onChange={handleChange} />

        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" id="email" onChange={handleChange} />

        <label htmlFor="nascimento">Nascimento</label>
        <input
          type="text"
          name="birth"
          id="nascimento"
          onChange={handleChange}
        />

        <label htmlFor="telefone">Telefone</label>
        <input type="text" name="phone" id="telefone" onChange={handleChange} />
        <Button type="submit">CADASTRAR</Button>
      </Form>
    </Wrapper>
  );
}
