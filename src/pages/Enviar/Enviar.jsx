import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Container from '../../components/Container/Container';
import { Email } from '../../components/email/Email';
import './Enviar.scss';

function Enviar() {
  return (
    <>
      <Header></Header>
      <section className="main-consultoria">
        <Container className="enviar-container">
          <Email />
          <h1>Lei Geral de Proteção de dados (LGPD)</h1>
          <p>
            A LP Desenvolvimento, em sua missão institucional, compromete-se a
            respeitar o direito à privacidade e busca o melhor aproveitamento da
            tecnologia da informação para garantir a proteção dos dados de
            clientes, colaboradores, fornecedores e parceiros.
          </p>
          <p>
            Entendemos por privacidade o elemento crucial que fornece certeza
            aos clientes, colaboradores, fornecedores, parceiros e demais
            interessados ​​no que diz respeito às atividades, sistemas,
            processos e componentes da LP Desenvolvimento operam em relação ao
            tratamento de dados pessoais. Além disso, abrange uma expectativa
            razoável de descrição e preservação de interesses e informações de
            qualquer natureza.
          </p>
          <p>
            Dessa forma, a LP Desenvolvimento declara estar em conformidade com
            a legislação atual, em conformidade com a Lei nº 13.709/18. Afirma
            ainda que os princípios orientadores dessa legislação estão
            integrados ao desenvolvimento de suas atividades institucionais, bem
            como à conduta de seus agentes de tratamento.
          </p>
        </Container>
      </section>

      <Footer></Footer>
    </>
  );
}

export default Enviar;
