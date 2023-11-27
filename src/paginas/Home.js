import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hold-transition sidebar-mini">
      <div className="wrapper">
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <b className="nav-link" data-widget="pushmenu" role="button">
                <i className="fas fa-bars" />
              </b>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <b className="nav-link"> Menú</b>
            </li>
          </ul>
        </nav>

        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <b className="brand-link">
            <span className="brand-text font-weight-light">Serviplus</span>
          </b>
          <div className="sidebar">
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item">
                  <Link to={"/Home"} className="nav-link">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/RespuestasA"} className="nav-link">
                    Respuestas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/ticketAdmin"} className="nav-link">
                  tickets
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to={"/"} className="nav-link">
                      Cerrar Sesión
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
            <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>Tickets</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                  <i className="nav-icon fas  fa-paper-plane" />
                  </div>
                  <Link to={"/ticketAdmin"} className="small-box-footer">
                    Ver tickets
                    <i className="fas fa arrow-circle-right" />
                  </Link>
                </div>
              </div>


              <div className="col-lg-3 col-6">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>Respuestas</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                  <i className="nav-icon fas fa-share"></i>
                  </div>
                  <Link to={"/Respuestas"} className="small-box-footer">
                    Ver Respuestas
                    <i className="fas fa arrow-circle-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>Chat</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                  <i className="nav-icon fas  fa-paper-plane" />
                  </div>
                  <Link to={`/adminchat`} className="small-box-footer">
                    Chat
                    <i className="fas fa arrow-circle-right" />
                  </Link>
                </div>
              </div> 
              <div className="col-lg-3 col-6">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>Crear cuenta admin</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                  <i className="nav-icon fas  fa-paper-plane" />
                  </div>
                  <Link to={`/CrearCuentaAdmi`} className="small-box-footer">
                    Crear cuenta admin
                    <i className="fas fa arrow-circle-right" />
                  </Link>
                </div>
              </div> 
            </div>
          </div>
          
        </section>
            </div>
          </section>
        </div>
        <footer className="main-footer">
          <div className="float-right d-none d-sm-block">
          </div>
          <strong>Serviplus © 2022-2023.</strong> Derechos reservados.
        </footer>
      </div>
    </div>
  );
};
export default Home;
