import React, { useState, useEffect } from "react";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert"
import { Link, useNavigate, useParams } from "react-router-dom";

const VerTikets = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [tikets, setTikets] = useState([]);

  useEffect(() => {
    cargarTikets();
  }, []);

  const cargarTikets = async () => {
    const response = await APIInvoke.invokeGET("/tikets");
    setTikets(response);
  };

  const eliminarTiket = async (e,id) => {
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
      cargarTikets();
    } else {
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
  };

  const actualizarTicket = (id) => {
    // Aquí rediriges a la ruta con el id correspondiente
    navigate(`/editarTiket/${id}`);
  };

  const ticketsFiltrados = tikets.filter(tikets => tikets.id === id)

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div class="content-wrapper">
        <ContentHeader
          titulo={"Listado de Tikets"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Tikets"}
          ruta2={"/Home2"}
        />

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
                  ticketsFiltrados.map(
                    tiket => 
                        <tr key={tiket.id}>
                            <td>{tiket.id}</td>
                            <td>{tiket.email}</td>
                            <td>{tiket.contenido}</td>
                            <td>{tiket.fecha}</td>
                            <td>
                                <Link to={`/editarTiket/${tiket.id}`} className="btn btn-sm btn-primary">Actualizar</Link>;
                                <button onClick={(e)=>eliminarTiket(e, tiket.id)} className="btn btn-sm btn-danger">Eliminar</button>
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
      <Footer></Footer>
    </div>
  );
};

export default VerTikets;
