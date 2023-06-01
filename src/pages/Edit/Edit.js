import React, { useState ,useEffect} from "react";
import axios from "axios";
import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col
  } from "react-bootstrap";
import rutas from "../../utils/axios";

export const Edit = (props) => {
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [userID, setUserID] = useState('');

    useEffect(() => {
        const ids = JSON.parse(sessionStorage.getItem("user")).user_id;
        setUserID(ids);
        
        if (ids === null || ids === undefined) {
            window.location.href = "/";
        }
        else {

        axios.get(rutas.host+rutas.user+rutas.get+`${ids}`)
        .then((res) => {
        setName(res.data.fullName);
        setApellidos(res.data.fullName);
        setPhone(res.data.phoneNumber);
        setCountry(res.data.country);
        setCity(res.data.city);
        setEmail(res.data.email);
        setAddress(res.data.address);
        setDescription(res.data.userDescription);
        setPass(res.data.password);
        })
        .catch((err) => {
            alert("No se encontró el usuario");
        });
        }
    }, [id]);

    const editar = () => {
        axios.put(rutas.host+rutas.user+rutas.update+`${userID}`, {
            fullName: name,
            loginName: email,
            phoneNumber: phone,
            country: country,
            city: city,
            email: email,
            address: address,
            userDescription: description,
            isActive: true,
            password: password
        })
        .then((res) => {
            alert("Se editó correctamente");
        })
        .catch((err) => {
            alert("No se pudo editar");
        });
    }
    const validar = () => {
        if (name === '' || apellidos === '' || phone === '' || country === '' || city === '' || email === '' || address === '' || description === '' || password === '') {
            alert("Por favor llene todos los campos");
        } else {
            editar();
        }
    }


    return (
      <div className="auth-form-container ml-2 mr-2">
        <Container fluid>
          <Row>
            <Col md="8">
              <Card className="customCard">
                <Card.Header>
                  <Card.Title as="h4">Editar perfil</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Row>
                      
                      <Col className="px-1" md="6">
                        <Form.Group>
                          <label>Nombre de usuario</label>
                          <Form.Control
                            defaultValue="PepitoPerez"
                            placeholder="Username"
                            type="text"
                            value={name}
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="6">
                        <Form.Group>
                          <label htmlFor="exampleInputEmail1">
                            Correo electrónico
                          </label>
                          <Form.Control
                            defaultValue="correo@ejemplo.com"
                            placeholder="Correo Electronico"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={name}
                            name="name"
                            onChange={(e) => setName(e.target.value)}
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
                            value={apellidos}
                            name="apellidos"
                            onChange={(e) => setApellidos(e.target.value)}
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
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
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
                            value={city}
                            name="city"
                            onChange={(e) => setCity(e.target.value)}
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
                            value={country}
                            name="country"
                            onChange={(e) => setCountry(e.target.value)}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="3">
                        <Form.Group>
                          <label>Sobre mi</label>
                          <textarea
                            style={{ width: "400%" }}
                            placeholder="Inserta aca tu informacion personal"
                            value={description}
                            name="about"
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button
                      className="btn-fill pull-right"
                      variant="info"
                      onClick={() => validar()}
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

                    <p className="description">{description}</p>
                  </div>
                  <p className="description text-center">
                    {email}
                    <br></br>
                    {phone}
                    <br></br>
                    {address}
                    <br></br>
                    {city}
                    <br></br>
                    {country}
                    <br></br>
                  </p>
                </Card.Body>
                <hr></hr>
                <br></br>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
