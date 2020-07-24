import React from "react"

export default function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 text-center mx-auto">
            <h4 className="text-center text-yellow text-capitalize font-weight-light">
              All rigths reserved &copy; {new Date().getFullYear()}
            </h4>
          </div>
        </div>
      </div>
    </footer>
  )
}
