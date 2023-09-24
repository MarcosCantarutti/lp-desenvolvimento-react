import React, { useEffect, useState } from 'react';
import Card from '../../../components/Card/Card';
import './MainConsultoria.scss';
import cardsContent from './CardsContent';
function MainConsultoria() {
  // Conteudo
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Function to fetch the JSON data
    const fetchData = () => {
      try {
        setUsers(cardsContent);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="main-consultoria">
      <div className="cards-container">
        {users.map(({ id, title, content, modalTitle, modalContent }) => {
          return (
            <Card
              key={id}
              id={id}
              title={title}
              content={content}
              modalTitle={modalTitle}
              modalContent={modalContent}
            />
          );
        })}
      </div>
    </section>
  );
}

export default MainConsultoria;
