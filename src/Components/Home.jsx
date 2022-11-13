import React, { useEffect } from "react"
import { Navigate, NavLink } from "react-router-dom"
import HomeAbout from "./Assets/InstallPackage"

const Home = () => {
  useEffect(() => {
    document.title = "Home - Pacha"
  })
  return (
    <div className="ok">
      <div className="fancybg mt-2 py-8 h-72 flex flex-col justify-center shadow-lg rounded">
        <h1 className="text-center text-3xl md:text-5xl text-white">Pacha</h1>
        <p
          className="text-white text-center m-4 text-sm md:text-lg font-semibold
      "
        >
          The widest Javascript Pacha package all over the world!
        </p>

        <div className="text-center flex align-center justify-evenly">
          <button className="transition-all font-semibold border-2 text-white py-2 px-6 hover:bg-white hover:text-black rounded">
            <NavLink to="/docs">Get Started</NavLink>
          </button>
          <button className="transition-all font-semibold ml-10 md:ml-0 py-2 px-6 bg-white text-black hover:text-white border-2 hover:bg-transparent hover:border-2 rounded">
            <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">
              Take the Tutorial
            </a>
          </button>
        </div>
      </div>
      <HomeAbout />
    </div>
  )
}

export default Home
