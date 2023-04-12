import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

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
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
          <h2>Registro Nuevo Usuario</h2>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Nombres</label>
                  <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" className="form-control" placeholder="Nombres" />
                </div>
                <div className="form-group">
                  <label htmlFor="apellidos">Apellidos</label>
                  <input value={apellidos} name="apellidos" onChange={(e) => setApellidos(e.target.value)} id="Apellidos" className="form-control" placeholder="Apellidos" />
                </div>
                <div className="form-group">
                  <label htmlFor="id">Id</label>
                  <input value={id} name="id" onChange={(e) => setId(e.target.value)} id="id" className="form-control" placeholder="Id" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Número de celular</label>
                  <input value={phone} name="numero" onChange={(e) => setPhone(e.target.value)} id="numero" className="form-control" placeholder="Número de celular" />
                </div>
                <div className="form-group">
                  <label htmlFor="country">País</label>
                  <input value={country} name="country" onChange={(e) => setCountry(e.target.value)} id="country" className="form-control" placeholder="País" />
                </div>
                <div className="form-group">
                  <label htmlFor="city">Ciudad</label>
                  <input value={city} name="city" onChange={(e) => setCity(e.target.value)} id="city" className="form-control" placeholder="Ciudad" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="correo@dominio.com" id="email" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" className="form-control" placeholder="********" id="password" name="password" />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Dirección de residencia</label>
                  <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" placeholder="Dirección de residencia" id="address" name="address" />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Descripción</label>
                  <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Escribe algo sobre ti" id="description" name="description" rows="5"></textarea>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Registrarse</button>
          </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Ya tienes una cuenta? Ingresa ahora.</button>
</div>
    )
}
