import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import './MainVagasDetalhes.scss';
import ButtonCurriculo from '../../../components/Button/ButtonCurriculo';
import { Spinner } from '@phosphor-icons/react';

function MainVagasDetalhes() {
  const { id } = useParams();
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
  );

  const [vaga, setVaga] = useState(null);
  const [identificadorVaga, setIdentificadorVaga] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getVaga();
  }, []);

  async function getVaga() {
    setIsLoading(true);
    const { data } = await supabase
      .from('vagas')
      .select()
      .eq('id', id)
      .single();
    setVaga(data);

    if (data && id) {
      setIdentificadorVaga(`${id} - ${data.title}`);
    }
    setIsLoading(false);
  }

  if (isLoading) {
    return (
      <section className="main-consultoria">
        <div className="loading-spinner">
          <Spinner className="spinner-icon" size={64} />
        </div>
      </section>
    );
  }

  if (!vaga) {
    return (
      <section className="main-consultoria">
        <div className="detalhes-vaga">
          <h1>Vaga não localizada</h1>
          <Link to="/vagas" className="voltar-button">
            Voltar para lista
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="main-consultoria">
      <div className="detalhes-vaga">
        <h1>Detalhes da Vaga</h1>
        <h2>{vaga.title}</h2>
        <div>
          <strong>Cidade:</strong>
          <br />
          <pre>{vaga.city}</pre>
        </div>
        <div>
          <strong>Tipo de contrato:</strong>
          <br />
          <pre>{vaga.contract_type}</pre>
        </div>
        <div>
          <strong>Modalidade:</strong>
          <br />
          <pre>{vaga.modality}</pre>
        </div>
        <div>
          <strong>Principais atividades:</strong>
          <br />
          <pre>{vaga.responsibilities}</pre>
        </div>
        <div>
          <strong>Benefícios:</strong>
          <br />
          <pre>{vaga.benefits}</pre>
        </div>
        <div>
          <strong>Requisitos:</strong>
          <br />
          <pre>{vaga.requiriments}</pre>
        </div>
        <div>
          <strong>Mais informações:</strong>
          <br />
          <pre> {vaga.more_information}</pre>
        </div>

        <div className="button-enviar">
          <Link to="/vagas" className="voltar-button">
            Voltar para lista
          </Link>
          <ButtonCurriculo className="golden large" routeId={identificadorVaga}>
            Quero me candidatar
          </ButtonCurriculo>
        </div>
      </div>
    </section>
  );
}

export default MainVagasDetalhes;
