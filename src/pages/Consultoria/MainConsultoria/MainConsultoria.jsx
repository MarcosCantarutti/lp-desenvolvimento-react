import React, { useEffect, useState } from 'react';
import Card from '../../../components/Card/Card';
import './MainConsultoria.scss';
import cardsContent from './CardsContent';
import { Swiper, SwiperSlide } from 'swiper/react';
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
      <div className="">
        <Swiper spaceBetween={250} slidesPerView={3}>
          {users.map(({ id, title, content, modalTitle, modalContent }) => {
            return (
              <SwiperSlide key={id}>
                <Card
                  key={id}
                  id={id}
                  title={title}
                  content={content}
                  modalTitle={modalTitle}
                  modalContent={modalContent}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default MainConsultoria;
