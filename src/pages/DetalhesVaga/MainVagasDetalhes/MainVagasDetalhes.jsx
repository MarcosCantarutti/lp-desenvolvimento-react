import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Importe o componente Link
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
        <div>Não foi possível carregar os detalhes da vaga.</div>;
      </section>
    );
  }

  return (
    <section className="main-consultoria">
      <div className="detalhes-vaga">
        <h1>Detalhes da Vaga</h1>
        <h2>{vaga.title}</h2>
        {/* <p>
          <strong>Empresa:</strong> {vaga.company}
        </p> */}
        <p>
          <strong>Cidade: </strong>
          <br></br> {vaga.city}
        </p>
        <p>
          <strong>Tipo de contrato: </strong>
          <br></br> {vaga.contract_type}
        </p>
        <p>
          <strong>Modalidade: </strong>
          <br></br> {vaga.modality}
        </p>
        <p>
          <strong>Principais atividades: </strong>
          <br></br> {vaga.responsibilities}
        </p>
        <p>
          <strong>Benefícios: </strong>
          <br></br> {vaga.benefits}
        </p>
        <p>
          <strong>Requisitos: </strong>
          <br></br> {vaga.requiriments}
        </p>
        <p>
          <strong>Mais informações: </strong>
          <br></br> {vaga.more_information}
        </p>

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
