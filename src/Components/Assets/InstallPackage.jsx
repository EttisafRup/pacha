import React from "react"
import { NavLink } from "react-router-dom"

const HomeAbout = () => {
  return (
    <div>
      <section className="mx-4 my-5 md:mx-10">
        <big className="font-semibold text-3xl">
          <span className="text-pink-500">#</span>Pacha
        </big>
        <p className="text-sm md:text-lg font-semibold my-5 ">
          Pacha is fun! Pacha improves writing codes in your code editor much
          better. Start using pacha to increase your production speed and
          performance more faster and smoother!
        </p>
        <p className="-px-6">
          To install and setup this package, open your terminal -
        </p>
        <blockquote className="border-l-4 border-pink-500 italic my-8 pl-8 md:pl-12">
          <p className="-px-6">Installing with npm</p>
        </blockquote>
        <pre className="bg-gray-900 w-62 md:w-96 rounded text-white font-mono text-base p-2 md:p-4">
          <code className="break-words whitespace-pre-wrap">
            <span className="text-pink-500">npm</span> install pacha
            <p></p>
            <span className="text-pink-500">npm</span> pacha init -p
          </code>
        </pre>
        <blockquote className="border-l-4 border-pink-500 italic my-8 pl-8 md:pl-12">
          <p className="-px-6">Installing with yarn</p>
        </blockquote>
        <pre className="bg-gray-900 w-62 md:w-96 rounded text-white font-mono text-base p-2 md:p-4">
          <code className="break-words whitespace-pre-wrap">
            <span className="text-pink-500">yarn</span> add pacha
            <p></p>
            <span className="text-pink-500">yarn</span> init
          </code>
        </pre>
        <p className="my-4 ">
          After installing it, you can use it directly in your project
        </p>
        <blockquote className="border-l-4 border-pink-500 italic my-8 pl-8 md:pl-12"></blockquote>
        <pre className="bg-gray-900 w-62 md:w-full rounded text-white font-mono text-base p-2 md:p-4">
          <code className="break-words whitespace-pre-wrap">
            <p className="text-gray-500">// in CJS</p>
            <span className="text-pink-500">const</span> pacha =
            require("pacha")
            <p className="mt-2"></p>
            <p className="text-gray-500">// Or, in MJS</p>
            <span className="text-pink-500">import</span> pacha{" "}
            <span className="text-pink-500">from</span> "pacha"
            <p className="text-gray-500 mt-5">
              // Use any one in your own choice (Also depends on the project)
            </p>
          </code>
        </pre>
        <p className="m-4"></p>
        <p className="font-semibold text-xl">
          Then you're ready to go! Just follow our{" "}
          <NavLink className="text-pink-500 underline" to="/docs">
            documentations
          </NavLink>{" "}
          and start your projects today!
        </p>
      </section>
    </div>
  )
}

export default HomeAbout
