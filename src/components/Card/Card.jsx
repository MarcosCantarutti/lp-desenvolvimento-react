import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './Cards.scss';
export default function Card({ id, title, content, modalTitle, modalContent }) {
  // const callModal = (id, modalContent) => {
  //   console.log(id, modalContent);
  // };

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState(0);

  const handleButtonClick = (id, content) => {
    setModalId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card" id={id}>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => handleButtonClick(id, modalContent)}>
        saiba mais
      </button>

      {isModalOpen && (
        <Modal
          id={id}
          title={modalTitle}
          content={modalContent}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
