import React, { useState } from "react";


export const Edit = (props) => {
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label htmlFor="searchId" style={{ marginRight: '10px' }}>Digite su Id para búsqueda: </label>
            <input type="text" id="searchId" name="searchId" style={{ width: '300px', marginRight: '10px' }} />
            <button style={{ width: '80px' }}>Buscar</button>
        </div>
        <br /><br />
        <table>
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Número de celular</th>
          <th>País</th>
          <th>Ciudad</th>
          <th>Email</th>
          <th>Dirección de residencia</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{apellidos}</td>
          <td>{phone}</td>
          <td>{country}</td>
          <td>{city}</td>
          <td>{email}</td>
          <td>{address}</td>
          <td>{description}</td>
        </tr>
      </tbody>
    </table>
        <br /><br /><br />
    <form className="register-form" onSubmit={handleSubmit}>
    <h2>Edita tu información</h2>
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
                <label htmlFor="address">Dirección de residencia</label>
                <br></br>
                <input value={address} onChange={(e) => setAddress(e.target.value)}type="address" placeholder="" id="address" name="address" />
            </div>
            <div style={{ width: '50%', display: 'inline-block' }}>
                <label htmlFor="description">Description</label>
                <br></br>
                <input value={description} onChange={(e) => setPass(e.target.value)} type="description" placeholder="" id="description" name="description" />
            </div>
        </div>
        <br></br>
        <button type="submit">Edit</button>
    </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Regresar.</button>
</div>

    )
}
