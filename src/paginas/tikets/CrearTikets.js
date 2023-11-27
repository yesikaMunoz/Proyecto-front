import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from 'sweetalert';


const CrearTikets = () => {
    const [tikets, setTikets] = useState({
      email:'',
      contenido: '',
      fecha: ''
    });
    
    const { email, contenido, fecha } = tikets;
    useEffect(() => {
        document.getElementById("email").focus();
    }, [])

    const onChange = (e) => {
        setTikets({
            ...tikets,
            [e.target.name]: e.target.value
        })
    }

    const crearTicket = async () => {
        try {
            // Recupera el ID de usuario desde el almacenamiento local
            const userId = localStorage.getItem("id");

            const data = {
                email: tikets.email,
                contenido: tikets.contenido,
                fecha: tikets.fecha,
                userId: userId // Agrega el ID de usuario al ticket
            }; 
    
            const response = await APIInvoke.invokePOST(`/Tikets`, data);
            const idTickets = response.id;
            

            if (idTickets === '') {
                const msg = "El ticket no fue creado correctamente.";
                swal({
                    title: 'No se puede crear',
                    text: msg,
                    icon: 'error',
                    buttons: {
                        confirmar: {
                            text: 'Ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-danger',
                            closeModal: true
                        }
                    }
                });
            } else {
                const msg = "El ticket fue creado correctamente.";
                swal({
                    title: 'Felicidades ',
                    text: msg,
                    icon: 'success',
                    buttons: {
                        confirmar: {
                            text: 'Ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-primary',
                            closeModal: true
                        }
                    }
                });
                setTikets({
                    title: '',
                    description: '',
                    username: '',
                    date: ''
                });
            }
        } catch (error) {
            console.error("Error al crear el ticket:", error);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        crearTicket();
    }
    const fechaActual = new Date().toISOString().split("T")[0];
  return (
    <div>
   <div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header"><h1>Crear Ticket</h1></div>
        <div class="card-body">
          <form onSubmit={onSubmit}>
            <div class="form-group">
              <label for="email">Email(usuario)</label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="Ingrese su email"
                onChange={onChange}
                value={email}
                required
              />
            </div>
            <div class="form-group">
              <label for="contenido">Contenido</label>
              <input
                type="text"
                class="form-control"
                id="contenido"
                name="contenido"
                placeholder="Ingrese su solicitud"
                onChange={onChange}
                value={contenido}
                required
              />
            </div>
            <div class="form-group">
              <label for="fecha">Fecha</label>
              <input
                type="date"
                class="form-control"
                id="fecha"
                name="fecha"
                placeholder="Fecha"
                onChange={onChange}
                value={fecha}
                required
                min={fechaActual}
              />
            </div>
            <div className="social-auth-links text-center mb-3">
                <button type="submit" className="btn btn-block btn-primary">
                  <i /> Enviar
                </button>
              </div>
              <Link to={`/Home2`} className="btn btn-block btn-danger">
                <i /> Volver
              </Link>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default CrearTikets;
