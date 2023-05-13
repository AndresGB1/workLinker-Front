import logo from "../../images/Logo.png";
import imagen1 from "../../images/imagen1.png";
import imagen2 from "../../images/imagen2.jpg";
import imagen3 from "../../images/imagen3.jpg";
import trabajoHay from "../../images/TrabajoHay.png";
import { Button } from "react-bootstrap";

const Inicio = () => {
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
            }}>
            Sign Up
          </Button>

          <Button
            variant="dark"
            style={{
              width: "150px",
              height: "50px",
              marginTop: "20px",
              marginRight: "40px",
              fontWeight: "bold",
            }}>
            Sign in
          </Button>

        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-12 px-0">
          <div id="carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carousel" data-slide-to="0" className="active"></li>
              <li data-target="#carousel" data-slide-to="1"></li>
              <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={imagen1} alt="First slide" style={{height:"460px"}} />
              <div className="carousel-caption" style={{ position: "absolute", width: "1080px", height: "104px", left: "380px", top: "100px" }}>
                <p style={{ fontFamily: "Quicksand", fontStyle: "normal", fontWeight: "700", fontSize: "32px", lineHeight: "40px", color: "#FFFFFF" }}>
                  Uniendo talentos, creando oportunidades: Work Linker, la conexión perfecta entre empleadores y freelancers
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imagen2} alt="Second slide" />
              <div className="carousel-caption" style={{ position: "absolute", width: "1080px", height: "104px", left: "205px", top: "235px" }}>
                <p style={{ fontFamily: "Quicksand", fontStyle: "normal", fontWeight: "700", fontSize: "32px", lineHeight: "40px", color: "#FFFFFF" }}>
                  Uniendo talentos, creando oportunidades: Work Linker, la conexión perfecta entre empleadores y freelancers
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={imagen3} alt="Third slide" />
              <div className="carousel-caption" style={{ position: "absolute", width: "1080px", height: "104px", left: "205px", top: "235px" }}>
                <p style={{ fontFamily: "Quicksand", fontStyle: "normal", fontWeight: "700", fontSize: "32px", lineHeight: "40px", color: "#FFFFFF" }}>
                  Uniendo talentos, creando oportunidades: Work Linker, la conexión perfecta entre empleadores y freelancers
                </p>
              </div>
            </div>
          </div>
            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          <div className="button-container">
            <Button
              variant="primary"
              className="mr-2"
              style={{
                width: "200px",
                height: "50px",
                position: "absolute",
                top: "50%",
                left: "35%",
                background: "transparent",
                color: "white",
                border: "1px solid white",
                fontWeight: "bold",
              }}
            >
              Busco empleo
            </Button>
            <Button
              variant="primary"
              style={{
                width: "200px",
                height: "50px",
                position: "absolute",
                top: "50%",
                left: "55%",
                background: "transparent",
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
        <div className="texto" style={{ position: "absolute", width: "900px", height: "104px", left: "80px", top: "630px" }}>
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
              marginLeft: "1250px",
              marginTop: "-20px",
              height: "500px",
            }}
          />
        </div>        
    </div>
  );
};

export { Inicio };
