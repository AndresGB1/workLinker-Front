import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./Register.css"
import logo from "../../images/Logo.png";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBTextArea
  }
  from 'mdb-react-ui-kit';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [usuario, setUsuario] = useState({});
    const [roles, setRoles] = useState([]);
    const [rol, setRol] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/ws/user/add?role_id=' + usuario.rol, {
            "loginName": email,
            "password": pass,
            "isActive": true,
            "email": email,
            "fullName": name,
            "phoneNumber": phone,
            "address": address,
            "city": city,
            "country": country,
            "userDescription": description,
            "role_id": usuario.rol
        }
        )
    }
    useEffect(() => {
        axios.get('http://localhost:8080/ws/role/all')
            .then(res => {
                
                setRoles(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const isValidate = () => {
        if (email === '' || id === '' || pass === '' || name === '' || apellidos === '' || phone === '' || country === '' || city === '' || address === '' || usuario.rol === '') {
            
            return false;
        }
        return true;
    }

    const onChangue = (e) => {
        //found id at roles
        const found = roles.find(element => element.roleName === e.target.value);
        
        setUsuario({
            ...usuario,
            'rol': found.id
        })
        
        setRol(e.target.value);

    }

    return (
             
    <MDBContainer fluid>

      <MDBCard className='text-black m-2' >
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registro</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Nombres' input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name"/>
                <MDBInput label='Apellidos' input value={apellidos} onChange={(e) => setApellidos(e.target.value)} id="Apellidos" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Numero de documento'value={id} name="id" onChange={(e) => setId(e.target.value)} id="id"  type="number"/>
                <MDBInput label='Numero de celular' value={phone} name="numero" onChange={(e) => setPhone(e.target.value)} id="numero" type="number"/>
              </div>
              
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Pais' value={country} name="country" onChange={(e) => setCountry(e.target.value)} id="country" />
               
                <MDBInput label='Ciudad'  value={city} name="city" onChange={(e) => setCity(e.target.value)} id="city"/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Correo electronico'value={email} onChange={(e) => setEmail(e.target.value)}type="email"  id="email" name="email" />
                <MDBInput label='Password' value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
              </div>
              <textarea class="md-textarea form-control" rows="3" width placeholder="Descripción" ></textarea>
              <br></br>
              <button disabled={!isValidate()} onClick={handleSubmit} className="btn btn-primary">Registrarse</button>
              <MDBBtn outline className="botonfeo" color='secondary' onClick={() => props.onFormSwitch('Inicio')}>
                     Volver
                </MDBBtn>
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src={logo} fluid  style={{
              width: "500px",
              marginLeft: "80px",
             
            }}/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>


    )
}
