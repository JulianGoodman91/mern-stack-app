import React from 'react';
// import Logo from 'client\src\components\images\SquareLogo.png';


function LogOn() {
    return (
        <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            {/* START INSERTING STANNP LOGO IMAGES THROUGHOUT THE APP WHERE RELEVANT */}
            <h3 className="Auth-form-title font-link">Log In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" style={{ marginBottom: "10px", marginTop: "10px" }}>
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
}

export default LogOn;