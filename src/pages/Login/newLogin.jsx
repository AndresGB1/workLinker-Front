import React, { useState } from "react";
import logo from "../../images/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./newlogin.css";
import rutas from "../../utils/axios";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import axios from "axios";
// react-bootstrap components
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export const Loginuevo = (props) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        rutas.host +
          rutas.user +
          rutas.login +
          `?email=${email}&password=${pass}`,
        {
          email: email,
          password: pass,
        }
      )
      .then((res) => {
        if (res.data === "" || !isValidEmail(email)) {
          setError("Datos incorrectos");
          alert("Datos incorrectos");
        } else {
          alert("Bienvenido");
          sessionStorage.setItem("user", JSON.stringify(res.data));
          axios.get("http://localhost:8080/ws/role/findByUserId/"+res.data.user_id )
          .then((res) => {
            if (res.data.roleId === 1) {
              window.location.href = "/freelancers";
            }
            if (res.data.roleId === 2) {
              window.location.href = "/empleos";
            }
          })
          
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  return (
    <>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="20">
            <MDBCard
              className="bg-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "500px" }}
            >
              <MDBCardBody className="p-5 w-100 d-flex flex-column">
                <div>
                  <img
                    src={logo}
                    className="logo"
                    alt="Logo"
                    style={{
                      width: "260px",
                      marginLeft: "70px",
                      marginTop: "20px",
                      height: "70px",
                    }}
                  />
                </div>
                <br></br>
                <hr></hr>
                <h3 className="fw-bold mb-2 text-center">Inicio de sesión</h3>

                <MDBInput
                  wrapperClass="mb-4 w-100"
                  label="Correo Electrónico"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4 w-100"
                  label="Contraseña"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  onChange={(e) => setPass(e.target.value)}
                />



                <MDBBtn
                  size="lg"
                  className="botonfeo"
                  onClick={handleSubmit}
                >
                  Ingresar
                </MDBBtn>
                <MDBBtn
                  size="med"
                  outline
                  rounded
                  color="secondary"
                  className="botonfeo mt-3"
                  
                >
                  <Link to="/" className="botonfeo" style={{width: "100%"}}>
                  Volver
                  </Link>
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
