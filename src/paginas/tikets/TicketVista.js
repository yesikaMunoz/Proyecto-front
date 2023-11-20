import React, { useState, useEffect } from "react";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import ContentHeader from "../../componentes/ContentHeader";
import { useParams } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import { Link } from "react-router-dom";

const InfoTiket = () => {
  const { id } = useParams();
  const [tiket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarTicket = async () => {
      try {
        const response = await APIInvoke.invokeGET(`/Tikets/${id}`);

        if (response && typeof response === "object") {
          setTicket(response);
        } else {
          console.error(
            "La respuesta de la API no contiene detalles válidos para el ticket."
          );
        }
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar los detalles del ticket:", error);
      }
    };

    cargarTicket();
  }, [id]);

  
  return (
    <div className="wrapper">
      <Navbar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Responder al Ticket"}
          breadCrumb1={"Listado de Tickets"}
          breadCrumb2={"Responder"}
        />
        <section className="content">
          <div className="card">
            <div className="card-header bg-primary">
              <h3 className="card-title">Ver y Responder al Ticket</h3>
            </div>
            <div className="card-body">
              {loading ? (
                <p>Cargando detalles del ticket...</p>
              ) : (
                <div>
                  <h1 className="mb-4">Usuario: {tiket.email}</h1>
                  <p>
                    <strong>ID del Ticket:</strong> {tiket.id}
                  </p>
                  <p>
                    <strong>Fecha de creacion:</strong> {tiket.fecha}
                  </p>
                  <hr />
                  <p className="mt-4">
                    <strong>Contenido:</strong>
                  </p>
                  <p>{tiket.contenido}</p>
                  <hr />
                  
                  <Link to={`/Tikets`} className="btn btn-danger ml-3">
                    Volver
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default InfoTiket;
