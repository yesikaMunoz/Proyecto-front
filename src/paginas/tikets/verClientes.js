import React, { useState, useEffect } from "react";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const VerClientes = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        cargarUsuarios();
    }, []);

    const cargarUsuarios = async () => {
        try {
            const response = await APIInvoke.invokeGET("/usuarios");
            const usuariosFiltrados = response.filter(
                (usuario) => usuario.tipoUsuario === "rol2"
            );
            setUsuarios(usuariosFiltrados);
        } catch (error) {
            console.error("Error al cargar usuarios:", error);
        }
    };

    // Función para manejar el clic en el botón "Crear arreglo"
    const crearArregloEnAPI = async (id) => {
        try {
            // Obtener datos del usuario por ID
            const responseUsuario = await APIInvoke.invokeGET(`/usuarios/${id}`);
            const usuarioSeleccionado = responseUsuario[0];

            // Crear arreglo con los datos necesarios
            const arregloNuevo = {
                id: usuarioSeleccionado.id,
                nombre: usuarioSeleccionado.nombre,
                // Agrega aquí los campos adicionales según tu estructura
            };

            // Realizar la solicitud POST para crear el arreglo en la API
            const responseCrearArreglo = await APIInvoke.invokePOST("/arreglos", arregloNuevo);

            // Verificar la respuesta y mostrar un mensaje
            if (responseCrearArreglo) {
                swal({
                    title: "Información",
                    text: "Arreglo creado correctamente en la API",
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
            } else {
                swal({
                    title: "Error",
                    text: "Error al crear el arreglo en la API",
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
        } catch (error) {
            console.error("Error al crear el arreglo en la API:", error);
        }
    };

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
                                                    <th style={{ width: "15%" }}>Usuario</th>
                                                    <th style={{ width: "30%" }}>Nombre y Apellido</th>
                                                    <th style={{ width: "15%" }}>Tipo de Usuario</th>
                                                    <th style={{ width: "25%" }}>Opciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {usuarios.map((usuario) => (
                                                    <tr key={usuario.id}>
                                                        <td>{usuario.id}</td>
                                                        <td>{usuario.email}</td>
                                                        <td>{usuario.nombre} {usuario.apellido}</td>
                                                        <td>{usuario.tipoUsuario}</td>
                                                        <td>
                                                            {/* Modifica el enlace para llamar a la nueva función con el ID del usuario */}
                                                            <button
                                                                className="btn btn-sm btn-primary"
                                                                onClick={() => crearArregloEnAPI(usuario.id)}
                                                            >
                                                                Crear arreglo
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
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

export default VerClientes;
