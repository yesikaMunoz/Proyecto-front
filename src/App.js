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
import ticketVista from './paginas/tikets/TicketVista';
import VerTiketsAdmin from './paginas/tikets/VerTicketAdmin';



/*import logo from './logo.svg';
import './App.css';*/

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Inicio/>}/> 
          <Route path="/login" exact element={<Login/>}/> 
          <Route path="/CrearCuenta" exact element={<CrearCuenta/>}/>
          <Route path="/Home" exact element={<Home/>}/>
          <Route path="/Home2" exact element={<Home2/>}/>
          <Route path="/Tikets" exact element={<VerTikets/>}/>  
          <Route path="/TicketsCliente" exact element={<ticketVista/>}/>  
          <Route path="/CrearTikets" exact element={<CrearTikets/>}/>
          <Route path="/InfoTiket/:id" exact element={<InfoTiket/>}/> 
          <Route path="/Respuestas" exact element={<Respuestas/>}/>
          <Route path="/InfoRespuesta/:id" exact element={<InfoRespuestas/>}/>
          <Route path="/ticketAdmin" exact element={<VerTiketsAdmin/>}/>




        </Routes>
      </Router>
    </Fragment>
    
  );
}

export default App;