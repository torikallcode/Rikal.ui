import React from 'react'

export const ButtonRotate = ({ text }) => {
  return (
    <a
      className="inline-block px-8 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
      href="#"
    >
      {text}
    </a>)
}
