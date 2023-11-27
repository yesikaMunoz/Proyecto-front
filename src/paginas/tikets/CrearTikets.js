import React, {useState, useEffect} from "react";
import swal from "sweetalert";
import APIInvoke from "../../utils/APIInvoke";
import { Link, useParams , useNavigate } from "react-router-dom";

const CrearTikets = () => {
const {id} = useParams();
const navigate = useNavigate();

    const [tiket, setTiket] = useState({
        id:null,
        email:"",
        contenido:"",
        fecha:""

    })

    const{email,contenido,fecha}=tiket

    const onChange=(e)=>{
        setTiket({
            ...tiket,
            [e.target.name]:e.target.value
        })
    }

    const crearTicket = async () => {
        const data = {
            id:id,
            email: tiket.email,
            contenido: tiket.contenido,
            fecha: tiket.fecha
        }


        const response = await APIInvoke.invokePOST(`/Tikets`, data);
        const idTicket = response.id;

        if (idTicket === '') {
            const msg = "El ticket no fue creado correctamente."
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        } else {
            const msg = "El ticket fue creado correctamente."
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
            });

            setTiket({
                id:id,
                email: '',
                contenido: '',
                fecha: ''
            })
            navigate(`/home2/${id}`)
        }
    }

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
              <Link to={`/Home2/${id}`} className="btn btn-block btn-danger">
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
