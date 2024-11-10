import React from 'react'

export const ButtonHover = ({ text }) => {
  return (
    <a
      className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-indigo-600 rounded group focus:outline-none focus:ring active:bg-indigo-500"
      href="#"
    >
      <span className="absolute transition-all -start-full group-hover:start-4">
        <svg
          className="size-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </span>

      <span className="text-sm font-medium transition-all group-hover:ms-4">{text}</span>
    </a>
  )
}
