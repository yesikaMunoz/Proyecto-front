import React from "react";
import Navbar from "../componentes/Navbar";
import SidebarContainer from "../componentes/SidebarContainer";
import ContentHeader from "../componentes/ContentHeader";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div class="content-wrapper">
        <ContentHeader 
            titulo={"Dashboard"}
            breadCrumb1={"Inicio"}
            breadCrumb2={"Dashboard"}
            ruta2={"/Home2"}
        /> 


        <section className="content">
          <div className="container-fluid">
            <div className="row">
            <div className="col-lg-3 col-6">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>CrearTikets</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                  <i className="nav-icon fas fa-share"></i>
                  </div>
                  <Link to={"/CrearTikets"} className="small-box-footer">
                    Crear Ticket
                    <i className="fas fa arrow-circle-right" />
                  </Link>
                </div>
              </div>


              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>Tickets</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                  <i className="nav-icon fas  fa-paper-plane" />
                  </div>
                  <Link to={"/Tikets"} className="small-box-footer">
                    tus tickets
                    <i className="fas fa arrow-circle-right" />
                  </Link>
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
export default Home;
