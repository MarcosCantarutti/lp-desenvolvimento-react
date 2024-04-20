import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import './MainVagasDetalhes.scss';
import ButtonCurriculo from '../../../components/Button/ButtonCurriculo';

function MainVagasDetalhes() {
  const { id } = useParams(); // Obtém o id da vaga da URL
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
  );

  const [vaga, setVaga] = useState(null);
  const [identificadorVaga, setIdentificadorVaga] = useState(null);

  useEffect(() => {
    getVaga();
  }, []);

  async function getVaga() {
    const { data } = await supabase
      .from('vagas')
      .select()
      .eq('id', id)
      .single();
    setVaga(data);

    if (data && id) {
      setIdentificadorVaga(`${id} - ${data.title}`);
    }
  }

  if (!vaga) {
    return <div>Carregando...</div>;
  }

  return (
    <section className="main-consultoria">
      <div className="detalhes-vaga">
        <h1>Detalhes da Vaga</h1>
        <h2>{vaga.title}</h2>
        <p>
          <strong>Empresa:</strong> {vaga.company}
        </p>
        <p>{/* <strong>Data de Criação:</strong> {vaga.created_at} */}</p>
        <p>
          <strong>Vaga:</strong> {vaga.job}
        </p>
        <p>
          <strong>Descrição:</strong> {vaga.description}
        </p>
        <p>
          <strong>Responsabilidades:</strong> {vaga.responsibilities}
        </p>
        <p>
          <strong>Requisitos:</strong> {vaga.requirements}
        </p>
        <p>
          <strong>Mais Informações:</strong> {vaga.more_information}
        </p>

        <div className="button-enviar">
          <ButtonCurriculo className="golden large" routeId={identificadorVaga}>
            ENVIAR CANDIDATURA
          </ButtonCurriculo>
        </div>
      </div>
    </section>
  );
}

export default MainVagasDetalhes;
