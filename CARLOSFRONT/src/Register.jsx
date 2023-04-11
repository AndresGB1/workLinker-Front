import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Registro Nuevo Usuario</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre completo</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Nombre completo" />
            <label htmlFor="name">Número de celular</label>
            <input value={phone} name="numero" onChange={(e) => setPhone(e.target.value)} id="numero" placeholder="Número de celular" />
            <label htmlFor="email">EMAIL</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="correo@dominio.com" id="email" name="email" />
            <label htmlFor="password">Contraseña</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Ya tienes una cuenta? Ingresa ahora.</button>
    </div>
    )
}
