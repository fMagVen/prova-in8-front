import Cadastro from "../../components/cadastro";
import Estagio from "../../components/estagio";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Lista from "../../components/lista";
import MainpageLayout from "../../layouts/main";

export default function Main() {
  return (
    <MainpageLayout>
      <Header />
      <Estagio />
      <Cadastro />
      <Lista />
      <Footer />
    </MainpageLayout>
  );
}
