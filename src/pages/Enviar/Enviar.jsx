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
            A LP Desenvolvimento em sua missão institucional atua respeitando o
            direito à privacidade e visando o melhor uso da tecnologia da
            informação para a garantia da segurança dos dados de seus clientes,
            colaboradores, fornecedores e parceiros.
          </p>
          <p>
            Considera-se privacidade o atributo de certeza por parte dos
            clientes, colaboradores, fornecedores, parceiros e demais
            interessados quanto: A forma como as atividades, os sistemas, os
            processos e os componentes do quadro funcional da LP Desenvolvimento
            atuam e se comportam em relação ao tratamento de dados pessoais; A
            razoável expectativa de discrição e de preservação de seus
            interesses e informações de qualquer natureza.
          </p>
          <p>
            Sendo assim, a LP Desenvolvimento declara estar em conformidade com
            a legislação vigente e adequada à Lei nº 13.709/18. Declara, ainda,
            que os princípios norteadores da referida legislação estão
            incorporados no desenvolvimento de suas atividades institucionais,
            bem como na prática de seus agentes de tratamento.
          </p>
        </Container>
      </section>

      <Footer></Footer>
    </>
  );
}

export default Enviar;
