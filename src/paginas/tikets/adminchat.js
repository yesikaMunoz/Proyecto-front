// AdminPage.js
import React from 'react';
import Chat from './chat';

const AdminPage = () => {
  return (
    <div>
      {/* Otras partes de la página de administrador */}
      <h1>Panel de Administrador</h1>
      {/* ... */}
      <Chat tipoUsuario="administador" />
    </div>
  );
};

export default AdminPage;
