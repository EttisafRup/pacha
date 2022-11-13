import React from "react"
import { Routes, Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <NavLink to="/">
            <span className="ml-3 text-3xl md:text-xl cursor-pointer">
              Pa<span className="text-pink-600">c</span>ha
            </span>
          </NavLink>
        </span>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <ul>
            <NavLink
              to="/"
              className={(style) =>
                style.isActive ? "NavLink text-pink-600" : "NavLink"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/docs"
              className={(style) =>
                style.isActive ? "NavLink text-pink-600" : "NavLink"
              }
            >
              Docs
            </NavLink>
            <NavLink
              to="/versions"
              className={(style) =>
                style.isActive ? "NavLink text-pink-600" : "NavLink"
              }
            >
              Versions
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
