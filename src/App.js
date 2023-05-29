import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";
import './App.css';
import { Register } from "./pages/Register/Register";
import { Edit } from "./pages/Edit/Edit";
import { Delete } from "./pages/Delete/Delete";
import { Home } from "./pages/Home/Home";
import { Inicio } from "./pages/Home/Inicio";
import { EditProfile} from "./pages/EditProfile/EditProfile";
import {Loginuevo} from "./pages/Login/newLogin";
import { Freelancers } from './pages/Freelancers/Freelancers';
import { Empleos } from './pages/Empleos/Empleos';
import { AddEmpleo } from './pages/Profile/Employer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./pages/NavBar/NavBar";

function App() {


  return (
    <div className="App">
       <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/home" element={<Home />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/newLogin" element={<Loginuevo />} />
          <Route path="/pruebas" element={<pruebahome />} />
          <Route path="/freelancers" element={<Freelancers />} />
          <Route path="/addempleo" element={<AddEmpleo />} />
          <Route path="/empleos" element={<Empleos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
