// ClientPage.js
import React,{ useState, useEffect } from 'react';
import Chat from './chat';
import { Link } from 'react-router-dom';
import APIInvoke from "../../utils/APIInvoke";

const ClientPage = () => {

  return (
    <div>
      {/* Otras partes de la página de cliente */}
      <h1>Página del Cliente</h1>
      {/* ... */}
      <Chat tipoUsuario="cliente" />
      <Link to={`/Home2`} className="btn btn-primary">
     <i /> Volver
   </Link>
    </div>
  );
};

export default ClientPage;
