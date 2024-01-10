import React from 'react';


function SignUp() {
    return (
        <div className="Auth-form-container shadowBackground">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title font-link">Sign Up</h3>
            <div className="form-group mt-3">
              <label>Email address*</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
              <label style={{ marginTop: "20px" }}>User Name*</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Username"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password*</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group mt-3">
              <label>Re-type Password*</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Re-Type password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" style={{ marginBottom: "10px", marginTop: "10px" }}>
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    )
}

export default SignUp;