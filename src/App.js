import React, { useState } from "react";
import './App.css';
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Edit } from "./pages/Edit/Edit";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
   {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : currentForm === "register" ? (
        <Register onFormSwitch={toggleForm} />
      ) : (
        <Edit onFormSwitch={toggleForm} />
      )}
    </div>
    
  );
}

export default App;
