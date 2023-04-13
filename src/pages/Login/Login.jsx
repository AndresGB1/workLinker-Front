import React, { useState } from "react";
import logo from "../../images/FondoLogin.png"; // with import
import "../../App.css";
import rutas from "../../utils/axios";
import axios from "axios";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post(rutas.host+rutas.user+rutas.login+`?email=${email}&password=${pass}`, {
          email: email,
          password: pass,
        })
        .then((res) => {
         //si es null es porque no existe el usuario
          if (res.data === "" || !isValidEmail(email)) {
            alert("Datos incorrectos");
            console.log(res.data);
          }
          else{
            alert("Bienvenido");
            props.onGoToHome();
          }
        })
        .catch((err) => {
          console.log(err);
        });
        // if (isValidEmail(email)) {
        //     props.onGoToHome();
        // } else {
        //     setError('El email está mal escrito');
        // }
       
          e.preventDefault();
          
        
    }
    
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    
    const handleChange = event => {
        setEmail(event.target.value);
        setError(null);
    };

    return (
        <div className="auth-form-container">
            <div className="title">
                <img src={logo} className="iconlogo" alt="Logo" />
                <h2>Inicio de sesión</h2>
            </div> 
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <br></br>
                <input 
                    value={email} 
                    onChange={handleChange} 
                    placeholder="correo@gmail.com" 
                    id="email" 
                    name="email" 
                />
                {error &&  <p style={{color: 'red'}}>{error}</p>}
                <label htmlFor="password">Contraseña</label>
                <input 
                    value={pass} 
                    onChange={(e) => setPass(e.target.value)} 
                    type="password" 
                    placeholder="********" 
                    id="password" 
                    name="password" 
                />
                <button type="submit">Ingresar</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
                ¿No tienes una cuenta? Regístrate ahora.
            </button>
            <button className="link-btnEdit" onClick={() => props.onFormSwitch('edit')}>
                Edita tu perfil.
            </button>
            <button className="link-btnDelete" onClick={() => props.onFormSwitch('delete')}>
                Borra tu perfil.
            </button>
        </div>
    )
}
