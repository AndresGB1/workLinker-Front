import React, { useEffect, useState } from "react";
import axios from 'axios';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    useEffect(() => {
        axios.get('http://localhost:8080/ws/role/all')
            .then(res => {
                console.log(res.data);
                setRoles(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const isValidate = () => {
        if (email === '' || id === '' || pass === '' || name === '' || apellidos === '' || phone === '' || country === '' || city === '' || address === '' || usuario.rol === '') {
            console.log('Todos los campos son obligatorios');
            return false;
        }
        return true;
    }

    const onChangue = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
        axios.post('http://localhost:8080/ws/user/add', {
            "loginName": email,
            "password": pass,
            "email": email,
            "fullName": name,
            "phoneNumber": phone,
            "address": address,
            "city": city,
            "country": country,
        }
        )

    }

    return (
    <div className="auth-form-container">
    <h2>Registro Nuevo Usuario</h2>
    <form className="register-form">
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
            <div style={{ width: '50%', display: 'inline-block' }}>
                <label htmlFor="description">Tipo de usuario</label>
                <br></br>
                <select value="Rol" onChange={onChangue} name="rol">
                    <option value="">Seleccione un tipo de usuario</option>
                    {roles && roles.map((role) => (
                        <option value={role.roleName}>{role.roleName}</option>
                    ))}
                </select>
               </div>
        </div>
        <label htmlFor="llenar campos" disabled={isValidate()}>Debe llenar todos los campos</label>

        <br></br>
        <button disabled={!isValidate()} onClick={handleSubmit} className="btn btn-primary">Registrarse</button>
        </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Ya tienes una cuenta? Ingresa ahora.</button>
</div>

    )
}
