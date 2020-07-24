import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        name: "Home",
        link: "/",
      },
      {
        id: 2,
        name: "About",
        link: "/about",
      },
    ],
  }

  handleToggle = () => {
    if (!this.state.navbarOpen) {
      this.setState({
        css: "collapse navbar-collapse show",
        navbarOpen: true,
      })
    } else {
      this.setState({
        css: "collapse navbar-collapse",
        navbarOpen: false,
      })
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </Link>

        <button
          className="navbar-toggler"
          data-toggle="collapse"
          type="button"
          onClick={this.handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(n => {
              return (
                <li key={n.id} className="nav-item">
                  <Link to={n.link} className="nav-link text-capitalize">
                    {n.name}
                  </Link>
                </li>
              )
            })}

            <li className="nav-item ml-sm-5">
              <FaCartArrowDown className="cart-icon" />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
