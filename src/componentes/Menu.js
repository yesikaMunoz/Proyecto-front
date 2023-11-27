import React from "react";
import { Link, useParams } from "react-router-dom";

const Menu = () => {
  const {id} = useParams();
  return (
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li className="nav-item">
          <Link to={`/Home2`} className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Inicio
            </p>
          </Link>
        </li>

        <li className="nav-item">
          <Link to={`/Tikets`} className="nav-link">
            <i className="nav-icon fas  fa-paper-plane" />
            <p>
              Tikets
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`/Respuestas`} className="nav-link">
            <i className="nav-icon fas fa-share" />
            <p>
              Respuestas
            </p>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/"} className="nav-link">
            Cerrar Sesión
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
