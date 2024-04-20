import React, { useEffect, useState } from 'react';
import './MainVagas.scss';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

function MainVagas() {
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
  );

  const [vagas, setVagas] = useState([]);
  const navigateTo = useNavigate(); // Inicializa o hook useHistory

  useEffect(() => {
    getVagas();
  }, []);

  async function getVagas() {
    const { data } = await supabase.from('vagas').select();
    setVagas(data);
  }

  function VagaItem({ vaga }) {
    return (
      <div
        className="vaga-item"
        key={vaga.id}
        onClick={() => handleClick(vaga.id)}
      >
        <h2>{vaga.title}</h2>
        <p>
          <strong>Empresa:</strong> {vaga.company}
        </p>
        {/* <p>
          <strong>Data de Criação:</strong> {vaga.created_at}
        </p> */}
        <p>
          <strong>Vaga:</strong> {vaga.job}
        </p>
        <p>
          <strong>Descrição:</strong> {vaga.description}
        </p>
        {/* <p>
          <strong>Responsabilidades:</strong> {vaga.responsibilities}
        </p>
        <p>
          <strong>Requisitos:</strong> {vaga.requirements}
        </p>
        <p>
          <strong>Mais Informações:</strong> {vaga.more_information}
        </p> */}
      </div>
    );
  }

  function handleClick(vagaId) {
    navigateTo(`/vagas/${vagaId}`); // Redireciona para a rota 'vagas/id' do item clicado
  }

  return (
    <section className="main-consultoria">
      <div className="lista-de-vagas">
        <h1>Vagas ativas no momento</h1>
        {vagas.map((vaga) => (
          <VagaItem vaga={vaga} />
        ))}
      </div>
    </section>
  );
}

export default MainVagas;
