import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';//componentes de routeo
import Login from './paginas/auth/login';
import CrearCuenta from './paginas/auth/CrearCuenta';
import VerTikets from './paginas/tikets/VerTikets';
import Home from './paginas/Home';
import CrearTikets from './paginas/tikets/CrearTikets';
import InfoTiket from './paginas/tikets/InfoTiket';
import Respuestas from './paginas/tikets/Respuestas';
import InfoRespuestas from './paginas/tikets/InfoRespuestas';
import Inicio from './paginas/auth/inicio';
import Home2 from './paginas/Home2';
import VerTiketsAdmin from './paginas/tikets/VerTicketAdmin';
import RespuestasA from './paginas/tikets/RespuestasA';
import EditarTickets from './paginas/tikets/EditarTickets';
import AdminPage from './paginas/tikets/adminchat';
import ClientPage from './paginas/tikets/clientechat';
import CrearCuentaAdmin from './paginas/auth/crearCuentaAdmi';
import VerClientes from './paginas/tikets/verClientes';


/*import logo from './logo.svg';
import './App.css';*/

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Inicio/>}/> 
          <Route path="/login" exact element={<Login/>}/> 
          <Route path="/verClientes" exact element={<VerClientes/>}/>
          <Route path="/CrearCuenta" exact element={<CrearCuenta/>}/>
          <Route path="/CrearCuentaAdmi" exact element={<CrearCuentaAdmin/>}/>
          <Route path="/Home" exact element={<Home/>}/>
          <Route path="/Home2" exact element={<Home2/>}/>
          <Route path="/Tikets" exact element={<VerTikets/>}/>   
          <Route path="/CrearTikets" exact element={<CrearTikets/>}/>
          <Route path="/InfoTiket/:id" exact element={<InfoTiket/>}/> 
          <Route path="/Respuestas" exact element={<Respuestas/>}/>
          <Route path="/RespuestasA" exact element={<RespuestasA/>}/>
          <Route path="/InfoRespuesta" exact element={<InfoRespuestas/>}/>
          <Route path="/ticketAdmin" exact element={<VerTiketsAdmin/>}/>
          <Route path="/editarTiket/:id" exact element={<EditarTickets/>}/>
          <Route path="/adminchat"  exact element={<AdminPage/>} />
          <Route path="/clientechat"  exact element={<ClientPage/>} />





        </Routes>
      </Router>
    </Fragment>
    
  );
}

export default App;