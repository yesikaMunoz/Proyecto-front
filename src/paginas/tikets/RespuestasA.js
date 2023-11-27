import React, { useState, useEffect } from "react";
import APIInvoke from "../../utils/APIInvoke";
import { Link } from "react-router-dom";

const Respuestas = () => {


  const [respuesta, setRespuesta] = useState([]);

  useEffect(()=>{
    cargarRespuesta()
  },[])

  const cargarRespuesta = async()=>{
    const response = await APIInvoke.invokeGET("/respuesta")
    setRespuesta(response)
  }
  useEffect(()=>{
    cargarRespuesta()
  },[])

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
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Respuestas</h3>
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
                      <th style={{ width: "25%" }}>Contenido de la respuesta</th>
                    <th style={{ width: "20%" }}>Fecha de respuesta</th>
                    <th style={{ width: "25%" }}>Ver</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    respuesta.map(
                        item =>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.respuesta}</td>
                            <td>{item.fecha}</td>
                            <td><Link to={`/InfoRespuesta/${item.id}`} className="btn btn-sm btn-primary">Ver respuesta</Link>
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
        <footer className="main-footer">
          <div className="float-right d-none d-sm-block">
          </div>
          <strong>Serviplus © 2022-2023.</strong> Derechos reservados.
        </footer>
      </div>
    </div>
     );
}
 
export default Respuestas;