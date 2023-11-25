import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
import './Email.scss';

export const Email = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);

  const form = useRef();

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result.split(',')[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  //   const sendEmail = async (e) => {
  //     e.preventDefault();

  //     const serviceId = 'service_7icl26d';
  //     const templateId = 'template_c7993vt';
  //     const publicKey = 'qmSN8-LbgfNJb9sxx';

  //     console.log(file);

  //     try {
  //       let content = null;
  //       if (file) {
  //         content = await convertFileToBase64(file);
  //       }

  //       console.log(content);

  //       const templateParams = {
  //         from_name: name,
  //         from_email: email,
  //         to_name: 'Paulo Cantarutti',
  //         message: message,
  //         content: content,
  //       };

  //       await emailjs.send(serviceId, templateId, templateParams, publicKey);

  //       alert('Obrigado! Seu Email foi enviado!');
  //       setName('');
  //       setEmail('');
  //       setMessage('');
  //       setFile(null);
  //     } catch (error) {
  //       alert(
  //         'Erro ao enviar! Verifique todos os campos e o tamanho do arquivo anexado.'
  //       );
  //       console.error(error);
  //     }
  //   };

  const sendEmail = async (e) => {
    e.preventDefault();
    const apiUrl = 'https://servidor-email-lp.onrender.com';

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

    console.log(result);
  };

  return (
    <form className="email" ref={form} onSubmit={sendEmail}>
      <label>Nome:</label>
      <input
        className="name"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email:</label>
      <input
        className="email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Mensagem:</label>
      <textarea
        className="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <label>Anexe seu currículo:</label>
      <input
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <input type="submit" value="ENVIAR" />
    </form>
  );
};
