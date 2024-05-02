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
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [perPage] = useState(10); // Limite por pagina
  const navigateTo = useNavigate();

  useEffect(() => {
    getVagas();
  }, [page]);

  async function getVagas() {
    setIsLoading(true);
    const { data } = await supabase
      .from('vagas')
      .select()
      .eq('active', true)
      .range((page - 1) * perPage, page * perPage - 1);
    setVagas(data);
    setIsLoading(false);
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

  function handlePrevPage() {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  }

  async function handleNextPage() {
    const { data } = await supabase
      .from('vagas')
      .select('id')
      .range(page * perPage, (page + 1) * perPage - 1);
    if (data.length > 0) {
      setPage((prevPage) => prevPage + 1);
    }
  }

  return (
    <section className="main-consultoria">
      <div className="lista-de-vagas">
        <h1>Vagas ativas no momento</h1>
        {isLoading ? (
          <div className="loading-spinner">
            <Spinner className="spinner-icon" size={64} />
          </div>
        ) : (
          <>
            {vagas.map((vaga) => (
              <VagaItem key={vaga.id} vaga={vaga} />
            ))}
            <div className="pagination">
              <button onClick={handlePrevPage} disabled={page === 1}>
                Anterior
              </button>
              <span>Página {page}</span>
              <button
                onClick={handleNextPage}
                disabled={vagas.length < perPage}
              >
                Próxima
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default MainVagas;
