import React, { useState } from "react";


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
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ width: '50%', display: 'inline-block' }}>
                <label htmlFor="name">Nombres</label>
                <br></br>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Nombres" />
            </div>
            <div style={{ width: '50%', display: 'inline-block' }}>
                <label htmlFor="apellidos">Apellidos</label>
                <br></br>
                <input value={apellidos} name="apellidos" onChange={(e) => setApellidos(e.target.value)} id="Apellidos"placeholder="Apellidos" />
            </div>
            <div style={{ width: '50%', display: 'inline-block' }}>
                <label htmlFor="id">Id</label>
                <br></br>
                <input value={id} name="id" onChange={(e) => setId(e.target.value)} id="id" placeholder="Id" />
            </div>
            <div style={{ width: '50%', display: 'inline-block' }}>
                <label htmlFor="phone">Número de celular</label>
                <br></br>
                <input value={phone} name="numero" onChange={(e) => setPhone(e.target.value)} id="numero" placeholder="Número de celular" />
            </div>
            <div style={{ width: '50%', display: 'inline-block' }}>
                <label htmlFor="country">País</label>
                <br></br>
                <input value={country} name="country" onChange={(e) => setCountry(e.target.value)} id="country" placeholder="País" />
            </div>
            <div style={{ width: '50%', display: 'inline-block' }}>
                <label htmlFor="city">Ciudad</label>
                <br></br>
                <input value={city} name="city" onChange={(e) => setCity(e.target.value)} id="city" placeholder="Ciuadad" />
            </div>
            <div style={{ width: '50%', display: 'inline-block' }}>
                <label htmlFor="email">Email</label>
                <br></br>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="correo@dominio.com" id="email" name="email" />
            </div>
            <div style={{ width: '50%', display: 'inline-block' }}>
                <label htmlFor="password">Contraseña</label>
                <br></br>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            </div>
            <div style={{ width: '50%', display: 'inline-block' }}>
                <label htmlFor="address">Dirección de residencia</label>
                <br></br>
                <input value={address} onChange={(e) => setAddress(e.target.value)}type="address" placeholder="" id="address" name="address" />
            </div>
            <div style={{ width: '50%', display: 'inline-block' }}>
                <label htmlFor="password">Contraseña</label>
                <br></br>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            </div>
        </div>
        <br></br>
        <button type="submit">Log In</button>
    </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Ya tienes una cuenta? Ingresa ahora.</button>
</div>

    )
}
