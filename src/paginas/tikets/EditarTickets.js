import React, { useEffect, useState } from "react";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import show_alerta from "sweetalert";

const EditarTickets = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const url = `http://localhost:4000/tikets/${id}`;

    const [tikets, setTikets] = useState({
        contenido: "",
        fecha: "",
    });

    useEffect(() => {
        getTickets();
    }, []);

    const getTickets = async () => {
        try {
            const response = await axios.get(url);
            setTikets(response.data);
        } catch (error) {
            console.error("Error al obtener detalles del tikets:", error);
            show_alerta("Error", "Hubo un error al obtener los detalles del tikets");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTikets({
            ...tikets,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(url, tikets);
            show_alerta("Éxito", "Detalles del tikets actualizados correctamente");
            navigate("/Tikets");
        } catch (error) {
            console.error("Error al actualizar detalles del tikets:", error);
            show_alerta("Error", "Hubo un error al actualizar los detalles del tikets");
        }
    };
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
                </div>
              </div>
              <div className="hold-transition register-page">
                    <div className="register-box">
                        <div className="card">
                            <div className="card-body register-card-body">
                                <p className="login-box-msg">Registro de pacientes</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="contenido"
                                            id="contenido"
                                            name="contenido"
                                            value={tikets.contenido}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fa-solid fa-signature" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder="fecha"
                                            id="fecha"
                                            name="fecha"
                                            value={tikets.fecha}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-lock" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="social-auth-links text-center">
                                        <button type="submit" className="btn btn-primary">
                                            Guardar Cambios
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default EditarTickets;


