import React from "react";

export const ButtonBasic = ({ text }) => {
  return (
    <a
      className="inline-block px-12 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
      href="#"
    >
      {text}
    </a>
  )
}