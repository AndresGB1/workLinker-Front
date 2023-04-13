import React, { useState } from "react";

export const Home = (props) => {
  const [id, setId] = useState('');
  const [action, setAction] = useState('delete');
  
  const handleDelete = (e) => {
    e.preventDefault();
  }
  return (
    <div>
        <label htmlFor="action">Portal empleos:</label>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Regresar.</button>
    
    </div>
  )
}
