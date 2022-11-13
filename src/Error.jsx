import React, { useEffect } from "react"
import { NavLink } from "react-router-dom"

const Error = () => {
  useEffect(() => {
    document.title = "Not Found - 404Pacha"
  })
  return (
    <div className="mt-10 mb-12 text-center align-center justify-center top-0 left-0 h-full w-full">
      <h1 className="text-4xl">No Pages</h1>
      <p className="text-base font-medium mt-5">
        Looks like you're lost in the space, WOoh!
      </p>

      <div className="text-center flex align-center justify-evenly py-12">
        <button className="transition-all font-semibold border-2 text-black py-2 px-6 hover:bg-pink-600 hover:text-white rounded">
          <NavLink to="/">Go Home</NavLink>
        </button>
        <button className="transition-all font-semibold py-2 px-6 bg-pink-600 text-white hover:text-black border-2 hover:bg-transparent hover:border-2 rounded">
          <NavLink to="/docs">Read Instructions</NavLink>
        </button>
      </div>
    </div>
  )
}

export default Error
