import logo from "../../images/Logo.png";
import imagen1 from "../../images/imagen1.png";
import imagen2 from "../../images/imagen2.jpg";
import imagen3 from "../../images/imagen3.jpg";
import trabajoHay from "../../images/TrabajoHay.png";
import React from "react";
import "./main.css"
import "bootstrap/dist/css/bootstrap.min.css";

// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col
} from "react-bootstrap";

export const EditProfile = (props) => {
    return (
        <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card className="customCard">
              <Card.Header>
                <Card.Title as="h4" >Editaar perfil</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Rol</label>
                        <Form.Control
                          defaultValue="Postulante"
                          disabled
                          placeholder="Rol"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Nombre de usuario</label>
                        <Form.Control
                          defaultValue="PepitoPerez"
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Correo electrónico
                        </label>
                        <Form.Control
                        defaultValue="correo@ejemplo.com"
                          placeholder="Correo Electronico"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Primer Nombre</label>
                        <Form.Control
                          defaultValue="Pepito"
                          placeholder="Primer nombre"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Apellido</label>
                        <Form.Control
                          defaultValue="Perez"
                          placeholder="Apellido"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Dirección</label>
                        <Form.Control
                          defaultValue="Cra 13 A #200 Bogotá D.C"
                          placeholder="Dirección (opcional)"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Ciudad</label>
                        <Form.Control
                          defaultValue="Bogota"
                          placeholder="Ciudad"
                          type="text"
                        ></Form.Control>
                        
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>Pais</label>
                        <Form.Control
                          defaultValue="Colombia"
                          placeholder="Pais"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                   
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Sobre mi</label>
                        
                        <textarea
                            id="review-text"
                         placeholder="Inserta aca tu informacion personal"
                         cols="80"
                         rows={4}
                        
                        />
                        
                        
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Actualizar perfil
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                 
                  src={require("./photo-1431578500526-4d9613015464.jpeg")}
                ></img>
                
              </div>
              <Card.Body>
                <div className="author">
                  
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("./3135715.png")}
                    ></img>
                    <h5 className="title">Pepito Perez</h5>
                  
                  <p className="description">Sobre mi</p>
                </div>
                <p className="description text-center">
                Desarrollador de software con experiencia en diseño, instalación, pruebas y mantenimiento de sistemas de software. Dominio de varias plataformas, lenguajes y sistemas integrados. Experiencia en las herramientas y procedimientos de desarrollo más vanguardistas. Capaz de la autogestión eficaz en proyectos independientes. Habilidades de colaboración y trabajo en equipo.
                </p>
              </Card.Body>
              <hr></hr>
             <br></br>
             
            </Card>
          </Col>
        </Row>
      </Container>
    </>

        );
    };
    

    