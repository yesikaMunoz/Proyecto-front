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
                                    <Link className="nav-link" to={"/"}>Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/login"}>Iniciar Sesión</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/crear-cuenta"}>Crear Cuenta</Link>
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

                        En ServiPlus, nos complace ofrecer productos y servicios de primera calidad, dedicados a proporcionar la mejor experiencia posible a nuestros clientes. Nuestro compromiso es satisfacer tus necesidades y superar tus expectativas. A continuación, te brindamos información clave sobre nuestra empresa y cómo podemos ayudarte:                        </p>
                    </div>
                </section>
                <footer className="bg-dark text-light text-center py-3" style={{ position: "fixed", bottom: "0", width: "100%" }}>
                    <p>© 2023 ServiPlus. Todos los derechos reservados.</p>
                </footer>
            </div>
        </div>
    );
}

export default Inicio;
