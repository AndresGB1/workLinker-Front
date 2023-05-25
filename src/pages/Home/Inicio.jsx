import logo from "../../images/Logo.png";
import imagen1 from "../../images/imagen1.png";
import imagen2 from "../../images/imagen2.jpg";
import imagen3 from "../../images/imagen3.jpg";
import trabajoHay from "../../images/TrabajoHay.png";
import { Button } from "react-bootstrap";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Inicio = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img
            src={logo}
            className="logo"
            alt="Logo"
            style={{
              width: "260px",
              marginLeft: "20px",
              marginTop: "20px",
              height: "70px",
            }}
          />
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end align-items-center">
          <Button
            className="SingUp"
            style={{
              width: "150px",
              height: "50px",
              marginTop: "20px",
              background: "#CDFF06",
              border: "none",
              color: "black",
              marginRight: "30px",
              fontWeight: "bold",
            }} onClick={() => props.onFormSwitch('pruebas')}>
            Registrarse
          </Button>

          <Button
            variant="dark"
            style={{
              width: "150px",
              height: "50px",
              marginTop: "20px",
              marginRight: "40px",
              fontWeight: "bold",
            }}onClick={() => props.onFormSwitch('newLogin')}>
            Iniciar sesion
          </Button>

        </div> 
      </div>
      <div className="row mt-4">
      <Carousel showArrows={true} autoPlay= {true} showThumbs= {false} infiniteLoop= {true} interval={1600}>
                <div>
                    <img src={imagen1} height={500}/>
                   
                </div>
                <div>
                    <img src={imagen2} height={500}/>
                   
                </div>
                <div>
                    <img src={imagen3}height={500}/>
                   
                </div>
            </Carousel>
        <div className="col-alg-12 px-0">
     

          <div className="button-container">
            <Button
              variant="secondary"
              
              style={{
                width: "200px",
                height: "50px",
                position: "absolute",
                top: "70%",
                left: "35%",
            
                color: "white",
                border: "1px solid white",
                fontWeight: "bold",
              }}
            >
              Busco empleo
            </Button>
            <Button
              variant="secondary"
              className="BuscoFree"
              style={{
                width: "200px",
                height: "50px",
                position: "absolute",
                top: "70%",
                left: "55%",
             
                color: "white",
                border: "1px solid white",
                fontWeight: "bold",
              }}
            >
              Busco freelancers
            </Button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
        <div className="texto" style={{ position: "absolute", width: "900px", height: "104px", left: "20px", top: "30px" }}>
              <p style={{ fontFamily: "Quicksand", fontStyle: "normal", fontWeight: "800", fontSize: "20px", lineHeight: "40px", color: "#000000" }}>
              ¿Quiénes somos?</p>
              <p style={{ fontFamily: "Quicksand", fontStyle: "normal", fontWeight: "200", fontSize: "20px", lineHeight: "40px", color: "#000000" }}>
              WorkLinker es una empresa dedicada a conectar de manera eficiente a empleadores y empleados en el ámbito laboral. Nuestra plataforma 
              utiliza tecnología avanzada para facilitar el proceso de búsqueda y contratación de talento, brindando soluciones prácticas tanto para
              empresas en crecimiento como para profesionales en busca de oportunidades laborales. Nos enfocamos en crear conexiones significativas
              y duraderas que beneficien a ambas partes, permitiendo un crecimiento mutuo y un entorno laboral exitoso. En WorkLinker, creemos en 
              la importancia de encontrar el ajuste perfecto entre las necesidades de los empleadores y las habilidades de los empleados, y nos
              esforzamos por ofrecer un servicio confiable y de calidad que impulse el éxito laboral de todos nuestros usuarios..</p>
          </div>
        </div>
      </div>
     
      <div className="col-lg-6 col-md-6 col-sm-12">
          <img
            src={trabajoHay}
            className="logo"
            alt="Logo"
            style={{
              width: "500px",
              marginLeft: "1000px",
              marginTop: "-10px",
              height: "500px",
            }}
          />
        </div>        
    </div>
  );
};



