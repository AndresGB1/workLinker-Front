import React, { useState } from "react";

export const Delete = (props) => {
const [id, setId] = useState('');
const [action, setAction] = useState('delete');

const handleDelete = (e) => {
  e.preventDefault();
}

return (
    <div className="auth-form-container">
      <form className="delete-form" onSubmit={handleDelete}>
        <h2>Borra/Inhabilita tu usuario</h2>
        <div style={{ width: '100%', display: 'inline-block' }}>
          <label htmlFor="id">ID del usuario</label>
          <br></br>
          <input value={id} name="id" onChange={(e) => setId(e.target.value)} id="id" placeholder="ID del usuario" />
        </div>
        <br></br>
        <br></br>
        <label htmlFor="action">Acción a realizar:</label>
        <br></br>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="radio" id="delete" name="action" value="delete" checked={action === 'delete'} onChange={(e) => setAction(e.target.value)} />
          <label htmlFor="delete" style={{ marginLeft: '5px' }}>Borrar cuenta</label>
          <input type="radio" id="disable" name="action" value="disable" checked={action === 'disable'} onChange={(e) => setAction(e.target.value)} style={{ marginLeft: '100px' }} />
          <label htmlFor="disable" style={{ marginLeft: '5px' }}>Inhabilitar cuenta</label>
        </div>
        <br></br>
        <button type="submit">Realizar</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Regresar.</button>
    </div>
  )
}
