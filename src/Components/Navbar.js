import React, { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <div style={{ position: 'sticky' }}>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">CMPE 492</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">

            </div>
            <div className="dropdown-center" style={{marginRight:'30px'}}>
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    My Profile
  </button>
  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    <li><a className="dropdown-item" href="#">My Profile</a></li>
    <li><a className="dropdown-item" href="/login">Logout</a></li>
  </ul>
</div>

          </div>
        </div>
      </nav></div>
  )
}

export default Navbar