import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from "react";
import './App.css';
import { Register } from "./pages/Register/Register";
import { Edit } from "./pages/Edit/Edit";
import { Delete } from "./pages/Delete/Delete";
import { Home } from "./pages/Home/Home";
import { Inicio } from "./pages/Home/Inicio";
import { EditProfile} from "./pages/EditProfile/EditProfile";
import {Loginuevo} from "./pages/Login/newLogin";
import {pruebahome } from "./pages/Home/Home2";

function App() {
  const [currentForm, setCurrentForm] = useState('Inicio');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const goToHome = () => {
    setCurrentForm('home');
  };

  return (
    <div className="App">
      {
        currentForm === 'Inicio' ? (
          <Inicio onFormSwitch={toggleForm} onGoToHome={goToHome} />
        ) : currentForm === 'register' ? (
          <Register onFormSwitch={toggleForm} />
        ) : currentForm === 'edit' ? (
          <Edit onFormSwitch={toggleForm} />
        ) : currentForm === 'delete' ? (
          <Delete onFormSwitch={toggleForm} />
        ) : currentForm === 'home' ? (
          <Home onFormSwitch={toggleForm} />
        ) : currentForm === 'editprofile' ? (
          <EditProfile onFormSwitch = {toggleForm} />
        ) :currentForm==='newLogin' ? (
          <Loginuevo onFormSwitch = { toggleForm} />
        ) :currentForm === 'pruebas' ? (
          <pruebahome onFormSwitch = {toggleForm} />
        ) :null
      }
    </div>
  );
}

export default App;
