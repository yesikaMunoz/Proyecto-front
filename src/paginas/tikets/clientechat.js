// ClientPage.js
import React from 'react';
import Chat from './chat';

const ClientPage = () => {
  return (
    <div>
      {/* Otras partes de la página de cliente */}
      <h1>Página del Cliente</h1>
      {/* ... */}
      <Chat tipoUsuario="cliente" />
    </div>
  );
};

export default ClientPage;
