import React, { useEffect, useState } from 'react';
import './Modal.scss';
import Button from '../Button/Button';
import { X, WhatsappLogo } from '@phosphor-icons/react';
const Modal = ({ id, title, content, onClose }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [onClose]);
  let arrLinha = content.split('\n');

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            <X size={16} />
          </button>
        </div>
        <div className="modal-content" style={{ marginTop: '5px' }}>
          {arrLinha.map((linha, index) => (
            <p className="text" key={index}>
              {linha}
            </p>
          ))}
        </div>

        <Button className="contact-button">
          <WhatsappLogo size={32} />
          ENTRAR EM CONTATO
        </Button>
      </div>
    </div>
  );
};

export default Modal;
