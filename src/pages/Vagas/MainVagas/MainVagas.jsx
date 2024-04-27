import React, { useEffect, useState } from 'react';
import './MainVagas.scss';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '@phosphor-icons/react';
function MainVagas() {
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
  );

  const [vagas, setVagas] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento
  const navigateTo = useNavigate(); // Inicializa o hook useHistory

  useEffect(() => {
    getVagas();
  }, []);

  async function getVagas() {
    setIsLoading(true); // Ativa o estado de carregamento
    const { data } = await supabase.from('vagas').select();
    setVagas(data);
    setIsLoading(false); // Desativa o estado de carregamento após o carregamento ser concluído
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
          <strong>Modalidade:</strong> {vaga.modality}
        </p>

        <p>
          <strong>Tipo de contrato:</strong> {vaga.contract_type}
        </p>
        <p>
          <strong>Cidade:</strong> {vaga.city}
        </p>
      </div>
    );
  }

  function handleClick(vagaId) {
    navigateTo(`/vagas/${vagaId}`);
  }

  return (
    <section className="main-consultoria">
      <div className="lista-de-vagas">
        <h1>Vagas ativas no momento</h1>
        {isLoading ? ( // Verifica se está carregando
          <div className="loading-spinner">
            <Spinner className="spinner-icon" size={64} />
          </div>
        ) : (
          vagas.map((vaga) => <VagaItem vaga={vaga} />)
        )}
      </div>
    </section>
  );
}

export default MainVagas;
