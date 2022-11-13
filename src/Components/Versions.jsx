import React, { useEffect } from "react"

const Versions = () => {
  useEffect(() => {
    document.title = "Versions - Pacha"
  })

  return (
    <div className="mx-4 my-7 md:mx-10">
      <h1 className="text-2xl font-semibold">
        All Versions of <span className="text-pink-600">"</span>The Pacha
        <span className="text-pink-600">"</span>{" "}
      </h1>
      <p>To install any versions from it, do :</p>
      <p className="text-base font-medium m-4">Using npm:</p>
      <pre className="bg-gray-900 rounded text-white font-mono text-base p-2 md:p-4">
        <code className="break-words whitespace-pre-wrap">
          <span className="text-pink-500">npm</span> install pacha@version
          <p></p>
          <p className="text-gray-500 mt-5">
            // Just type the exact version name 😉
          </p>
        </code>
      </pre>
      <p className="text-base font-medium m-4">Using yarn:</p>

      <pre className="bg-gray-900 rounded text-white font-mono text-base p-2 md:p-4">
        <code className="break-words whitespace-pre-wrap">
          <span className="text-pink-500">yarn</span> add pacha@version
          <p></p>
          <p className="text-gray-500 mb-5">
            // Just type the exact version name 😉
          </p>
        </code>
      </pre>

      <h1 className="text-2xl font-semibold mt-10">
        Versions Repository
        <span className="text-pink-600">&rarr;</span>{" "}
      </h1>
      <div className="flex flex-row-reverse flex-wrap-reverse justify-between">
        <blockquote className="border-l-4 border-pink-500 my-8 pl-8 md:pl-12">
          <p className="-px-6">
            Pacha <strong>v1.0.0</strong>
          </p>
          <p className="-px-6">
            <span className="text-pink-600">☕ </span>
            Released on <strong>November 13, 2022.</strong>
          </p>
        </blockquote>
        <blockquote className="border-l-4 border-pink-500 my-8 pl-8 md:pl-12">
          <p className="-px-6">
            Pacha <strong>v1.0.1</strong>
          </p>
          <p className="-px-6">
            <span className="text-pink-600">☕ </span>
            Released on <strong>November 13, 2022.</strong>
          </p>
        </blockquote>
        <blockquote className="border-l-4 border-pink-500 my-8 pl-8 md:pl-12">
          <p className="-px-6">
            Pacha <strong>v1.0.2</strong>
          </p>
          <p className="-px-6">
            <span className="text-pink-600">☕ </span>
            Released on <strong>November 13, 2022.</strong>
          </p>
          <p className="-px-6">
            <span className="text-pink-600">🕶 </span>
            Documentations Added <strong>Github Update v0.</strong>
          </p>
        </blockquote>
        <blockquote className="border-l-4 border-pink-500 my-8 pl-8 md:pl-12">
          <p className="-px-6">
            Pacha <strong>v2.0.0</strong>
          </p>
          <p className="-px-6">
            <span className="text-pink-600">☕ </span>
            Released on <strong>November 13, 2022.</strong>
          </p>
          <p className="-px-6">
            <span className="text-pink-600">🕶 </span>
            Pacha Vibration Added <strong>vibrateAss v2.</strong>
          </p>
        </blockquote>
      </div>
    </div>
  )
}

export default Versions
