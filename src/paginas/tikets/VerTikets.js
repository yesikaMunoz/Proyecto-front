import React, { useState, useEffect } from "react";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert"
import { Link } from "react-router-dom";

const VerTikets = () => {
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
                  tikets.map(
                    item => 
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.contenido}</td>
                            <td>{item.fecha}</td>
                            <td>
                                <Link to={`/ticketVista/${item.id}`} className="btn btn-sm btn-primary">Ver contenido</Link>;
                                <button onClick={(e)=>eliminarTicket(e, item.id)} className="btn btn-sm btn-danger">Eliminar</button>
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
