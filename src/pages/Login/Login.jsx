import React, { useState } from "react";
import logo from "../../images/imagen1.png";
import "bootstrap/dist/css/bootstrap.min.css";
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
      .post(rutas.host + rutas.user + rutas.login + `?email=${email}&password=${pass}`, {
        email: email,
        password: pass,
      })
      .then((res) => {
        if (res.data === "" || !isValidEmail(email)) {
          setError("Datos incorrectos");
          console.log(res.data);
        }
        else {
          alert("Bienvenido");
          props.onGoToHome();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
    setError(null);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <img src={logo} className="iconlogo" alt="Logo" />
                <h2 className="mt-3">Inicio de sesión</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    value={email}
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="correo@gmail.com"
                    required
                  />
                  {error && <p className="text-danger">{error}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="********"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-4">
                  Ingresar
                </button>
              </form>
              <div className="text-center mt-3">
                <button className="btn btn-link" onClick={() => props.onFormSwitch('register')}>
                  ¿No tienes una cuenta? Regístrate ahora.
                </button>
                <button className="btn btn-link" onClick={() => props.onFormSwitch('edit')}>
                  Edita tu perfil.
                </button>
                <button className="btn btn-link" onClick={() => props.onFormSwitch('delete')}>
                  Borra tu perfil.
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

