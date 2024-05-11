import React, { useRef, useState } from 'react';
import './Email.scss';
import { Spinner } from '@phosphor-icons/react';

export const Email = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar o envio

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Se já estiver enviando, não fazer nada

    setIsSubmitting(true); // Define que está enviando

    const apiUrl = 'https://servidor-email-lp.onrender.com';
    // const apiUrl = 'http://localhost:3000';
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      formData.append('file', file);

      const response = await fetch(`${apiUrl}/send-email`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert('Obrigado! Seu Email foi enviado!');
        setName('');
        setEmail('');
        setMessage('');
        setFile(null);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false); // Quando a requisição terminar, redefine que não está mais enviando
    }
  };

  return (
    <form className="email" ref={form} onSubmit={sendEmail}>
      {props && props.id != null && (
        <span className="candidatura">Candidatura para: {props.id}</span>
      )}
      <label>Nome:</label>

      <input
        className="name"
        type="text"
        name="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email:</label>
      <input
        className="email"
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Mensagem:</label>
      <textarea
        className="message"
        name="message"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <label>Anexe seu currículo:</label>
      <input
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <input
        type="submit"
        value={isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
        disabled={isSubmitting}
        style={{ cursor: isSubmitting ? 'wait' : 'pointer' }}
      />
    </form>
  );
};
