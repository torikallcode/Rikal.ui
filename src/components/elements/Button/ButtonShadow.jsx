import React from 'react'

export const ButtonShadow = ({ text }) => {
  return (
    <a
      className="inline-block px-8 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
      href="#"
    >
      {text}
    </a>)
}
