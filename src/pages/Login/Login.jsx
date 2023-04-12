import React, { useState } from "react";
import logo from '../../images/FondoLogin.png'; // with import
import '../../App.css';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
    
      const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
          setError('El email esta mal escrito');
        } else {
          setError(null);
        }
    
        setEmail(event.target.value);
      };
    return (
        <div className="auth-form-container">
          <div className="title">
          <img src={logo} className="iconlogo" />
            <h2>Inicio de sesión </h2>
            </div> 
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <br></br>
                <input value={email} onChange={handleChange} placeholder="correo@gmail.com" id="email" name="email" />
                {error &&  <p style={{color: 'red'}}>{error}</p>}
                <label htmlFor="password">CONTRASEÑA</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">INGRESAR</button>
                
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>No tienes una cuenta? Registratre ahora.</button>
            <button className="link-btnEdit" onClick={() => props.onFormSwitch('edit')}>Edita tu perfil.</button>
        </div>
    )
}