import React, { useState, useEffect } from "react";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import ContentHeader from "../../componentes/ContentHeader";
import { useParams } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const InfoTiket = () => {
  const { id } = useParams();
  const [tiket, setTicket] = useState(null);
  const [respuesta, setRespuesta] = useState("");
  const [fecha, setFecha] = useState("");
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

  const GuardarRespuesta = async () => {
    try {
      await APIInvoke.invokePOST(`/respuesta`, { id, respuesta, fecha });

      const msg = "La respuesta se envio correctamente."
            swal({
                title: 'Informacion',
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }
            })
            setFecha({
              fecha: ''
          })
          setRespuesta({
            respuesta: ''
        })
            
    } catch (error) {
      console.error("Error al guardar la respuesta:", error);
    }
    
  };
  
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
                  <div className="form-group">
                    <label htmlfor="fecha">Fecha de respuesta:</label>
                    <input
                        type="date"
                        className="form-control"
                        id="fecha"
                        rows="5"
                        name="fecha"
                        placeholder="Fecha"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        required
                    />
                    </div>
                  <div className="form-group">
                    <label htmlfor="respuesta">Respuesta</label>
                    <textarea
                      id="respuesta"
                      className="form-control"
                      rows="5"
                      value={respuesta}
                      onChange={(e) => setRespuesta(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={GuardarRespuesta}
                  >
                    Guardar Respuesta
                  </button>
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
