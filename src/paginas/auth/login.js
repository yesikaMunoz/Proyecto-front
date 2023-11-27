  import React, { useState, useEffect } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import APIInvoke from "../../utils/APIInvoke";
  import swal from 'sweetalert';

  const Login = () => {
    const navigate = useNavigate();

    const [usuarios, setUsuarios] = useState({
      email: "",
      password: "",
      id : null
    });

    const { email, password } = usuarios;

    const onChange = (e) => {
      setUsuarios({
        ...usuarios,
        [e.target.name]: e.target.value
      });
    }

    useEffect(() => {
      const emailInput = document.getElementById("email");
      if (emailInput) {
        emailInput.focus();
      }
    }, []);

    const iniciarSesion = async () => {
      const verificarExistenciaUsuario = async (email, password) => {
        try {
          const response = await APIInvoke.invokeGET(
            `/usuarios?email=${email}&password=${password}`
          );
          if (response && response.length > 0) {
            return response[0];
          }
          return null;
        } catch (error) {
          console.error(error);
          return null;
        }
      }

      if (password.length < 6) {
        mostrarError("Las contraseñas deben tener al menos 6 caracteres.");
      } else {
        const usuarioEncontrado = await verificarExistenciaUsuario(email, password);

        if (!usuarioEncontrado) {
          mostrarError("No fue posible iniciar sesión, verifique los datos ingresados.");
        } else {
          mostrarExito("Bienvenid@");

          // Obtener el tipo de usuario desde la respuesta del servidor
          const { tipoUsuario , id} = usuarioEncontrado;

          setUsuarios ({
            ...usuarios,
            id
          })

          // Redirección a los dashboards correspondientes según el tipo de usuario
          if (tipoUsuario === "rol1") {
            navigate("/Home");
          } else if (tipoUsuario === "rol2") {
            navigate(`/Home2/${id}`);
          }
        }
      }
    }

    const onSubmit = (e) => {
      e.preventDefault();
      iniciarSesion();
    }

    const mostrarError = (mensaje) => {
      swal({
        title: 'Error',
        text: mensaje,
        icon: 'error',
        buttons: {
          confirm: {
            text: 'ok',
            value: true,
            visible: true,
            className: 'btn btn-danger',
            closeModal: true
          }
        }
      });
    };

    const mostrarExito = (mensaje) => {
      swal({
        title: 'Informacion',
        text: mensaje,
        icon: 'success',
        buttons: {
          confirm: {
            text: 'ok',
            value: true,
            visible: true,
            className: 'btn btn-primary',
            closeModal: true
          }
        }
      });
    };

    return (
      <div className="login-box" style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="login-logo">
          <b>Iniciar</b> Sesión
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            
            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />

                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />

                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-8"></div>
              </div>

              <div className="social-auth-links text-center mb-3">
                <button type="submit" className="btn btn-block btn-primary">
                  Ingresar
                </button>
                <Link to={"/crearCuenta"} className="btn btn-block btn-danger">
                  <i /> Crear Cuenta
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );  
  };

  export default Login;

