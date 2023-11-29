import React, { useState, useEffect } from "react";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert"
import { Link } from "react-router-dom";

const VerTiketsAdmin = () => {
  const [tikets, setTikets] = useState([]);

  useEffect(()=>{
    cargarTikets()
  },[])

  const cargarTikets = async()=>{
    const response = await APIInvoke.invokeGET("/tikets")
    setTikets(response)
  }
  useEffect(()=>{
    cargarTikets()
  },[])

const eliminarTicket = async (e,id) => {
  e.preventDefault();
const response = await APIInvoke.invokeDELETE(`/tikets/${id}`);
if (response) { 
  const msg = "Ticket eliminado correctamente";
  swal({
    title: "Información",
    text: msg,
    icon: "success",
    buttons: {
      confirm: {
        text: "Ok",
        value: true,
        visible: true,
        className: "btn btn-primary",
        closeModal: true,
      },
    },
  });
  cargarTikets()
}else{
  const msg = "El ticket no fue eliminado correctamente";
  swal({
    title: "Error",
    text: msg,
    icon: "error",
    buttons: {
      confirm: {
        text: "Ok",
        value: true,
        visible: true,
        className: "btn btn-danger",
        closeModal: true,
      },
    },
  });
}
}

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
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Ver Tickets</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: "10%" }}>Id</th>
                    <th style={{ width: "15%" }}>usuario del Ticket</th>
                    <th style={{ width: "30%" }}>Contenido del Tiket</th>
                    <th style={{ width: "15%" }}>Fecha de Creacion</th>
                    <th style={{ width: "25%" }}>Opciones</th>
                  </tr>
                </thead>
                <tbody>

                  {
                  tikets.map(
                    tiket => 
                        <tr key={tiket.id}>
                            <td>{tiket.id}</td>
                            <td>{tiket.email}</td>
                            <td>{tiket.contenido}</td>
                            <td>{tiket.fecha}</td>
                            <td>
                                <Link to={`/InfoTiket/${tiket.id}`} className="btn btn-sm btn-primary">Responder ticket</Link>
                                <button onClick={(e)=>eliminarTicket(e, tiket.id)} className="btn btn-sm btn-danger">Eliminar</button>
                                <Link to={`/Chat/${tiket.id}`} className="btn btn-sm btn-primary">Responder ticket</Link>
                            </td>
                        </tr>
                  )
                  }

                </tbody>
              </table>
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

export default VerTiketsAdmin;
