import React from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
    return (
        <div>
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to={"#"} className="navbar-brand">Serviplus</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/login"}>Iniciar Sesión</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/CrearCuenta"}>Crear Cuenta</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="display-4">Bienvenido a Serviplus</h1>
                        <p className="lead">Serviplus es una innovadora plataforma de atención al cliente diseñada para 
                        brindar soluciones excepcionales a las empresas de todos los tamaños. Nuestra visión es ser tu socio estratégico 
                        en la gestión de la satisfacción del cliente, proporcionando servicios de primer nivel que impulsan el crecimiento de 
                        tu negocio. </p>
                    </div>
                    <div className="col-md-6">
                        <img src="https://www.marketingdirecto.com/wp-content/uploads/2021/09/atencion-al-cliente.png" className="img-fluid rounded-circle" />
                    </div>
                </div>
            </div>
            <section className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center">Información para Nuestros Clientes</h2>
                    <p className="lead text-center">
                        En Serviplus, nos enorgullece ofrecer productos/servicios de alta calidad y brindar la mejor experiencia posible a nuestros clientes. Estamos comprometidos en satisfacer tus necesidades y superar tus expectativas. Aquí te proporcionamos información clave sobre nuestra empresa y cómo podemos ayudarte:
                    </p>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                <img src="https://www.grandespymes.com.ar/wp-content/uploads/2018/02/calidad-servicio-al-cliente.jpg"className="img-fluid rounded-circle" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                   <img src="//www.salesforce.com/content/dam/blogs/sg/2023/3-ways-generative-ai-will-reshape-customer-service.jpg" className="img-fluid rounded-circle" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <img src="https://www.efficy.com/wp-content/uploads/2016/05/thumbs-up.png"className="img-fluid rounded-circle" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-dark text-light text-center py-3" style={{ position: "fixed", bottom: "0", width: "100%" }}>
                <p>© 2023 Serviplus. Todos los derechos reservados.</p>
            </footer>
        </div>
    </div>
    );
}

export default Inicio;
