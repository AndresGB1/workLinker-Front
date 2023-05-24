import React from "react";
import logo from "../../images/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./newlogin.css";
// react-bootstrap components
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';

export const Loginuevo = (props) => {
    return (
        <>
      <MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='20'>

    <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
      <MDBCardBody className='p-5 w-100 d-flex flex-column'>
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
        <br></br><hr></hr>
        <h3 className="fw-bold mb-2 text-center">Inicio de sesión</h3>
        

        <MDBInput wrapperClass='mb-4 w-100' label='Correo Electrónico' id='formControlLg' type='email' size="lg"/>
        <MDBInput wrapperClass='mb-4 w-100' label='Contraseña' id='formControlLg' type='password' size="lg"/>

        <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Recordar contraseña' />

        <MDBBtn size='lg' className="botonfeo"  onClick={() => props.onFormSwitch('home')}>
          Ingresar
        </MDBBtn>
        <MDBBtn size='med' outline rounded color='secondary'className="botonfeo"  onClick={() => props.onFormSwitch('Inicio')}>
          Volver 
        </MDBBtn>
        

        

      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
</>
        );
    };
    

    