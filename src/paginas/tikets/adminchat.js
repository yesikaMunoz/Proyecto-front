// AdminPage.js
import React from 'react';
import Chat from './chat';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div>
      {/* Otras partes de la página de administrador */}
      <h1>Panel de Administrador</h1>
      {/* ... */}
      <Chat tipoUsuario="administador" />

      <Link to={`/Home`} className="btn btn-primary">
     <i /> Volver
   </Link>
    </div>
     
  );
};

export default AdminPage;
