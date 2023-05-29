import imagen1 from "../../images/imagen1.png";
import imagen2 from "../../images/imagen2.jpg";
import imagen3 from "../../images/imagen3.jpg";
import trabajoHay from "../../images/TrabajoHay.png";
import { Button } from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./inicio.css";

export const Inicio = (props) => {
  return (
    <div className="container-fluid">
      <div className="carrouselxd">
        <Carousel
          width={"100%"}
          showArrows={true}
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
          interval={2000}
          dynamicHeight={false}
          className="hijocarrousel"
        >
          <div>
            <img src={imagen1} height={420} />
          </div>
          <div>
            <img src={imagen2} height={420} />
          </div>
          <div>
            <img src={imagen3} height={420} />
          </div>
        </Carousel>
        <div className="col-alg-12 px-0">
          <div className="button-container">
            <Button
              variant="secondary"
              className="BuscoFree" 
              style={{
                width: "15%",
                height: "50px",
                position: "absolute",
                top: "70%",
                left: "30%",
                color: "white",
                border: "1px solid white",
                fontWeight: "bold",
              }}
              as={Link}
              to="/freelancers"
            >
              Busco empleo
            </Button>
            <Button
              variant="secondary"
              as={Link}
              to="/empleos"
              className="BuscoFree"
              style={{
                width: "15%",
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
  <div className="col-md-7 col-sm-12  mt-5">
    <div
      className="texto"
      style={{
        position: "absolute",
        marginLeft: "7%",
        
      }}
    >
      <p
        style={{
          
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "250%",
          lineHeight: "40px",
          color: "#000000",
          fontWeight: "bold",

        }}
      >
        ¿Quiénes somos?
      </p>
      <p
        style={{
          marginTop: "5%",
          fontSize: "130%",
          lineHeight: "110%",
          color: "#000000",
          textAlign: "justify",
        }}
      >
        WorkLinker es una empresa dedicada a conectar de manera eficiente a empleadores y empleados en el ámbito laboral. Nuestra plataforma utiliza tecnología avanzada para facilitar el proceso de búsqueda y contratación de talento, brindando soluciones prácticas tanto para empresas en crecimiento como para profesionales en busca de oportunidades laborales. Nos enfocamos en crear conexiones significativas y duraderas que beneficien a ambas partes, permitiendo un crecimiento mutuo y un entorno laboral exitoso. En WorkLinker, creemos en la importancia de encontrar el ajuste perfecto entre las necesidades de los empleadores y las habilidades de los empleados, y nos esforzamos por ofrecer un servicio confiable y de calidad que impulse el éxito laboral de todos nuestros usuarios.
      </p>
    </div>
  </div>
  <div className="col-md-4 text-right">
    <img
      src={trabajoHay}
      className="logo"
      alt="Logo"
      style={{
        width: "90%",
        height: "auto",
        marginTop: "10%",
        
      }}
    />
  </div>
</div>


    </div>
  );
};
