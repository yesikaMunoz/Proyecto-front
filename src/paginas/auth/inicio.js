import React from "react";
import { Link } from "react-router-dom";
import "../../css/style.css"

const Inicio = () => {
    return (
     <div>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Laura Bootstrap Template - Index</title>
  <meta content name="description" />
  <meta content name="keywords" />
  {/* Favicons */}
  <Link to="assets/img/favicon.png" rel="icon" />
  <Link to="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
  {/* Google Fonts */}
  <Link to="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Satisfy" rel="stylesheet" />
  {/* Vendor CSS Files */}
  <Link to="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <Link to="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
  <Link to="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
  <Link to="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
  <Link to="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
  {/* Template Main CSS File */}
  <Link to="assets/css/style.css" rel="stylesheet" />
  {/* =======================================================
  * Template Name: Laura
  * Updated: Sep 18 2023 with Bootstrap v5.3.2
  * Template URL: https://bootstrapmade.com/laura-free-creative-bootstrap-theme/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
  {/* ======= Header ======= */}
  <header id="header" className="fixed-top d-flex justify-content-center align-items-center header-transparent">
    <nav id="navbar" className="navbar">
      <ul>
        <Link className="nav-Link scrollto active"to={"/login"}>Inicio</Link>
        <Link className="nav-Link scrollto active"to={"/CrearCuenta"}>Crear cuenta</Link>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>{/* .navbar */}
  </header>{/* End Header */}
  {/* ======= Hero Section ======= */}
  <section id="hero">
    <div className="hero-container">
      <h1>Servicio al cliente</h1>
      <h2>Crea tus propios tickets para resolver tus dudas</h2>
      <a to="#about" className="btn-scroll scrollto" title="Scroll Down"><i className="bx bx-chevron-down" /></a>
    </div>
  </section>{/* End Hero */}
  <main id="main">

    {/* ======= My Resume Section ======= */}
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <span>Soporte360</span>
          <h2>Soporte360</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Informacion</h3>
            <div className="resume-item pb-0">
              <p><em>Un sistema de servicio al cliente basado en tickets es una herramienta que ayuda a las empresas a gestionar las interacciones con los clientes de manera eficiente y organizada. Este sistema utiliza tickets para rastrear, priorizar y resolver las consultas y problemas de los clientes. Aquí hay algunos elementos clave:</em></p>
              <p>
              </p>
              <p />
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Master of Fine Arts &amp; Graphic Design</h4>
              <h5>2015 - 2016</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2010 - 2014</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Soporte360</h3>
            <div className="resume-item">
              <p><em>En "Soporte360", entendemos la importancia de brindar un servicio al cliente excepcional y resolver tus problemas de la manera más rápida y eficiente posible. Nuestra plataforma de servicio al cliente basada en tickets está diseñada para ofrecerte una experiencia sin complicaciones y garantizar que todas tus consultas sean atendidas de manera oportuna. </em> </p>
              <p />
            </div>
            <div className="resume-item">
              <h4>Graphic design specialist</h4>
              <h5>2017 - 2018</h5>
              <p><em>Stepping Stone Advertising, New York, NY</em></p>
              <p>
              </p><ul>
                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
              </ul>
              <p />
            </div>
          </div>
        </div>
      </div>
    </section>{/* End My Resume Section */}
    {/* ======= My Services Section ======= */}
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <span>My Services</span>
          <h2>My Services</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble" /></div>
              <h4 className="title"><a to>Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file" /></div>
              <h4 className="title"><a to>Sed ut perspiciatis</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer" /></div>
              <h4 className="title"><a to>Magni Dolores</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-world" /></div>
              <h4 className="title"><a to>Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End My Services Section */}
    {/* ======= Testimonials Section ======= */}
  </main>{/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="container">
      <h3>Laura Thomson</h3>
      <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
      <div className="social-links">
        <a to="#" className="twitter"><i className="bx bxl-twitter" /></a>
        <a to="#" className="facebook"><i className="bx bxl-facebook" /></a>
        <a to="#" className="instagram"><i className="bx bxl-instagram" /></a>
        <a to="#" className="google-plus"><i className="bx bxl-skype" /></a>
        <a to="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
      </div>
      <div className="copyright">
        © Copyright <strong><span>Laura</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/laura-free-creative-bootstrap-theme/ */}
        Designed by <a to="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>{/* End Footer */}
  <a to="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
  {/* Vendor JS Files */}
  {/* Template Main JS File */}
</div>


    );
}

export default Inicio;
