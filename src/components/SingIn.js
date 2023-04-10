import React from 'react'

function SingIn() {
  return (
    <div className="container">
    <h2 className="text-center">SING IN</h2>
    <form>
      <div className="form-group">
        <label htmlFor="username">UserName:</label>
        <div></div>
        <input type="text" className="form-control" id="username" placeholder="Enter username" />
      </div>
      <div></div>
      <div className="form-group">
        <br></br>
        <label htmlFor="password">Password:</label>
        <div></div>
        <input type="password" className="form-control" id="password" placeholder="Enter password" />
      </div>
      <br></br>
      <button type="submit" className="btn btn-primary">Sing In</button>
    </form>
    <div className="text-center mt-3">
      <div>
        <p>Don't you have an account? <a href="/register">Sing Up</a></p>
      </div>
    </div>
  </div>

  )
}export default SingIn;