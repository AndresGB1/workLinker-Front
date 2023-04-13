import React, { useState } from "react";
import './App.css';
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Edit } from "./pages/Edit/Edit";
import { Delete } from "./pages/Delete/Delete";
import { Home } from "./pages/Home/Home";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const goToHome = () => {
    setCurrentForm('home');
  };

  return (
    <div className="App">
      {
        currentForm === 'login' ? (
          <Login onFormSwitch={toggleForm} onGoToHome={goToHome} />
        ) : currentForm === 'register' ? (
          <Register onFormSwitch={toggleForm} />
        ) : currentForm === 'edit' ? (
          <Edit onFormSwitch={toggleForm} />
        ) : currentForm === 'delete' ? (
          <Delete onFormSwitch={toggleForm} />
        ) : currentForm === 'home' ? (
          <Home onFormSwitch={toggleForm} />
        ) : null
      }
    </div>
  );
}

export default App;
